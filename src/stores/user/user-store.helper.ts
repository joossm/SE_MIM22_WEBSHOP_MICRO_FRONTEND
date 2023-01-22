import store from 'store2'

import { UserFromBackend, UserT } from './user-store.types'

export function mapToUserObject(user: UserFromBackend): UserT {
  return {
    id: user.Id,
    userName: user.Username,
    password: user.Password,
    firstName: user.Firstname,
    lastName: user.Lastname,
    houseNumber: user.HouseNumber,
    street: user.Street,
    zipCode: user.ZipCode,
    city: user.City,
    email: user.Email,
    phone: user.Phone,
  }
}

export function saveUserInLocalStorage(user: UserT): void {
  store.set('user', user)
}

export function getUserFromLocalStorage(): UserT | undefined {
  if (typeof window !== 'undefined') {
    return store.get('user')
  }

  return undefined
}

export function deleteUserFromLocalStorage(): void {
  store.remove('user')
}
