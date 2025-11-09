import { Client, Account, ID } from "appwrite";
import { conf } from "../config/conf.js";

const client = new Client();

client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

export const account = new Account(client);
export { ID };
