package com.vzk.news.controllers;

import org.openapitools.api.ArticleApi;
import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ArticleController implements ArticleApi {
    @Override
    public ResponseEntity<ArticleDTO> createArticle(CreateArticleDTO createArticleDTO) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteArticle(Integer article) {
        return null;
    }

    @Override
    public ResponseEntity<List<ArticleDTO>> getAllActiveArticles() {
        return null;
    }

    @Override
    public ResponseEntity<List<ArticleDTO>> getAllArticles() {
        return null;
    }

    @Override
    public ResponseEntity<ArticleDTO> getArticleById(Integer article) {
        return null;
    }

    @Override
    public ResponseEntity<Void> updateArticle(ArticleDTO updatedArticle, UpdateArticleDTO updateArticleDTO) {
        return null;
    }
}
