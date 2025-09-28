const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwritedbId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwritecollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwritebucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
export default conf;