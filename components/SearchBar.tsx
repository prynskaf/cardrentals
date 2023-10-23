'use client'
import { SearchManufacturer } from "."

const SearchBar = () => {
  const handleSearch = () => {
      
  }
  return (
    <form
    className='searbar'
    onSubmit={handleSearch}
    >
    <SearchManufacturer/>
    </form>
  )
}

export default SearchBar