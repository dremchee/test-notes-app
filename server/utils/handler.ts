import {
  defineEventHandler,
  returnResponse,
  returnResponseError
} from '#imports'
import type { EventHandler, EventHandlerRequest, H3Error } from 'h3'

export const defineEventWrappedHandler = <T extends EventHandlerRequest, D>(
  handler: EventHandler<T, D>
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    try {
      const response = await handler(event)
      return returnResponse(event, response)
    } catch (error) {
      return returnResponseError(event, error as H3Error<T>)
    }
  })
