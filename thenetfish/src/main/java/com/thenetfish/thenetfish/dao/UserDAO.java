package com.thenetfish.thenetfish.dao;

import com.thenetfish.thenetfish.model.User;

import java.util.List;

public interface UserDAO {
    public int addUser(User user);

    public User getUserById(int id);

    public User getUserByEmail(String email);

    public List<User> getAllUsers();

    public int updateUser(int id, User user);

    public int deleteUser(int id);
}
