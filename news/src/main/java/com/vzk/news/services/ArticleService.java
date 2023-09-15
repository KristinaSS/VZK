package com.vzk.news.services;

import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;

import java.util.List;
import java.util.UUID;

public interface ArticleService {
    ArticleDTO createArticle(CreateArticleDTO createArticleDTO);

    void deleteArticle(UUID article);

    List<ArticleDTO> getAllActiveArticles();

    List<ArticleDTO> getAllArticles();

    ArticleDTO getArticleById(UUID article);

    void updateArticle(UpdateArticleDTO updateArticleDTO);
}
