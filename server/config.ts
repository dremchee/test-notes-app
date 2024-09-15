export const config = {
  PORT: Number(process.env.PORT) || 3000,
  SECRET_KEY: process.env.SECRET_KEY || '',
  DATABASE_DIR: process.env.DATABASE_DIR || '',
  UPLOADS_DIR: process.env.UPLOADS_DIR || '',
  CACHE_DIR: process.env.CACHE_DIR || '',
  DEFAULT_EXPIRE_JWT: 60 * 60 * 1000
}
