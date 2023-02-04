import axios from 'axios'
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [salary, setSalary] = useState("")
  const [date, setDate] = useState("")
    
  const navigate = useNavigate();
      
  const handleSubmit = (e) => {
       e.preventDefault();
       axios.post("https://63d7f10b5dbd7232443052cf.mockapi.io/my-crud", {
        e_firstName: firstName,
        e_lastName: lastName,
        e_email: email,
        e_salary: salary,
        e_date: date
       }).then(()=>{
             navigate("/")
       })
  }

  return (
    <>
      <div className='row mt-2 d-flex align-items-center justify-content-center'>
         <div className='col-md-7'>
          <div className='bg-dark text-white text-center mb-3 pb-1 pt-1 rounded-pill'>
            <h1>Add Employee</h1>
          </div>
          <form onSubmit={handleSubmit}>
             <div className='form-group mb-2'>
               <label>First Name: </label>
               <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)} placeholder="first name"/>
             </div>
             <div className='form-group mb-2'>
               <label> Last Name:</label>
               <input type="text" className='form-control' onChange={(e) => setLastName(e.target.value)} placeholder="last name"/>
             </div>
             <div className='form-group mb-2'>
               <label>Email:</label>
               <input type="mail" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
             </div>
             <div className='form-group mb-2'>
               <label>Salary:</label>
               <input type="number" className='form-control' onChange={(e) => setSalary(e.target.value)} placeholder="salary"/>
             </div>
             <div className='form-group'>
               <label>Date:</label>
               <input type="date" className='form-control' onChange={(e) => setDate(e.target.value)} placeholder="date"/>
             </div>
             <br />
             <div className='d-grid'>
             <input type="submit" value="Add" className='btn btn-primary text-white'/>
             </div>
          </form>
         </div>
      </div>
    </>
  )
}

export default Create;