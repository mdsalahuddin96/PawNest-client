'use client'

import { createContext, useState } from "react"

export const HamburgerContext=createContext()

export function HamburgerProvider({children}){
    const [open, setOpen] = useState(false);
    const data={
        open,
        setOpen
    }
    return(
        <HamburgerContext.Provider value={data}>
            {children}
        </HamburgerContext.Provider>
    )
}