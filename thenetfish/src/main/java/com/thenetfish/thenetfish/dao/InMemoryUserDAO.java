package com.thenetfish.thenetfish.dao;

import com.thenetfish.thenetfish.model.User;
import com.thenetfish.thenetfish.repository.InMemoryDatabase;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("firstUserDAO")
public class InMemoryUserDAO implements UserDAO {

    @Override
    public int addUser(User user) {
        return InMemoryDatabase.addUser(user);

    }

    @Override
    public User getUserById(int id) {
        return null;
    }

    @Override
    public User getUserByEmail(String email) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public int updateUser(int id, User user) {
        return 0;
    }

    @Override
    public int deleteUser(int id) {
        return 0;
    }
}
