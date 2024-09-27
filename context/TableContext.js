import React, { useState } from 'react'
import { createContext } from "react"

export const PatientContext = createContext(null)

export const PatientProvider = (props)=>{
    const [patientData, setPatientData] = useState(null)
    return <PatientContext.Provider value={{patientData, setPatientData}}>
        {props.children}
    </PatientContext.Provider>
}
