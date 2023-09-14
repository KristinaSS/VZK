package com.vzk.news.controllers;

import com.vzk.news.services.ArticleService;
import org.openapitools.api.ArticleApi;
import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ArticleController implements ArticleApi {
    @Autowired
    ArticleService articleService;

    @Override
    public ResponseEntity<ArticleDTO> createArticle(CreateArticleDTO createArticleDTO) {
        return ResponseEntity.ok(articleService.createArticle(createArticleDTO));
    }

    @Override
    public ResponseEntity<Void> deleteArticle(Integer article) {
        articleService.deleteArticle(article);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<ArticleDTO>> getAllActiveArticles() {
        return ResponseEntity.ok(articleService.getAllActiveArticles());
    }

    @Override
    public ResponseEntity<List<ArticleDTO>> getAllArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }

    @Override
    public ResponseEntity<ArticleDTO> getArticleById(Integer article) {
        return ResponseEntity.ok(articleService.getArticleById(article));
    }

    @Override
    public ResponseEntity<Void> updateArticle(UpdateArticleDTO updateArticleDTO) {
        articleService.updateArticle(updateArticleDTO);
        return ResponseEntity.ok(null);
    }
}
