package com.vzk.news.services;

import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;

import java.util.List;

public interface ArticleService {
    ArticleDTO createArticle(CreateArticleDTO createArticleDTO);

    void deleteArticle(Integer article);

    List<ArticleDTO> getAllActiveArticles();

    List<ArticleDTO> getAllArticles();

    ArticleDTO getArticleById(Integer article);

    void updateArticle(UpdateArticleDTO updateArticleDTO);
}
