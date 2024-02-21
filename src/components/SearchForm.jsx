import { useState } from "react";

const SearchForm = ( { fetchNews } ) => {
  
  const [ searchQuery, setSearchQuery ] = useState ("");
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchNews(searchQuery);
      setSearchQuery("")
    } catch ( error ) {
      console.log("Error fetching news:", error)
    }
  };
  
  return (
    <form onSubmit={ handleSubmit }
          className={ 'flex items-center justify-center rounded bg-gray-500 p-3 w-fit gap-x-0.5' }>
      <input type={ "text" } value={ searchQuery } onChange={ handleChange }
             className={ 'border-none rounded pl-3 bg-black text-white' }/>
      <button className={ 'bg-black text-white px-2 rounded' }>Search</button>
    </form>
  )
}

export default SearchForm;