import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
    return (
        <>
            <section className='bg-gradient-to-r from-blue-500 to-purple-500 h-screen'>
                <div className='grid justify-center text-center py-36 gap-2'>
                    <h1 className=' text-9xl'>404 Error</h1>
                    <p className=' text-l '>its seems the page yoyu are trying to access is doesn't exist</p>
                    <p className=' text-l '>Please check the URL and try again</p>
                    <p className=' text-l '>or you can go back to</p>
                    <div className='flex justify-center gap-5 mt-5 text-center'>
                        <Link to="/" className='p-1 border-2 border-b-blue-950 rounded-lg hover:font-bold hover:text-white transition duration-300'>Homepage</Link>
                        <Link to="/services" className='p-1 border-2 border-b-blue-950 rounded-lg hover:font-bold hover:text-white transition duration-300'>Services</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Errorpage
