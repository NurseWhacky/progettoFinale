package com.thenetfish.thenetfish.repository;

import com.thenetfish.thenetfish.model.User;

import java.util.*;

public class InMemoryDatabase {
    static Map<Integer, User> userList = new HashMap<>();
    static int lastIndex = 0;

    public static int addUser(User user) {
        user.setId(++lastIndex);
        userList.put(user.getId(), user);
        return 1;
    }

    public static List<User> getAllUsers() {
       Collection<User> userValues = userList.values();
       return new ArrayList<>(userValues);
    }

    public static User getUserById(int id) {
        return userList.get(id);
    }

    public static User getUserByEmail(String email) {
        return userList.get(email);
    }

    public static int updateUser(int id, User user) {
        user.setId(id);
        userList.put(id, user);
        return 1;
    }

    public static int deleteUser(int id) {
        userList.remove(id);
        return 1;
    }


}
