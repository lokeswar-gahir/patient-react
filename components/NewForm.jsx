import { React, useState, useContext } from 'react'
import { PatientContext } from '../context/TableContext'

const NewForm = () => {
    const tablecontext = useContext(PatientContext)

    const [formData, setFormData] = useState({
        patientFirstName: '',
        patientLastName: '',
        mrnNumber: ''
    })
    const handleSearch = async (e) => {
        e.preventDefault()
        if (formData.patientFirstName === '' && formData.patientLastName === '' && formData.mrnNumber === ''){
            alert('Atleast one field is required !!!')
            return
        }
        const response = await fetch('https://api.npoint.io/b252f934a42701af0c3f')
        const responseData = await response.json()
        const data = responseData?.required_data
        tablecontext.setPatientData(data)

    }
    return (
        <>
            <div>
                <h3>Create a New Form</h3>
                <p>To create a new form, first search for a patient by name or MRN. Next, select the encounter the new consent will be attached to.</p>
            </div>
            <form className='p-2 d-flex gap-3' style={{ border: '2px solid rgba(128, 128, 128, 0.5)', borderRadius: '5px' }}>
                <input type="text" name='fName' placeholder='Patient First Name' onChange={(e) => setFormData({ ...formData, patientFirstName: e.target.value })} value={formData.patientFirstName} />
                <input type="text" name='lName' placeholder='Patient Last Name' onChange={(e) => setFormData({ ...formData, patientLastName: e.target.value })} value={formData.patientLastName} />
                <input type="number" name='mrnNumber' placeholder='MRN Number' onChange={(e) => setFormData({ ...formData, mrnNumber: e.target.value })} value={formData.mrnNumber} />
                <button className='btn btn-success' onClick={(e) => handleSearch(e)}>Search</button>
            </form>
        </>
    )
}

export default NewForm