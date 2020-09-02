let getBlobData = require('../shared/storageHelper');


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const res = await getBlobData.GetListOfVisitsFromBlob();
    context.res.status(200).json(JSON.stringify(res));
}