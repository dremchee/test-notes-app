import { defineEventWrappedHandler } from '~/server/utils/handler'
import { userRepository } from './repository'
import {
  createHash,
  readBody,
  readValidatedBody,
  returnResponseError
} from '#imports'
import { userSchema } from './schema'

export const createUserHandler = defineEventWrappedHandler(async (event) => {
  const { error, data } = await readValidatedBody(event, (e) =>
    userSchema.safeParse(e)
  )
  if (error) {
    return error
  }

  const payload = {
    ...data,
    password: await createHash(data.password)
  }

  return await userRepository.create(payload)
})
export const findUserHandler = defineEventWrappedHandler(async (event) => {
  const users = await userRepository.findAll()
  return users
})
