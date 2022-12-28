export interface BookT {
  id: number
  title: string
  ean: string
  price: number
  content: string
}

export interface BookProps {
  book: BookT
}
