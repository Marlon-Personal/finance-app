import React from 'react';
import Navbar from '../components/Navbar';

function NotFoundPage(){
    return(
<>
<Navbar/>
<div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-center text-5xl">404: Page Not Found!</h1>
            <a href="/" className="px-6 py-3 my-8 border text-center text-xl text-black hover:text-sky-700 hover:border-sky-700">
                        Go Back
                    </a>
        </div>
</>
    )
};

export default NotFoundPage;