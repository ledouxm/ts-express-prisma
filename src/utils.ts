import debug from "debug";

export const makeDebug = (suffix: string) => debug(process.env.APP_NAME || "APP_NAME").extend(suffix);
