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
import org.springframework.stereotype.Service;

import java.util.List;
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
        Article saved = articleRepository.save(article);
        return ARTICLE_MAPPER.mapToDTO(saved);
    }

    @Override
    public void deleteArticle(Integer id) {
        Article article = findArticle(id);

        verifyIfArticleActive(article);
        article.setActive(false);

        articleRepository.save(article);
    }

    @Override
    public List<ArticleDTO> getAllActiveArticles() {
        return articleRepository.findAll().stream()
                .filter(Article::isActive)
                .map(ARTICLE_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ArticleDTO> getAllArticles() {
        return articleRepository.findAll().stream()
                .map(ARTICLE_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ArticleDTO getArticleById(Integer id) {
        Article article = findArticle(id);
        return ARTICLE_MAPPER.mapToDTO(article);
    }

    @Override
    public void updateArticle(UpdateArticleDTO updateArticleDTO) {
        Article article = ARTICLE_MAPPER.mapToModel(updateArticleDTO);
        articleRepository.save(article);
    }

    private Article findArticle(int id){
        return articleRepository.findById(id).orElseThrow(()-> new EntityNotFoundException(ENTITY, "id", ""+id));
    }

    private void verifyIfArticleActive(Article article) {
        if (!article.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, article.getId());
        }
    }
}