import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <nav className='w-full px-5 flex justify-between items-center gap-7'>
          <Image src="/logo.png" width={100} height={100} alt="Logo" className='cursor-pointer w-28 mr-4'/>
       
        <ul className='flex justify-between items-center gap-4 lg:gap-8'>
          <li><Link href="/" className='hover:underline'>Home</Link></li>
          <li><Link href="/service" className='hover:underline'>Service</Link></li>
          <li><Link href="/about" className='hover:underline'>About</Link></li>
          <li><Link href="/contact" className='hover:underline'>Contact</Link></li>
        </ul>

        <div className='flex justify-between items-center'>
            <Link href="/login" className=' hidden md:block  bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'>Login</Link>
            <Link href="/register" className='hidden md:block bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded ml-2'>Register</Link>
        </div>
            
      </nav>
    </>
  ) 
}

export default NavBar
