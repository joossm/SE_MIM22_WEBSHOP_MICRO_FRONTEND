export interface BookT {
  id: string
  title: string
  ean: string
  price: number
  content: string
}

export interface BookProps {
  book: BookT
}

export interface BookFromBackend {
  Id: string
  Titel: string
  EAN: string
  Price: number
  Content: string
}
