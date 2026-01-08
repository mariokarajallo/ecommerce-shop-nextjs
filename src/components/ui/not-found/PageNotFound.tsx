import Link from 'next/link'
import { titleFont } from '@/config/fonts'
import Image from 'next/image'
export const PageNotFound = () => {
  return (
     <div className="flex flex-col-reverse md:flex-row h-[800px] items-center justify-center align-middle">

        <div className='text-center px-5 mx-5'>
            <h2 className={`${titleFont.className} text-9xl`}>404</h2>
            <p className="font-semibold mb-2 ">Los sentimos, la página que buscas no se encuentra</p>
            <Link href="/" className=" font-normal hover:underline transition-all duration-300 ease-in-out text-blue-500 text-center mt-2">Volver al inicio</Link>
        </div>

{/* imagen */}
<div className='px-5 mx-5'>
    <Image
    className='p-5 sm:p-0'
    src="/imgs/starman_750x750.png"
    alt="Not Found"
    width={500}
    height={500}
    />          
</div>

    </div>
  )
}
