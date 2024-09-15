import jwt, { JSONMap } from 'njwt'
import { config } from '~/server/config'

export type TokenPayload = {
  id: string
}

export type TokenData = {
  jti: string
  iat: number
  exp: number
} & TokenPayload

export function createToken(
  data: TokenPayload,
  expire = config.DEFAULT_EXPIRE_JWT
) {
  const token = jwt.create(data, config.SECRET_KEY)
  token.setExpiration(new Date().getTime() + expire)

  return token.compact()
}

export function verifyToken<T>(token: string) {
  try {
    return jwt.verify(token, config.SECRET_KEY)
  } catch (error) {
    return null
  }
}
