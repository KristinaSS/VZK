package com.vzk.news.services.impl;

import com.vzk.news.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.news.exceptions.EntityNotFoundException;
import com.vzk.news.models.Article;
import com.vzk.news.repos.ArticleRepository;
import com.vzk.news.services.ArticleService;
import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.news.mappers.ArticleMapper.ARTICLE_MAPPER;

@Service
public class ArticleServiceImpl implements ArticleService {
    private static final String ENTITY = "Article";

    @Autowired
    ArticleRepository articleRepository;

    @Override
    public ArticleDTO createArticle(CreateArticleDTO createArticleDTO) {
        Article article = ARTICLE_MAPPER.mapToModel(createArticleDTO);
        article.setActive(true);
        Article saved = articleRepository.save(article);
        return ARTICLE_MAPPER.mapToDTO(saved);
    }

    @Override
    public void deleteArticle(UUID id) {
        Article article = findArticle(id);

        verifyIfArticleActive(article);
        article.setActive(false);

        articleRepository.save(article);
    }

    @Override
    public Page<ArticleDTO> getAllActiveArticles(PageRequest pageRequest) {
        List<ArticleDTO> activeArticles = articleRepository.findAll().stream()
                .filter(Article::isActive)
                .map(ARTICLE_MAPPER::mapToDTO)
                .sorted((a1, a2) -> a2.getDate().compareTo(a1.getDate()))
                .collect(Collectors.toList());

        int pageSize = pageRequest.getPageSize();
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageSize), activeArticles.size());

        if (start >= activeArticles.size()) {
            return new PageImpl<>(Collections.emptyList(), pageRequest, 0);
        }

        return new PageImpl<>(activeArticles.subList(start, end), pageRequest, activeArticles.size());
    }

    @Override
    public List<ArticleDTO> getAllArticles() {
        return articleRepository.findAll().stream()
                .map(ARTICLE_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ArticleDTO getArticleById(UUID id) {
        Article article = findArticle(id);
        return article.isActive() ? ARTICLE_MAPPER.mapToDTO(article) : null;
    }

    @Override
    public void updateArticle(UpdateArticleDTO updateArticleDTO) {
        Article article = ARTICLE_MAPPER.mapToModel(updateArticleDTO);
        articleRepository.save(article);
    }

    private Article findArticle(UUID id) {
        return articleRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }

    private void verifyIfArticleActive(Article article) {
        if (!article.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, article.getId());
        }
    }
}