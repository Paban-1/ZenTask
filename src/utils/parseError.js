import { ApiError } from "./ApiError.js";

export const parseError = (error) => {
  if (error.response) {
    const statusCode = error.response.status;
    const message = error.response.data?.message || "An error occurred";
    const errorDetails = error.response.data?.error || [];
    return new ApiError(statusCode, message, errorDetails);
  }
  return new ApiError(500, error.message || "unknown error");
};
