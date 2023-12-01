package com.vzk.news.controllers;

import com.vzk.news.services.ArticleService;
import org.openapitools.api.ArticleApi;
import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;


@RestController
public class ArticleController implements ArticleApi {
    @Autowired
    ArticleService articleService;

    @Override
    public ResponseEntity<ArticleDTO> createArticle(CreateArticleDTO createArticleDTO) {
        return ResponseEntity.ok(articleService.createArticle(createArticleDTO));
    }

    @Override
    public ResponseEntity<Void> deleteArticle(UUID article) {
        articleService.deleteArticle(article);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<ArticleDTO>> getAllActiveArticles(Integer page) {
        int pageSize = 8;
        PageRequest pageRequest = PageRequest.of(page, pageSize);
        return ResponseEntity.ok(articleService.getAllActiveArticles(pageRequest).getContent());
    }


    @Override
    public ResponseEntity<List<ArticleDTO>> getAllArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }

    @Override
    public ResponseEntity<ArticleDTO> getArticleById(UUID article) {
        return ResponseEntity.ok(articleService.getArticleById(article));
    }

    @Override
    public ResponseEntity<Void> updateArticle(UpdateArticleDTO updateArticleDTO) {
        articleService.updateArticle(updateArticleDTO);
        return ResponseEntity.ok(null);
    }
}
