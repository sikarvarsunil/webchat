import Image from 'next/image';
import Login from './components/Login';

export default function Home() {
  return (
    <div className='flex
    main-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image 
        width="48"
        height="48"
        alt="chattie"
        className='w-auto mx-auto'
        src="/images/logo.svg"
        />
        <h2 className='mt-6 text-center text-3xl text-gray-600 font-bold tracking-tight'>
          Sign in your account
        </h2>
        <Login />
      </div>
    </div>
  )
}
