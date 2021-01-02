package com.krawczyk.wiese.project.service;

import java.util.List;

public interface CrudService<T, ID> {

    List<T> findAll();

    T save(T object);

    void delete(ID id);
}
