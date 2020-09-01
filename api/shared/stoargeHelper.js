const { BlobServiceClient, ContainerClient } = require('@azure/storage-blob');
const uuid = require('uuid');
const blobSasUrl = "https://visitsstrore.blob.core.windows.net/visitsdata?sp=racwdl&st=2020-09-01T22:23:40Z&se=2020-09-05T22:23:00Z&sv=2019-12-12&sr=c&sig=FFjJV%2BYRuxFolq%2B7H2VJNmF3I9%2FQiKRjEig3zgan9NM%3D";

const _visit = {
    id: undefined,
    numberOfVisitors: "",
    name: "",
    date: "",
    arrivalTime: "",
    leavingTime: "",
    tableNumber: "",
    phone: "",
    street: "",
    plz: "",
    city: "",
    email: "",
};

module.exports = async function (visit) {

    const containerClient = new ContainerClient(blobSasUrl);


    //Set the visit ID to UUID
    visit.id = uuid.v4();
    // Create a unique name for the blob
    const blobName = visit.id + '.txt';
    console.log('Visit ID: ',visit.id);
    const visitData = JSON.stringify(visit);
    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    console.log('\nUploading to Azure storage as blob:\n\t', blobName);

    // Upload data to the blob
    //const data = 'Hello, World!';
    const uploadBlobResponse = await blockBlobClient.upload(visitData, visitData.toString().length);
    console.log("Blob was uploaded successfully. requestId: ", uploadBlobResponse.requestId);
    console.log('\nListing blobs...');

    // List the blob(s) in the container.
    //for await (const blob of containerClient.listBlobsFlat()) {
    //    console.log('\t', blob.name);
    //}
    return visit;
}
