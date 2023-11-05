package com.vzk.security.models;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account implements UserDetails {
    private AccountDTO accountDTO;
    @Enumerated(EnumType.STRING)
    private List<RoleDTO> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());

    }

    @Override
    public String getPassword() {
        return accountDTO.getPassword();
    }

    @Override
    public String getUsername() {
        return accountDTO.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
