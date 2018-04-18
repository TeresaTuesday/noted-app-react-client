
export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "note-taking-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://6gkyt4v0s9.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_rSArP9lab",
    APP_CLIENT_ID: "12gibfpq0a9mu3rig2psucmbkl",
    IDENTITY_POOL_ID: "us-west-2:2439789d-a753-41f1-a0c7-8e6b4826fb23"
  }
}