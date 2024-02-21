import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("International")

  const fetchNews = () => {
    fetch(`https://api.worldnewsapi.com/search-news?api-key=${process.env.REACT_APP_API_KEY}&text=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => (setNews(data.news), console.log(data.news))) // Assuming the data structure has an 'articles' field
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    fetchNews()
  }, []);

  return (
      <div className={"flex flex-col gap-y-4 mx-3"}>
        <h3 className="text-xl font-bold text-center">Actuality</h3>
        <form className={'flex items-center justify-center rounded bg-gray-500 py-3'}>
          <input type={"text"} value={searchQuery} onChange={handleChange} />
          <button>Search</button>
        </form>
        {news.map((actuality) => (
            <div className={"rounded bg-gray-100 p-4"} key={actuality.id}>
              <h3 className={"text-lg font-bold mb-2"}>{actuality.title}</h3>
              <img src={actuality.image ? actuality.image : ''} alt={'news image'} className="mx-auto"/>
              <p className="text-gray-700 mt-2">{actuality.text.substring(0, 100)}...</p>
            </div>
        ))}
      </div>
  );
}

export default App;
