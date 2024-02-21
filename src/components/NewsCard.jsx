const NewsCard = ({ article }) => (
  <div className={ "rounded bg-gray-100 p-4 cursor-pointer h-fit" }>
    <h3 className={ "text-lg font-bold mb-2" }>{ article.title }</h3>
    <img
      src={ article.urlToImage === null ? 'https://accountmanagement.gettyimages.com/Account/ProfileImage/8a0b1082-e459-4769-9547-feb419ba01c7.jpg' : article.urlToImage }
      alt={ 'news' } className="mx-auto"/>
    <p className="text-gray-700 my-2">{ article.description ? article.description.substring(0, 100) : '' }...</p>
    <div className={ 'flex justify-between' }>
      <p className={ 'bg-gray-700 w-fit p-2 rounded text-white' }>{ article.source.name }</p>
      <h5 className={ 'p-2 text-sm italic' }>{ article.author !== "" ? article.author : '' }</h5>
    </div>
  </div>
);

export default NewsCard;