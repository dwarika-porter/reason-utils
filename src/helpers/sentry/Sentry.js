import { init as sentryInit, captureException as sentryCaptureException } from "@sentry/browser";

export function init(dsn) {
  sentryInit({
    dsn: dsn
  });
}

/* TODO: Create proper bindings */
export function captureException(str) {
  sentryCaptureException(new Error(str));
}
