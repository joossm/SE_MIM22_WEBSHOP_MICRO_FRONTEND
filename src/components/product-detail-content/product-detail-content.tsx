import { ProductDetailStyled } from './product-detail-content.styles'
import { ProductDetailContentProps } from './product-detail-content.types'

export const ProductDetailContent = ({ book }: ProductDetailContentProps) => {
  console.log('>>> ', book)
  return (
    <ProductDetailStyled>
      <h4>{book.title}</h4>
      <p>EAN: {book.ean}</p>
      <p>Price: {book.price}€</p>
      <h5>Über dieses Buch:</h5>
      <p>{book.content}</p>
    </ProductDetailStyled>
  )
}
