'use client'
import Link from "next/link";
import Image from "next/legacy/image";
import CustomButton from "./CustomButton";
import SignIn from "./SignIn";

const NavBar = () => {
    const handleButtonClick = () => { 
        console.log("clicked");
    }

return (
  <header className='w-full  fixed top-0 left-0 z-10  bg-white border-b border-gray-100'>
    <nav className='max-w-[1440px] mx-auto flex justify-between  items-center sm:px-16 px-6 py-4'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

       <SignIn />
    </nav>
  </header>
);
}

export default NavBar;