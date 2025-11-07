import { account } from "./appwriteClient.js";
import { ID } from "appwrite";
// import { ApiError } from "../utils/ApiError.js";
// import { parseError } from "../utils/parseError.js";


// Regiset User Method
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

// User Login Method
export const loginUser = async ({email, password}) => {
  try {
// Check if a session already exists
const existingSession = await account.getSession("current")
if(existingSession){
  return existingSession
}

    return await account.createEmailPasswordSession({
      email,
      password,
    });
  } catch (error) {
    if (error.code === 404) {
      return await account.createEmailPasswordSession(email, password);
    }
    throw error;
  }
};

// User LogOut method
export const logOutUser = async () => {
  try {
    await account.deleteSessions();
  } catch (error) {
    console.log("Appwrite service :: logOut :: Error:", error);
  }
};

// Get User Detiles method
export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    console.log("Appwrite service :: getCurrentUser :: Error :", error);
  }
};
