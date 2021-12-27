package com.thenetfish.thenetfish.service;

import com.thenetfish.thenetfish.dao.DbUserDAO;
import com.thenetfish.thenetfish.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    DbUserDAO userDAO;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") DbUserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public String addUser(User user) {
        User result = userDAO.save(user);
        if (result != null) {
            return "Utente inserito correttamente!";
        }
        return "Errore nell'inserimento dell'utente";
    }

    public Optional<User> getUserById(int id) {
        return userDAO.findById(id);
    }

    public Iterable<User> getAllUsers() {
        return userDAO.findAll();
    }

    public String updateUser(int id, User user) {
        user.setId(id);
        User result = userDAO.save(user);
        if (result != null) {
            return "Utente aggiornato correttamente!";
        } else {
            return "Errore nell'aggiornamento dell'utente";
        }
    }

    public String deleteUser(int id) {
        Optional<User> userToDelete = userDAO.findById(id);
        if (!userToDelete.isPresent()) {
            return "Utente non trovato.";
        } else {
            userDAO.delete(userToDelete.get());
            return "Utente cancellato correttamente.";
        }
    }
}
