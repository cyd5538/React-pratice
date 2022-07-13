import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full  md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='text-xl tracking-wideset text-[#5651eb] uppercase'>about</p>
            <h2 className='py-2 text-gray-600 '>who I am</h2>
            <p className='py-2 text-gray-600 '>adfakdfakdf adfk adfkxc dkf akfda dkflzxvk adfk adlkf aldmf xcv adfkadfkalfdk</p>
            <p className='py-2 text-gray-600 '>adfakdfakdf adfk adfkxc dkf akfda dkflzxvk adfk adlkf aldmf xcv adfkadfkalfdk</p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>adfakdfakdf adfk adfkxc dkf akfda dkflzxvk</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
