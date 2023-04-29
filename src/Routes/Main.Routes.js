import React from 'react'
import { Routes, Route } from "react-router-dom"

import { Home, UseCallback, UseContext, UseEffect, UseLayoutEffect, UseMemo, UseReducer, UseRef, UseState } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UseCallback" element={<UseCallback />} />
            <Route path="/UseContext" element={<UseContext />} />
            <Route path="/UseEffect" element={<UseEffect />} />
            <Route path="/UseLayoutEffect" element={<UseLayoutEffect />} />
            <Route path="/UseMemo" element={<UseMemo />} />
            <Route path="/UseReducer" element={<UseReducer />} />
            <Route path="/UseRef" element={<UseRef />} />
            <Route path="/UseState" element={<UseState />} />
        </Routes>
    )
}

export default MainRoutes