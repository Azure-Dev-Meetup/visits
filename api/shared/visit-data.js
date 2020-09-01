
const visitData = {
  visits: [
    {
      id: 1,
      date: '12-12-2020',
      arrivalTime: '13:13',
      leavingTime: '14:14',
      tableNumber: '12',
      name: 'Dominik',
      phone: '0123-123456789',
      street: 'street 56',
      plz: '88046',
      city: 'Friedrichshafen',
      email: "xy@z.de"
    },
    {
      id: 2,
      date: '13-12-2020',
      arrivalTime: '14:13',
      leavingTime: '15:14',
      tableNumber: '12',
      name: 'Max Mustermann',
      phone: '0123-123456789',
      street: 'street 12',
      plz: '88046',
      city: 'Friedrichshafen',
      email: "xy@z.de"
    },
    {
      id: 3,
      date: '13-12-2020',
      arrivalTime: '14:13',
      leavingTime: '15:14',
      tableNumber: '12',
      name: 'Mustermann',
      phone: '0123-123456789',
      street: 'street 76',
      plz: '88046',
      city: 'Friedrichshafen',
      email: "xy@z.de"
    },
    {
      id: 4,
      date: '13-12-2020',
      arrivalTime: '14:13',
      leavingTime: '15:14',
      tableNumber: '12',
      name: 'Max',
      phone: '0123-123456789',
      street: 'street 3 ',
      plz: '88046',
      city: 'Friedrichshafen',
      email: "xy@z.de"
    }
  ]
};

// *NEW

const getUuid = () => {

    var uuid = require('uuid');
    
    return uuid.v4();
};

const getVisits = () => {
  return visitData.visits;
};

const deleteVisit = (id) => {
  const value = parseInt(id, 10);
  visitData.visits = visitData.visits.filter((element) => element.id !== value);
  return true;
};

const addVisit = (visit) => {
  visit.id = getUuid();
  visitData.visits.push(visit);
  return visit;
};

const updateVisit = (visit) => {
  const index = visitData.vsits.findIndex((element) => element.id === visit.id);
  console.log(visit);
  visitData.visits.splice(index, 1, visit);
  return visit;
};

module.exports = {
  getVisits, deleteVisit, addVisit, updateVisit
};
