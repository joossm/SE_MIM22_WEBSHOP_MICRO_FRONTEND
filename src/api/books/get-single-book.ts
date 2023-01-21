import axios from 'axios'
import { BookFromBackend } from '../../components/book/book.types'

export async function getBookById(id: string): Promise<BookFromBackend> {
  const response = await axios.get(`http://localhost:8080/getBookById?id=${id}`)
  console.log('>>> response ', response)
  return response.data
}
