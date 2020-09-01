const { BlobServiceClient } = require('@azure/storage-blob');
const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=visitsstrore;AccountKey=1PTRqfgL7OMkwAi8ZMMwBpH6Bvdc+kFUR63kl7S2iAq5yaSp0tE9q8dUEh7qZKHQWTgcjR4i5JY3kypaQmq/ow==;EndpointSuffix=core.windows.net";

async function addVisitToStorage(visit) {

    try {
        visit.id = getUuid();
        const bRes = "";
        console.log('Azure Blob storage v12 - JavaScript quickstart sample');
        //Create Container
        const blobServiceClient = BlobServiceClient.fromConnectionString("DefaultEndpointsProtocol=https;AccountName=visitsstrore;AccountKey=1PTRqfgL7OMkwAi8ZMMwBpH6Bvdc+kFUR63kl7S2iAq5yaSp0tE9q8dUEh7qZKHQWTgcjR4i5JY3kypaQmq/ow==;EndpointSuffix=core.windows.net");
        bRes = "After BClient";

        // Create a unique name for the container
        const containerName = "visitsdata";

        // Get a reference to a container
        const containerClient = blobServiceClient.getContainerClient(containerName);
        bRes = "After ContainerName";
        const containerExist = await containerClient.exists();
        bRes = "After Exist";
        if (containerExist) {
            // Create the container
            //const createContainerResponse = await containerClient.create();

            //Upload Data
            // Create a unique name for the blob
            const blobName = visit.id + '.txt';
            // Get a block blob client
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);
            bRes = "After BClient Blob";
            // Upload data to the blob
            const uploadBlobResponse = await blockBlobClient.upload(visit.toString(), visit.toString().length);

            return bRes;
        } else {
            return "Bad Ass"
        }



    } catch (e) {

        return e;
    }


};

module.exports = {
    addVisitToStorage
};
