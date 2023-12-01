package com.vzk.news.mappers;

import com.vzk.news.models.Article;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.ArticleDTO;
import org.openapitools.model.CreateArticleDTO;
import org.openapitools.model.UpdateArticleDTO;

@Mapper
public interface ArticleMapper {
    ArticleMapper ARTICLE_MAPPER = Mappers.getMapper(ArticleMapper.class);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "active", target = "isActive")
    ArticleDTO mapToDTO(Article article);

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
    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    Article mapToModel(CreateArticleDTO createArticleDTO);
}
