export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "your-strip-public-key",
    s3: {
      REGION: "eu-west-1",
      BUCKET: "your-bucket-name-generated-by-serverless-api"
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "your-api-gateway-url-generated-by-serverless-api"
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "your-user-pool-id-generated-by-serverless-api",
      APP_CLIENT_ID: "your-app-client-id-generated-by-serverless-api",
      IDENTITY_POOL_ID: "your-identity-pool-id-generated-by-serverless-api"
    }
  };