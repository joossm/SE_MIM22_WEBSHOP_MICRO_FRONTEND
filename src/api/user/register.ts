import axios from 'axios'

import { UserT } from '../../stores/user/user-store.types'

export async function registerUser(user: UserT): Promise<any> {
  const response = await axios.post(`http://localhost:8080/register`, {
    Username: user.userName,
    Password: user.password,
    Firstname: user.firstName,
    Lastname: user.lastName,
    HouseNumber: user.houseNumber,
    Street: user.street,
    ZipCode: user.zipCode,
    City: user.city,
    Email: user.email,
    Phone: user.phone,
  })
  return response.data
}
