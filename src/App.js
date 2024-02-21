import { useEffect, useState } from "react";
import './App.css';
import NewsCard from "./components/NewsCard";

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [ isLoading, setIsLoading ] = useState (false);

    const options = { year: 'numeric',  month: '2-digit', day: '2-digit' };
    const today = new Date().toLocaleDateString("en-GB", options);

    const fetchNews = () => {
      setIsLoading(true);
        fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&from=${today}&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
              setNews(data.articles);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log ( error.message );
              setIsLoading(false);
            })
    }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    fetchNews()
  }, [searchQuery]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
      <div className={"flex flex-col gap-y-4 mx-3"}>
        <h3 className="text-xl font-bold text-center">Actuality</h3>
        <form className={'flex items-center justify-center rounded bg-gray-500 p-3 w-fit gap-x-2'}>
          <input type={"text"} value={searchQuery} onChange={handleChange} className={'border-none rounded pl-3'} />
          <button className={'bg-black text-white px-2 rounded'}>Search</button>
        </form>
        {isLoading ? (
        <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((article) => (
              <NewsCard article={article} />
            ))}
          </div>
        )}
      </div>
  );
}

export default App;
