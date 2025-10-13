import { account } from "./appwriteClient.js";
import { ID } from "appwrite";
// import { ApiError } from "../utils/ApiError.js";
// import { parseError } from "../utils/parseError.js";

export const registerUser = async ({email, password, name = ""}) => {
  try {
    const registeredUser = await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
    if (registeredUser) {
      // Call login method
      return loginUser({ email, password });
    } else {
      return registeredUser;
    }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({email, password}) => {
  try {
    return await account.createEmailPasswordSession({
      email,
      password,
    });
  } catch (error) {
    throw error;
  }
};

export const logOutUser = async () => {
  try {
    await account.deleteSessions();
  } catch (error) {
    console.log("Appwrite service :: logOut :: Error:", error);
  }
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    console.log("Appwrite service :: getCurrentUser :: Error :", error);
  }
};
