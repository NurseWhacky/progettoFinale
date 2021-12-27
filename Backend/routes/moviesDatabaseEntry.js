const DataMoviesDatabaseEntry = require('../models').DataMoviesDatabaseEntry;

/* ----------- USERS API ------------ */

const getMovieDatabaseEntry = (req, res) => {
    DataMoviesDatabaseEntry.findAll({})
    .then(entry => {
      return res.status(200).send(entry)
    })
    .catch(err => {
      return res.status(500).send(err)
    });
};

const getMovieDatabaseEntryById = (req, res) => {
  const entryId = req.params.id;

  DataMoviesDatabaseEntry.findOne({
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

const createMovieDatabaseEntry = (req, res) => {
  const {adult, backdrop_path, idmovie, media_type, original_language, overview, popularity, release_date, title, video, image_path} = req.body;


  DataMoviesDatabaseEntry.create({  
    adult: adult,
    backdrop_path: backdrop_path,
    idmovie: idmovie,
    media_type: media_type,
    original_language: original_language,
    overview: overview,
    popularity: popularity,
    release_date: release_date,
    title: title,
    video: video,
    image_path: image_path
  })
    .then(entry => {
      return res.status(201).send(entry);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
};

const editMovieDatabaseEntry = (req, res) => {
  const entryId = req.params.id;
  const {adult, backdrop_path, idmovie, media_type, original_language, overview, popularity, release_date, title, video, image_path} = req.body;

  DataMoviesDatabaseEntry.findOne({
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

      DataMoviesDatabaseEntry.update({
        adult: adult,
        backdrop_path: backdrop_path,
        idmovie: idmovie,
        media_type: media_type,
        original_language: original_language,
        overview: overview,
        popularity: popularity,
        release_date: release_date,
        title: title,
        video: video,
        image_path: image_path
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

const deleteMovieDatabaseEntry = (req, res) => {
  const entryId = req.params.id;

  DataMoviesDatabaseEntry.destroy({
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
  getMovieDatabaseEntry,
  getMovieDatabaseEntryById,
  createMovieDatabaseEntry,
  editMovieDatabaseEntry,
  deleteMovieDatabaseEntry
};