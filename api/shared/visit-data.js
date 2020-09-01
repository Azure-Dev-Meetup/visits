const visitData = {
    visits: [
        {
            id: 1,
            numberOfVisitors: 5,
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
            numberOfVisitors: 5,
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
            numberOfVisitors: 5,
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
            numberOfVisitors: 5,
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

/* create unique ID */
const getUuid = () => {

    var uuid = require('uuid');

    return uuid.v4();
};

/* get visit */
const getVisits = () => {
    return visitData.visits;
};

/* delete visit */
const deleteVisit = (id) => {
    const value = parseString(id, 10);
    visitData.visits = visitData.visits.filter((element) => element.id !== value);
    return true;
};

/* add new Visit */
const addVisit = (visit) => {

    try {
        visit.id = getUuid();
        visitData.visits.push(visit);
        return visit;
    } catch (e) {
        return e.toString();
    }
};


/* needed to change existing visits */
const updateVisit = (visit) => {
    const index = visitData.vsits.findIndex((element) => element.id === visit.id);
    console.log(visit);
    visitData.visits.splice(index, 1, visit);
    return visit;
};


module.exports = {
    getVisits, deleteVisit, addVisit, updateVisit
};
