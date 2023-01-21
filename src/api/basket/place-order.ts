import axios from 'axios'

export async function placeOrder(
  productId: string,
  userId: string,
  amount: string
): Promise<any> {
  const response = await axios.post(`http://localhost:8080/placeOrder`, {
    produktId: productId.toString(),
    userId: userId.toString(),
    amount: amount,
  })
  return response.data
}
