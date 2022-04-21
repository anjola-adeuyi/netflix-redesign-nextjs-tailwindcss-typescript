import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Movie } from "../typings";

interface Props {
  title: string;
  movies: Movie[]
}

const Row = ( {title, movies} : Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2>{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon  className="chevronIcons" />
        <ChevronRightIcon className="chevronIcons" />
      </div>
    </div>
  )
}

export default Row