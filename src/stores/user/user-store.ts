import { makeObservable, observable } from 'mobx'
import { loginUser } from '../../api/user/login'
import { registerUser } from '../../api/user/register'

import { dummyUser } from './user-store.dummy'
import {
  deleteUserFromLocalStorage,
  getUserFromLocalStorage,
  mapToUserObject,
  saveUserInLocalStorage,
} from './user-store.helper'
import { UserT } from './user-store.types'

class UserStore {
  user?: UserT = getUserFromLocalStorage()

  isLoggedIn = false

  constructor() {
    makeObservable(this, {
      user: observable,
      isLoggedIn: observable,
    })
  }

  async register(user: UserT): Promise<boolean> {
    try {
      const result = await registerUser(user)

      if (result === 'true') {
        this.user = user
        saveUserInLocalStorage(this.user)
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  async login(userName: string, password: string): Promise<boolean> {
    try {
      const result = await loginUser(userName, password)
      if (result !== 'false') {
        this.isLoggedIn = true
        this.user = mapToUserObject(result)
        saveUserInLocalStorage(this.user)
        return true
      }
      return false
    } catch (error) {
      console.log(error)

      this.isLoggedIn = false
      return false
    }
  }

  logout(): void {
    this.isLoggedIn = false
    this.user = undefined
    deleteUserFromLocalStorage()
  }

  getUserName(): string {
    return this.user?.userName || ''
  }
}

const userStore = new UserStore()

export default userStore
