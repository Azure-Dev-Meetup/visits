const data = require('../shared/visit-data').default;

module.exports = async function (context, req) {
  const visit = {
    id: parseString(req.params.id, 10),
    numberOfVisitors: req.body.numberOfVisitors,
    date: req.body.date,
    arrivalTime: req.body.name,
    leavingTime:  req.body.leavingTime,
    tableNumber: req.body.tableNumber,
    name: req.body.name,
    phone:  req.body.phone,
    street:  req.body.street,
    number: req.body.number,
    plz: req.body.plz,
    city:  req.body.city,
    email: req.body.email,
  };

  try {
    const updatedVisit = data.updateVisit(visit);
    context.res.status(200).json(updatedVisit);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
