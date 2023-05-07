import React, { useState, useMemo } from 'react'
import { Routes, Route } from "react-router-dom"

import { Home, UseCallback, UseContext, UseContext2, UseEffect, UseLayoutEffect, UseMemo, UseReducer, UseRef, UseState } from "../Views/Index"
import { UserContext, UserContext2 } from '../Utilities/UserContext'
import { messages } from '../Utilities/Data'

const MainRoutes = () => {
    const [user, setUser] = useState(null)
    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])

    return (
        <UserContext.Provider value={messages}>
            <UserContext2.Provider value={providerValue}>
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