import { Client, Account, Databases, Storages } from "appwrite";
import { conf } from "../config/conf.js";

const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storages(client);

export { client, account, databases, storage };