import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BookT } from '../src/components/book/book.types'
import { ProductDetailContent } from '../src/components/product-detail-content/product-detail-content'
import bookStore from '../src/stores/books/book-store'

export default function Index(currentBook: BookT) {
  console.log('>>> currentBOok', currentBook)
  return (
    <>
      <h2>Product Detail</h2>
      {currentBook ? <ProductDetailContent book={currentBook} /> : 'Loading...'}
    </>
  )
}

Index.getInitialProps = async ({ query }: any) => {
  const { id } = query
  const currentBook = await bookStore.getSingleBook(id)
  return currentBook
}
