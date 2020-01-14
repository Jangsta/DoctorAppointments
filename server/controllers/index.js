var model = require('../models');

module.exports = {
  getDoctors: function(req, res, next) {
    model.getAllDoctors((err, data)=>{
      if(err) throw err;
      else res.send(data);
      console.log('here');
      next();
    });
  },
  getAppointments: function(req, res, next) {
    params = [req.params.id, req.params.date];
    model.getAllAppointments(params, (err, data) => {
      if (err) throw err;
      else res.send(data);
      next();
    })
  },
  deleteAppointment: function(req, res, next) {
    params = [req.params.id, req.params.date];
    model.deleteAppointment(params, (error) => {
      if (error) throw error;
      else res.sendStatus(200);
      next();
    })
  },

  addAppointment: function(req, res, next) {
    // filter out dates that don't start at 15 minute intervales
    // TODO: Potential refactor to use javascript Date object or Moment.js object
    params = [req.body.firstname, req.body.lastname, req.body.date, req.body.kind];
    
    if(!['00', '15', '30', '45'].includes(req.body.date.split(' ')[1].split(':')[1])) {
      res.sendStatus(500);
      next();
    } else {

      // no more than 3 appointments can be added with the same time for a given doctor
      if (model.getAllAppointments([req.body.id, req.body.date], (error, results)=>{
        if (error) throw error;
        if (results.length > 3) res.sendStatus(500);
        else {
          model.addAppointment(params, (err, data) => {
            if (err) throw err;
            else res.sendStatus(200);
            next();
          });
        }
      }));
    }


  }
};