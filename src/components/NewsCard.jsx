const NewsCard = ({ article }) => (
  <div className={ "rounded bg-gray-100 p-4 cursor-pointer h-fit" }>
    <h3 className={ "text-lg font-bold mb-2" }>{ article.title }</h3>
    <img
      src={ article.urlToImage === null ? 'https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*' : article.urlToImage }
      alt={ 'news image' } className="mx-auto"/>
    <p className="text-gray-700 my-2">{ article.description.substring ( 0, 100 ) }...</p>
    <div className={ 'flex justify-between' }>
      <p className={ 'bg-gray-700 w-fit p-2 rounded text-white' }>{ article.source.name }</p>
      <h5 className={ 'p-2 text-sm italic' }>{ article.author !== "" ? article.author : '' }</h5>
    </div>
  </div>
);

export default NewsCard;