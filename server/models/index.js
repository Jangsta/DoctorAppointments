var db = require('../db/index.js');

module.exports = {
  getAllDoctors: function(callback) {
    var querystr = 'SELECT * from doctors'
    db.query(querystr, function (error, results) {
      if (error) throw error;
      callback(error, results);
    });
  },
  getAllAppointments: function(params, callback) {
    var querystr = 'SELECT * from appointments WHERE id=? AND date=?';
    db.query(querystr, params, function (error, results) {
      if (error) throw error;
      callback(error, results);
    });
  },
  deleteAppointment: function(params, callback) {
    console.log(params);
    var querystr = 'DELETE from appointments WHERE id=? AND date=?';
    db.query(querystr, params, function (error) {
      if (error) throw error;
      callback(error);
    });
  },
  addAppointment: function(params, callback) {
    var querystr = "INSERT INTO appointments(firstname, lastname, date, kind) VALUES(?, ?, ?, ?)";
    db.query(querystr, params, function (error, results) {
      if (error) console.log(error);
      callback(error, results);
    });
  },
};