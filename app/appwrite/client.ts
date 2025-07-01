import data from "env.json"
import {Account, Client, Databases, Storage} from "appwrite";

export const appwriteConfig = {
    endpointUrl: data.VITE_APPWRITE_API_ENDPOINT,
    projectId: data.VITE_APPWRITE_PROJECT_ID,
    apiKey: data.VITE_APPWRITE_API_KEY,
    databaseId: data.VITE_APPWRITE_DATABASE_ID,
    userCollectionId: data.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripCollectionId: data.VITE_APPWRITE_TRIPS_COLLECTION_ID,
}

const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)

const account = new Account(client)
const database = new Databases(client)
const storage = new Storage(client)

export {account, database, storage};