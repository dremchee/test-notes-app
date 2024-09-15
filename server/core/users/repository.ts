import { User } from './types'
import { Database, DatastorePatch } from '~/server/core/db'

class UserRepository {
  private db: DatastorePatch
  constructor() {
    this.db = Database.collection('users', {
      timestampData: true
    })

    this.db.ensureIndexAsync({ fieldName: 'email', unique: true })
  }
  create(data: User) {
    return this.db.insertAsync(data)
  }

  findAll() {
    return this.db.findAsync({})
  }
}

export const userRepository = new UserRepository()
