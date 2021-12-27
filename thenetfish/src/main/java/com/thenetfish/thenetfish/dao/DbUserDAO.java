package com.thenetfish.thenetfish.dao;

import com.thenetfish.thenetfish.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("dbUserDAO")
public interface DbUserDAO extends CrudRepository<User, Integer> {

}
