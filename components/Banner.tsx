import { Movie } from "../typings"

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  return (
    <div>Banner</div>
  )
}

export default Banner