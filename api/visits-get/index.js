const data = require('../shared/visit-data');

module.exports = async function (context, req) {
    try {
        const visits = data.getVisits();
        context.res.status(200).json(visits);
        
    } catch (error) {
        context.res.status(500).send(error);
    }
};