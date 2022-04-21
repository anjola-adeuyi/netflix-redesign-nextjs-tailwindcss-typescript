import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;

  // when using firebase
  // movie: Movie[] | DocumentData[]
  movies: Movie[]
}

const Row = ( {title, movies} : Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon  className="chevronIcons" />

        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
            ))}
        </div>

        <ChevronRightIcon className="chevronIcons" />
      </div>
    </div>
  )
}

export default Row