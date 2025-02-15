import Image from 'next/image'
import React from 'react'

function footer() {
  return (
    <>
        <Image className='bg-black'
        src={'/image/Footer.png'}
        alt='image description'
        width={1923.73}
        height={740.15}
        />
    </>
  )
}
{/* Blog Section */}
<section className="bg-[#131212] h-full text-white py-10">
<div className="flex flex-col items-center">
  <h3 className="text-[#FF9F0D] text-xl pb-5">Blog Part</h3>
  <h1 className="text-5xl font-bold pb-10 text-center">
    <span className="text-[#ffab2e]">La</span>test News & Blog
  </h1>
</div>
</section>
</>
export default footer