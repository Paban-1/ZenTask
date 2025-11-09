import { account, ID } from "../services/appwriteClient.js";

export const registerUser = async (email, password, name = "") => {
  const user = await account.create(ID.unique(), email, password, name);
  await account.createEmailPasswordSession(email, password);
  return user;
};

export const loginUser = async (email, password) => {
  try {
    await account.deleteSessions();
  } catch {}
  return await account.createEmailPasswordSession(email, password);
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch {
    return null;
  }
};

export const logoutUser = async () => {
  await account.deleteSessions();
};
