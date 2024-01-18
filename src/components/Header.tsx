import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full px z-30 top-0 flex items-center justify-center p-3 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900/25 '>
        <Link href="/">
            <Image
              src={"/vqyt30dr.png"}
              alt="brian Logo"
              width={100}
              height={100}
              className="cursor-pointer invert-0 dark:invert hover:-translate-y-1 hover:scale-110 duration-300"
            />
        </Link>
    </header>
  )
}

export default Header
