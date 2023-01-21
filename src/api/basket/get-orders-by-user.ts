import axios from 'axios'

export async function getOrdersByUser(id: string): Promise<any> {
  const response = await axios.get(
    `http://localhost:8080/getOrdersByUserId?id=${id}`
  )

  return response.data
}
