import Dexie, { type Table } from 'dexie'
import type { Friend } from '@/models/friend'

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  friends!: Table<Friend>

  constructor() {
    super('myDatabase')
    this.version(1).stores({
      friends: '++id, name, age' // Primary key and indexed props
    })
  }
}

export const db = new MySubClassedDexie()