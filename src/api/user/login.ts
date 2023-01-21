import axios from 'axios'
import { env } from 'process'
import { UserT } from '../../stores/user/user-store.types'

export async function loginUser(
  userName: string,
  password: string
): Promise<any> {
  const response = await axios.post('http://localhost:8080/login', {
    Username: userName,
    Password: password,
  })

  return response.data
}
