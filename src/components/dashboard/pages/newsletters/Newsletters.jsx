import React, { useState } from 'react'
import { BiAddToQueue, BiArrowBack } from 'react-icons/bi'
import {
    Nav, Navbar, UserBar, DataTable,
    TinyMCE
} from '../../../index'

export const Newsletters = () => {
    const [showNLMenu, setShowNLMenu] = useState(true)
    const addNewNewsletter = (e) => {
        setShowNLMenu(!showNLMenu)
        console.log(showNLMenu)
    }
    const logger = (e) => {
        console.log(e)
    }
    const toggle = () => {
        return (
            <div>
                {showNLMenu ? (
                    <div>
                        <div className='flex items-center justify-center  space-x-2 px-2 p-3 rounded-2xl bg-green-500 w-32 mb-12 cursor-pointer text-white'
                            onClick={(e) => addNewNewsletter(e)}>
                            <BiAddToQueue size={'1.5rem'} />
                            <p>Add New</p>
                        </div>
                        <DataTable />
                    </div>
                ) :
                    <div>
                        <div className='flex items-center justify-center  space-x-2 px-2 p-3 rounded-2xl bg-gray-200 w-32 mb-12 cursor-pointer'
                            onClick={(e) => addNewNewsletter(e)}>
                            <BiArrowBack size={'1.5rem'} />
                            <p>Return</p>
                        </div>
                        <div className="grid">
                            <form action="" method="post" className='w-1/2' onSubmit={(e) => logger()}>
                                <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
                                    <label htmlFor="subject" className='required'>Subject</label>
                                    <input type="text" name="subject" id="subject" className='' required />
                                </div>

                                <div>
                                    <label htmlFor="content" className='required'>Content</label>
                                    {/* <textarea name='content' id='content' rows={10} required onChange={(e) => logger(e)}></textarea> */}
                                    <TinyMCE />
                                </div>
                                <div>
                                    <label htmlFor="attachment">Add an Attachment
                                        <input type="file" name="attachment" id="attachment" />
                                    </label>
                                </div>
                                <input type="submit" value="Submit" className=' bg-black text-white rounded-md' />
                            </form>
                        </div>

                    </div>

                }
            </div>

        )
    }
    return (
        <div>
            <Nav />
            <div className='flex'>
                <Navbar />
                <div className='p-10 w-full'>
                    <UserBar heading={{ userType: 'admin', userName: 'jefferson aggor', heading: 'newsletters' }} />
                    {toggle()}
                </div>

            </div>
        </div>

    )
}
