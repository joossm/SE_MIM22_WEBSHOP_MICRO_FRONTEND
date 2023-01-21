import { makeObservable, observable } from 'mobx'
import { loginUser } from '../../api/login'
import { registerUser } from '../../api/register'

import { dummyUser } from './user-store.dummy'
import { UserT } from './user-store.types'

class UserStore {
  user?: UserT

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
      if (result === 'true') {
        this.isLoggedIn = true
        this.user = { ...dummyUser, userName: userName, password: password }
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
  }

  getUserName(): string {
    return this.user?.userName || ''
  }
}

const userStore = new UserStore()

export default userStore
