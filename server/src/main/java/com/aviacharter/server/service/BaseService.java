package com.aviacharter.server.service;

import org.springframework.data.domain.Page;

import java.util.List;

public interface BaseService<T> {
    List<T> findAll();

    Page<T> findAllPageable(int size, int pageNumber);

    T findById(Long id);

    T update(T obj, Long id);

    T create(T obj);

    void deleteById(Long id);
}
