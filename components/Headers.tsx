import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'

const Headers = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img 
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain" 
        />

        <ul>
          <li className="headerLink"> Home </li>
          <li className="headerLink"> TV Shows </li>
          <li className="headerLink"> Movies </li>
          <li className="headerLink"> New & Popular </li>
          <li className="headerLink"> My List </li>
        </ul>
      </div>

      <div>
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon classname="h-6 w-6" />
        <Link href="/account">
          <img src="" alt="" />
        </Link>
      </div>
    </header>
  )
}

export default Headers