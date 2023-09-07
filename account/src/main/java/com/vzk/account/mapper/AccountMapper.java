package com.vzk.account.mapper;

import com.vzk.account.models.Account;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.UpdateAccountDTO;
import org.openapitools.model.CreateAccountDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface AccountMapper {
    AccountMapper ACCOUNT_MAPPER = Mappers.getMapper(AccountMapper.class);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "active", target = "isActive")
    AccountDTO mapToDTO(Account account);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "isActive", target = "isActive")
    Account mapToModel(AccountDTO accountDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    Account mapToModel(UpdateAccountDTO accountDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    Account mapToModel(CreateAccountDTO accountDTO);
}
