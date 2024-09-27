import React from 'react'
import NewForm from './NewForm'
import NewTable from './NewTable'
import { PatientProvider } from '../context/TableContext'

const MainContent = () => {
    return (
        <div className='mx-5 mt-3'>
            <PatientProvider>
            <NewForm />
            <NewTable />
            </PatientProvider>
        </div>
    )
}

export default MainContent