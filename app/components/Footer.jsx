import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen h-auto lg:h-[30vh] bg-neutral-900 bg-[url("/service-bg.png")] bg-cover'>
      <div className="w-full flex flex-col lg:flex-row justify-between p-10">
        <div className="lg:max-w-[20vw]">
          <h1 className="text-6xl escape text-wrap">escape</h1>
          <p className="font-semibold text-3xl">creatives</p>
          <p className="text-sm mt-4">Let&apos;s Grow together!!</p>
        </div>

        <div className="p-3 flex flex-col gap-3 mr-5 font-light justify-center">
          <Link href="/#home">
            <p>Home</p>
          </Link>
          <Link href="/#about">
            <p>About</p>
          </Link>
          <Link href="/#services">
            <p>Services</p>
          </Link>
          <Link href="/#features">
            <p>Features</p>
          </Link>
          <Link href="/#testimonials">
            <p>Testiimonials</p>
          </Link>
        </div>
        <div className="flex lg:hidden mt-4 flex-col justify-center items-center">
          <p>Developed by</p>
          <h1 className="font-sans font-extrabold text-5xl tracking-tight">
            techKraft
          </h1>
          {/* <Image src='/logo-white.png' width={100} height={100} alt='techKraft' /> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer