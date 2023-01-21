import axios from 'axios'
import { BookFromBackend } from '../../components/book/book.types'

export async function getAllBooks(): Promise<BookFromBackend[]> {
  const response = await axios.get('http://localhost:8080/getAllBooks')

  return response.data
}
