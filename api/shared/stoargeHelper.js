const { BlobServiceClient, ContainerClient } = require('@azure/storage-blob');
const uuid = require('uuid');
const { resolve } = require('dns');
const blobSasUrl = "https://visitsstrore.blob.core.windows.net/visitsdata?sp=racwdl&st=2020-09-01T22:23:40Z&se=2020-09-05T22:23:00Z&sv=2019-12-12&sr=c&sig=FFjJV%2BYRuxFolq%2B7H2VJNmF3I9%2FQiKRjEig3zgan9NM%3D";
const containerClient = new ContainerClient(blobSasUrl)
const listOfBlobs = { blobList: [] };
const listOfVisits = {visitList:[]};

module.exports.AddVisitToBlob = async function (visit) {

    visit.id = uuid.v4();
    const blobName = visit.id + '.txt';
    const visitData = JSON.stringify(visit);
    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    console.log('\nUploading to Azure storage as blob:\n\t', blobName);

    // Upload data to the blob
    const uploadBlobResponse = await blockBlobClient.upload(visitData, visitData.toString().length);
    console.log("Blob was uploaded successfully. requestId: ", uploadBlobResponse.requestId);
    console.log('\nListing blobs...');
    return visit;
}
module.exports.GetVisitsFromBlob = async function () {

    for await (const blob of containerClient.listBlobsFlat()) {
        console.log('\t', blob.name);
        listOfBlobs.blobList.push(blob.name);
    }
    return listOfBlobs.blobList;
}
module.exports.GetListOfVisitsFromBlob = async function () {
    for await (const blob of containerClient.listBlobsFlat()) {
        console.log('\t', blob.name);
        const blockBlobClient = containerClient.getBlobClient(blob.name);
        const blobServiceClient = new BlobServiceClient(blobSasUrl);
        blobServiceClient.get
        const downloadBlockBlobResponse = await blockBlobClient.download(0);
        const visit = await streamToString(downloadBlockBlobResponse.readableStreamBody);
        listOfVisits.visitList.push(visit);
    }
    return listOfVisits.visitList;
}
async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data.toString());
    });
    readableStream.on("end", () => {
      resolve(chunks.join(""));
    });
    readableStream.on("error", reject);
  });
}
