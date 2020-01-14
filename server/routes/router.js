const express = require('express');
const router = express.Router();
const controller  = require('../controllers');

router.use(express.json());
// description: get request for all doctors
router.get('/doctors', controller.getDoctors);

// description: get request for appointments for a given doctor id and day
// parameters: json with doctor_id (int) and day (string)
router.get('/appointments/:id/:date', controller.getAppointments);

// description: delete request for appointments for a given doctor id and day and time
// parameters: params with doctor id (int) and daytime (string)
router.delete('/appointments/:id/:date', controller.deleteAppointment);

// description: create request for adding appointment to database
// parameters: json with patient firstname, patient lastname, appointment date, kind of appointment, doctor id
// date format must be: 'YYYY-MM-DD HH:MI:SS'
// example: localhost:3000/appointments/1/1999-01-01%2010:30:00
router.post('/appointments', controller.addAppointment);

module.exports = router;