import Datastore from '@seald-io/nedb'
import type { Document } from '@seald-io/nedb'
import { resolve } from 'node:path'
import { config } from '~/server/config'

// Patch Datastore: https://github.com/seald/nedb/issues/57
declare class DatastorePatch extends Datastore {
  findAsync<T extends Record<string, any>>(
    query: any,
    projection?: any
  ): Datastore.Cursor<Document<T>[]>
}

export class Database {
  private readonly storage: Datastore
  name: string

  constructor(name: string, options: Datastore.DataStoreOptions = {}) {
    this.name = name
    const filename = resolve(process.cwd(), config.DATABASE_DIR, `${name}.db`)

    this.storage = new Datastore({
      filename,
      autoload: true,
      ...options
    }) as DatastorePatch
  }

  static instance: Record<string, Database['storage']> = {}

  static getInstance(name: string, options?: Datastore.DataStoreOptions) {
    if (!(name in this.instance)) {
      this.instance[name] = new Database(name, options).storage
    }
    return this.instance[name]
  }

  static collection(name: string, options: Datastore.DataStoreOptions = {}) {
    return this.getInstance(name, options)
  }

  static compactInstanceDatafile() {
    if (this.name in this.instance) {
      this.instance[this.name].compactDatafileAsync()
    }
  }

  static dropInstanceDatabase() {
    if (this.name in this.instance) {
      this.instance[this.name].dropDatabaseAsync()
    }
  }

  static removeInstanceDatabase() {
    if (this.name in Database.instance) {
      Database.instance[this.name].removeAllListeners()
      delete Database.instance[this.name]
    }
  }
}

export type DatabaseStorage = Database['storage']

export { DatastorePatch }
