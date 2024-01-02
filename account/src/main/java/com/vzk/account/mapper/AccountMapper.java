package com.vzk.account.mapper;

import com.vzk.account.models.Account;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface AccountMapper {
    AccountMapper ACCOUNT_MAPPER = Mappers.getMapper(AccountMapper.class);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "username", target = "username")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "active", target = "isActive")
    AccountDTO mapToDTO(Account account);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "username", target = "username")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "isActive", target = "isActive")
    Account mapToModel(AccountDTO accountDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "emailNew", target = "email")
    @Mapping(source = "username", target = "username")
    Account mapToModel(UpdateAccountAdminDTO accountDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "username", target = "username")
    @Mapping(source = "password", target = "password")
    Account mapToModel(UpdateAccountUserDTO accountDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "username", target = "username")
    @Mapping(source = "password", target = "password")
    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    Account mapToModel(CreateAccountDTO accountDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "username", target = "username")
    ShortAccountDTO mapToShortDTO(Account account);
}
