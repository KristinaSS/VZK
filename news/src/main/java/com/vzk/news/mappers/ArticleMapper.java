package com.vzk.news.mappers;

import com.vzk.news.models.Article;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;

public interface ArticleMapper {
    ArticleMapper ARTICLE_MAPPER = Mappers.getMapper(ArticleMapper.class);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "isActive", target = "isActive")
    ArticleDTO mapToDTO(Article article);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "isActive", target = "isActive")
    Article mapToModel(ArticleDTO articleDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "image", target = "image")
    Article mapToModel(UpdateArticleDTO updateArticleDTO);

    @Mapping(source = "title", target = "title")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "image", target = "image")
    Article mapToModel(CreateArticleDTO createArticleDTO);
}
