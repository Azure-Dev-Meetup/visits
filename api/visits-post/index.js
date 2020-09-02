const addVisitToStorage = require('../shared/storageHelper');


module.exports = async function (context, req) {
    const visit = {
        id: undefined,
        numberOfVisitors: req.body.numberOfVisitors,
        name: req.body.name,
        date: req.body.date,
        arrivalTime: req.body.arrivalTime,
        leavingTime: req.body.leavingTime,
        tableNumber: req.body.tableNumber,
        phone: req.body.phone,
        street: req.body.street,
        plz: req.body.plz,
        city: req.body.city,
        email: req.body.email,
    };

    try {
        
        const res = await addVisitToStorage.AddVisitToBlob(visit);

        context.res.status(201).json(res);
    } catch (error) {
        context.res.status(500).send(error);
    }
};
