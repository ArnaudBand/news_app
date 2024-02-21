export const fetchNews = async (searchQuery) => {
  const options = { year: 'numeric',  month: '2-digit', day: '2-digit' };
  const today = new Date().toLocaleDateString("en-GB", options);
  
  const url = `https://newsapi.org/v2/everything?q=${ searchQuery }&from=${ today }&sortBy=popularity&apiKey=${ process.env.REACT_APP_API_KEY }`;
  
  const response = await fetch(url);
  
  if ( !response.ok ) throw new Error('Failed to fetch news');
  
  return response.json();
}