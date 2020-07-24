import { init as sentryInit } from "@sentry/browser/dist/sdk";
import { captureException as sentryCaptureException } from "@sentry/minimal";

export function init(dsn) {
  sentryInit({
    dsn: dsn
  });
}

/* TODO: Create proper bindings */
export function captureException(str) {
  sentryCaptureException(new Error(str));
}
