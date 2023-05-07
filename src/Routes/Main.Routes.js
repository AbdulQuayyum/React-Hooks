import React from 'react'
import { Routes, Route } from "react-router-dom"

import { Home, UseCallback, UseContext, UseContext2, UseEffect, UseLayoutEffect, UseMemo, UseReducer, UseRef, UseState } from "../Views/Index"
import { UserContext } from '../Utilities/UserContext'

const useContextMessage = `In React, useContext is a hook that allows you to access data that has been passed down through the component tree via the Context API.

When you use useContext, you pass in the Context object that you want to access, and the hook returns the current value of that context.

This can be useful for sharing data between components that are not directly connected via props, without the need for prop drilling.

Overall, useContext can be a useful tool for simplifying the sharing of data between components in a React application.`

const MainRoutes = () => {
    return (
        <UserContext.Provider value={useContextMessage}>
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
        </UserContext.Provider>
    )
}

export default MainRoutes