import Link from "next/link"

const HeroSection = () => {
  return ( 
  <>
  <div className=' flex flex-col items-center justify-center h-screen bg-cover bg-center' style={{     backgroundImage: 'url(/hero-background.jpg)' }}>
      <h1 className='text-xl  md:text-6xl font-bold text-white'>Welcome to Our Booking App</h1>
      <p className='text-lg md:text-xl text-white'>Easy Booking, Happy Stay</p>
    
      <div className="flex justify-center item-center mt-8">
         <Link href="/login" className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'>Login</Link>
         <Link href="/register" className='bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded ml-2'>Register</Link>
      </div>
  </div>  

  </>  
  )
}

export default HeroSection
