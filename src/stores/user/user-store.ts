import { makeObservable, observable } from 'mobx'
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

  login(userName: string, password: string): void {
    this.isLoggedIn = true
    this.user = dummyUser
  }
}

const userStore = new UserStore()

export default userStore