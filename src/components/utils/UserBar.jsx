import React from 'react'

export const UserBar = ({ heading }) => {
    console.log()
    return (
        <div>
            <div className="flex justify-between p-3 bg-slate-400 rounded-md text-slate-100 mb-5">
                <div className="flex">
                    <strong className='uppercase px-1'>{heading.userType}</strong> | <p className='capitalize px-1'>{heading.userName}</p>
                </div>
            </div>
            <p className="text-6xl font-bold uppercase text-gray-100 mb-4 text-right">{heading.heading}</p>
        </div>
    )
}
