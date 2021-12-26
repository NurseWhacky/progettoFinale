const DataUserEntry = require('../models').DataUserEntry;

/* ----------- USERS API ------------ */

const getUserEntry = (req, res) => {
  DataUserEntry.findAll({})
    .then(entry => {
      return res.status(200).send(entry)
    })
    .catch(err => {
      return res.status(500).send(err)
    });
};

const getUserEntryById = (req, res) => {
  const entryId = req.params.id;

  DataUserEntry.findOne({
    where: {
      id: entryId
    }
  })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          error: true,
          message: 'The requested data does not exist.',
          entryId
        })
      }

      return res.status(200).send(entry);
    })
    .catch(err => {
      return res.status(500).send(err);
    })
};

const createUserEntry = (req, res) => {
  const {userId, username, password, userislogged} = req.body;

  DataUserEntry.create({  
    userId: userId,
    username: username,
    password: password,
    userislogged: userislogged
  })
    .then(entry => {
      return res.status(201).send(entry);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
};

const editUserEntry = (req, res) => {
  const entryId = req.params.id;
  const {userId, username, password, userislogged} = req.body;

  DataUserEntry.findOne({
    where: {
      id: entryId
    }
  })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          error: true,
          message: 'Cannot update a entry that does not exist.',
          entryId
        })
      }

      DataUserEntry.update({
        userId: userId,
        username: username,
        password: password,
        userislogged: userislogged
      }, {
        where: {
          id: entryId
        }
      })
        .then(updated => {
          if(updated.pop() === 1) {
            return res.status(201).send({
              updated: true,
              entryId
            });
          } else {
            return res.status(400).send({
              updated: false,
              entryId
            })
          }
        })
        .catch(error => {
            return res.status(500).send(error);
          }
        );
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

const deleteUserEntry = (req, res) => {
  const entryId = req.params.id;

  DataUserEntry.destroy({
    where: {
      id: entryId
    }
  })
    .then( otherName => {
      console.log("res: ", otherName)
      return res.status(204).send({otherName});
    })
    .catch(error => {
      console.log("errore: ", error)
      return res.status(500).send(error);
    })
};

module.exports = {
  getUserEntry,
  getUserEntryById,
  createUserEntry,
  editUserEntry,
  deleteUserEntry
};