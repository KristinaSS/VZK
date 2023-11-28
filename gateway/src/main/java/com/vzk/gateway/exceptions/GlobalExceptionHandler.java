package com.vzk.gateway.exceptions;

import com.vzk.gateway.model.ErrorDto;
import feign.FeignException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.reactive.result.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {FeignException.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorDto> handleConflict(FeignException ex) {
        return ResponseEntity
                .status(ex.status())
                .body(ErrorDto.builder()
                        .code("" + ex.status())
                        .message(ex.getMessage())
                        .build());
    }
}
