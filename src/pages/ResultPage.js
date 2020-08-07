import React from 'react'
import SearchBar from '../components/SearchBar'
import SearchContent from '../components/SearchContent'

export default function ResultPage({ books, updateBooksInState }) {
  
  return (
    <>
      <SearchBar updateBooksInState={updateBooksInState} />
      <SearchContent books={books} />
    </>
  )
}
