import React from 'react'

export const Newsletter = () => {
    return (
        <div>
            <div className="bg-red-600 p-20">
                <div className='container mx-auto'>
                    <h2 className=" font-bold text-center text-white capitalize text-5xl mb-5">Get Notified!</h2>
                    <p className=' items-center justify-center text-center mb-5  text-lg'>Sign up to our newsletter to get updates as soon as the arrive.</p>
                    <form action="" method="post" >
                        <div className="grid grid-cols-2 gap-10 capitalize">
                            <input type="text" name="firstname " id="" placeholder='Firstname' required />
                            <input type="text" name="lastname" id="" placeholder='Lastname' required />
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            <input type="email" name="email" id="" placeholder='E-mail' required />
                            <input type="tel" name="Contact" id="" placeholder='Contact' required />
                        </div>

                        <input type="submit" value="Get Notified" className='bg-black text-white border-0 rounded-lg' />
                    </form>
                </div>
            </div>
        </div>
    )
}
