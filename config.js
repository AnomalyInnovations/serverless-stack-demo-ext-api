const adminPhoneNumber = "+14151234567";

const stageConfigs = {
  dev: {
    resourcesStage: "dev",
    stripeKeyName: "/stripeSecretKey/test"
  },
  prod: {
    resourcesStage: "prod",
    stripeKeyName: "/stripeSecretKey/live"
  }
};

const config = stageConfigs[process.env.stage] || stageConfigs.dev;

export default {
  adminPhoneNumber,
  ...config
};
