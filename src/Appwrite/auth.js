// Description: This file contains the AuthService class that handles user authentication using Appwrite.

// Import necessary modules and configurations
import conf from "../Config/conf";
import { Account, Client, ID } from "appwrite";

// AuthService class to handle user authentication
export class AuthService {
  Client = new Client();
  account;

  // Initialize the Appwrite client
  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID
    this.account = new Account(this.Client);
  }

  // Create a new user account
  async createAccount({ email, password, name }) {
    try {
      // Create a new user account
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      if (userAccount) {
        // If user account is created successfully, you can log them.
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // Log in an existing user
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({ email, password });
    } catch (error) {
      throw error;
    }
  }

  // Get the currently logged-in user
  async getCurrentUser() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Appwrite Server :: GetCurrentUser :: Error ", error);
    }
    return null
  }

  // Log out the current user
  async LogOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      logger.error("Appwrite Server :: Logout :: Error ", error);
    }
  }
}


// Export a singleton instance of AuthService
const authService = new AuthService();
export default authService;
