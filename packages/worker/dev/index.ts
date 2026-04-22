import { R2Explorer } from "../src";

const baseConfig = {
  readonly: false,
  cors: true,
  showHiddenFiles: true,
};

export default {
  async fetch(request, env, context) {
    return R2Explorer({
      ...baseConfig,
      basicAuth: {
        username: env.BASIC_USERNAME,
        password: env.BASIC_PASSWORD,
      },
    }).fetch(request, env, context);
  },
};
