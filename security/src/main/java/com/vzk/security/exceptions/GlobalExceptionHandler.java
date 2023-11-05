package com.vzk.security.exceptions;

import feign.FeignException;
import org.openapitools.model.ErrorDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AuthorizationServiceException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {FeignException.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorDto> handleConflict(FeignException ex) {
        return ResponseEntity
                .status(ex.status())
                .body(ErrorDto.builder()
                        .code(""+ ex.status())
                        .message(ex.getMessage())
                        .build());
    }

    @ExceptionHandler(value = {EntityNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorDto> handleConflict(EntityNotFoundException ex) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(ErrorDto.builder()
                        .code(HttpStatus.NOT_FOUND.toString())
                        .message(ex.getMessage())
                        .build());
    }

    @ExceptionHandler(value = {AuthorizationServiceException.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<ErrorDto> handleConflict(AuthorizationServiceException ex) {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(ErrorDto.builder()
                        .code(HttpStatus.UNAUTHORIZED.toString())
                        .message(ex.getMessage())
                        .build());
    }

    @ExceptionHandler(value = {UsernameNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorDto> handleConflict(UsernameNotFoundException ex) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(ErrorDto.builder()
                        .code(HttpStatus.NOT_FOUND.toString())
                        .message(ex.getMessage())
                        .build());
    }
}
