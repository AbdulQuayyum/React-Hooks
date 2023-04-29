import React from 'react'

import { Footer, Navbar } from "../Components/Index"
import MainRoutes from "../Routes/Main.Routes"

const MainLayout = () => {
    return (
        <div className='h-full'>
            <Navbar />
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                <MainRoutes />
                <Footer />
            </main>
        </div>
    )
}

export default MainLayout