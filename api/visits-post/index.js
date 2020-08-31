const data = require('../shared/visit-data');

module.exports = async function (context, req) {
  const visit = {
    id: undefined,
    name: req.body.name,
    date: req.body.date,
    arrivalTime: req.body.arrivalTime,
    leavingTime:  req.body.leavingTime,
    tableNumber: req.body.tableNumber,
    phone:  req.body.phone,
    street:  req.body.street,
    plz: req.body.plz,
    city:  req.body.city,
    email: req.body.email,
  };

  try {
    const newVisit = data.addVisit(visit);
    context.res.status(201).json(newVisit);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
