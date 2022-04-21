import { useRef, useState } from "react";
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
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft } = rowRef.current;
      const { clientWidth } = rowRef.current;
      const { scrollWidth } = rowRef.current;

      if (direction === "left") {
        rowRef.current.scrollLeft = scrollLeft - clientWidth;
      } else {
        rowRef.current.scrollLeft = scrollLeft + clientWidth;
      }

      if (scrollLeft === 0) {
        setIsMoved(true);
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        setIsMoved(false);
      }
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon  className={`chevronIcons left-2 ${ !isMoved && "hidden"}`} onClick={() => handleClick("left")} />

        <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
            ))}
        </div>

        <ChevronRightIcon className="chevronIcons right-2" onClick={() => handleClick("right")} />
      </div>
    </div>
  )
}

export default Row