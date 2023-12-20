package com.vzk.news.services;

import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.UUID;

public interface ArticleService {
    ArticleDTO createArticle(CreateArticleDTO createArticleDTO);

    void deleteArticle(UUID article);

    Page<ArticleDTO> getAllActiveArticles(PageRequest pageRequest);

    List<ArticleDTO> getAllArticles();

    ArticleDTO getArticleById(UUID article);

    void updateArticle(UpdateArticleDTO updateArticleDTO);

    List<ArticleDTO> getAllActiveFilteredArticles(String filter);

}
