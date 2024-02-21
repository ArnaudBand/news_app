import { useState } from "react";
import NewsCard from "./components/NewsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "./api";
import SearchForm from "./components/SearchForm";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("Artificial Intelligence");
  
  const { data: news, isLoading } = useQuery({
    queryKey: ['news', searchQuery],
    queryFn: () => fetchNews(searchQuery),
    enabled: !!searchQuery,
  });
  
  return (
    <div className={"flex flex-col gap-y-4 mx-3"}>
      <h3 className="text-xl font-bold text-center">Actuality</h3>
      <SearchForm fetchNews={setSearchQuery} />
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news?.articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
