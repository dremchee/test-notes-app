import { createError, sendError } from "#imports";
import { H3Event, H3Error } from "h3";

export function returnResponse<T, K extends object>(
  event: H3Event,
  data: T,
  other?: K
): ReturnResponse<T, K> {
  return {
    data,
    ...(other as K),
  };
}

export function returnResponseError<T, E extends Partial<H3Error<T>>>(
  event: H3Event,
  error?: E
) {
  return error && sendError(event, createError(error), true);
}

export type ReturnResponse<T, K = {}> =
  | {
      data: T;
    } & {
      [key in keyof K]: K[key];
    };
