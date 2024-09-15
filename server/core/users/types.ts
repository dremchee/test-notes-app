import type { Document } from '@seald-io/nedb'
import { Timestamp } from '~/server/core/db/types'
import { UserSchema } from './schema'

export type User = UserSchema
export type UserResponse = Document<UserSchema & Timestamp>
