const httpStatusCodes = {
  OK: 200, // Successful request.
  RESOURCE_CREATED: 201, // Successful request and resource created.
  BAD_REQUSEST: 400, //  Invalid argument (invalid request payload).
  FORBIDDEN: 403, // Permission denied (e.g. invalid API key, no token).
  RESOURCE_EXHAUSTED: 429, //  Either out of resource quota or reaching rate limiting.
  INTERNAL_SERVER_ERROR: 500, // Internal server error (retry your request).
  SERVICE_UNAVAILABLE: 503, // Unavailable.
  GATEWAY_TIMEOUT: 504, // Deadline exceeded (retry your request).
  NOT_FOUND: 404,
  No_CONTENT: 204,
}

export default httpStatusCodes;