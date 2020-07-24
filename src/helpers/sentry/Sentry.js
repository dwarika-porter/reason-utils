import { init } from "@sentry/browser/dist/sdk.js";
import { captureException } from "@sentry/minimal";

export function init(dsn) {
  init({
    dsn: dsn
  });
}

/* TODO: Create proper bindings */
export function captureException(str) {
  captureException(new Error(str));
}
