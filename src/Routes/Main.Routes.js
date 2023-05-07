import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import { Home, UseCallback, UseContext, UseContext2, UseEffect, UseLayoutEffect, UseMemo, UseReducer, UseRef, UseState } from "../Views/Index"
import { UserContext, UserContext2 } from '../Utilities/UserContext'
import { messages } from '../Utilities/Data'

const MainRoutes = () => {
    const [value, setValue] = useState("blah blah blah")

    return (
        <UserContext.Provider value={messages}>
            <UserContext2.Provider value={{ value, setValue}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/UseCallback" element={<UseCallback />} />
                    <Route path="/UseContext" element={<UseContext />} />
                    <Route path="/UseContext2" element={<UseContext2 />} />
                    <Route path="/UseEffect" element={<UseEffect />} />
                    <Route path="/UseLayoutEffect" element={<UseLayoutEffect />} />
                    <Route path="/UseMemo" element={<UseMemo />} />
                    <Route path="/UseReducer" element={<UseReducer />} />
                    <Route path="/UseRef" element={<UseRef />} />
                    <Route path="/UseState" element={<UseState />} />
                </Routes>
            </UserContext2.Provider>
        </UserContext.Provider>
    )
}

export default MainRoutes