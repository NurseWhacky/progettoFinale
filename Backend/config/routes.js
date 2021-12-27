const DataEngine = require('../engine/entry');
const UserEngine = require('../routes/userEntry');
const MovieDatabaseEngine = require('../routes/moviesDatabaseEntry');

const ErrorsEngine  = require('../engine/errors');

module.exports = (app) => {

  const dataPath = '/data';
  const dataUserPath = '/user';
  const movieDatabasePath = '/movieDatabase';


  /********** DATA REST APIs **********/
  app.get(dataPath, DataEngine.getEntry);
  app.post(dataPath, DataEngine.createEntry);
  app.get(`${dataPath}/:id`, DataEngine.getEntryById);
  app.put(`${dataPath}/:id`, DataEngine.editEntry);
  app.delete(`${dataPath}/:id`, DataEngine.deleteEntry);

    /********** USER REST APIs **********/
    app.get(dataUserPath, UserEngine.getUserEntry);
    app.post(dataUserPath, UserEngine.createUserEntry);
    app.get(`${dataUserPath}/:id`, UserEngine.getUserEntryById);
    app.put(`${dataUserPath}/:id`, UserEngine.editUserEntry);
    app.delete(`${dataUserPath}/:id`, UserEngine.deleteUserEntry);

    /********** MOVIE DATABASE REST APIs **********/
    app.get(movieDatabasePath, MovieDatabaseEngine.getMovieDatabaseEntry);
    app.post(movieDatabasePath, MovieDatabaseEngine.createMovieDatabaseEntry);
    app.get(`${movieDatabasePath}/:id`, MovieDatabaseEngine.getMovieDatabaseEntryById);
    app.put(`${movieDatabasePath}/:id`, MovieDatabaseEngine.editMovieDatabaseEntry);
    app.delete(`${movieDatabasePath}/:id`, MovieDatabaseEngine.deleteMovieDatabaseEntry);

  /********** ERROR HANDLER **********/
  app.use(ErrorsEngine.page404);
  app.use(ErrorsEngine.pageError);

};