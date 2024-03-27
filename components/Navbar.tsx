import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10 border-2 bg-transparent '>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/imc8.png'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
<Link href="./login">

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-sky-100 min-w-[130px]'
        />
        </Link>
    </nav>
  </header>
);

export default NavBar;
