import * as R from 'ramda'
import { IStorage } from './IStorage'

export class Storage implements IStorage {
  storage: IStorage

  /**
   * TO-DO: implement singleton
   * private static instance: Storage;
   * */

  constructor(private type?: 'session' | 'local') {
    if (typeof window !== 'undefined') {
      if (this.type === 'session') {
        this.storage = sessionStorage
      } else {
        this.storage = localStorage
      }
    } else {
      this.storage = {
        clear(): void {
          R.has('')
        },
        getItem(key: string): string | null {
          return key
        },
        key(index: number): string | null {
          return index.toString()
        },
        removeItem(key: string): void {
          R.has(key)
        },
        setItem(key: string, value: string): void {
          R.has(key)
          R.has(value)
        },
      }
    }
  }

  clear(): void {
    this.storage.clear()
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key) || ''
  }

  key(index: number): string | null {
    return this.storage.key(index)
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value)
  }
}
