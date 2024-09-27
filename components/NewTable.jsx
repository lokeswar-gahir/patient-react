import React from 'react'
import { useContext } from 'react'
import { PatientContext } from '../context/TableContext'
import { FaArrowRight } from "react-icons/fa";

const NewTable = () => {
    const contextData = useContext(PatientContext)
    return (
    <div className='mt-3'>
        <table className="table ">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Sex</th>
                    <th>DOB</th>
                    <th>MRN</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {
                contextData.patientData
                ? 
                contextData.patientData.map((item, i)=>{
                    return <tr key={i}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.sex}</td>
                        <td>{item.dob}</td>
                        <td>{item.mrn}</td>
                        <td style={{cursor: 'pointer'}}><FaArrowRight /></td>
                    </tr>
                })
                :<tr><td colSpan={6} className='text-center'>No records found</td></tr>
                }
            </tbody>
        </table>
    </div>
  )
}

export default NewTable