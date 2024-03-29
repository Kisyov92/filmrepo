function SearchBoxMovie({ movie, onChooseMovie }) {
  const { Poster: img, Title: title, Year: year, imdbID: id } = movie;
  return (
    <div
      className="m-4 flex gap-5 rounded-lg p-4 hover:cursor-pointer hover:bg-stone-500"
      onClick={() => onChooseMovie(id)}
    >
      <img src={img} alt="movie poster" className="w-24" />
      <div className="flex flex-col justify-evenly">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-xl font-normal">{year}</p>
      </div>
    </div>
  );
}

export default SearchBoxMovie;
