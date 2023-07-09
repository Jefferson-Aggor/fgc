import React from 'react'

export const MediaHeader = () => {
  return (
    <div className='px-32 py-16 flex flex-col items-center justify-center '>
        <div className='flex justify-center items-center flex-col'>
            <div className="text-center font-extrabold uppercase text-6xl mb-10 w-2/3"> Watch last sunday's service</div>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/dVxrorBV9Ls" title="Foundation Assembly with Pastor Eastwood @ Fountain Gate Chapel - Hilltop, Ofankor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    </div>
  )
}
