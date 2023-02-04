import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      setId(localStorage.getItem('id'));
      setFirstName(localStorage.getItem('firstName'));
      setLastName(localStorage.getItem('lastName'));
      setEmail(localStorage.getItem('email'));
      setSalary(localStorage.getItem('salary'));
      setDate(localStorage.getItem('data'));
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://63d7f10b5dbd7232443052cf.mockapi.io/my-crud/${id}`,{
            e_firstName: firstName,
            e_lastName: lastName,
            e_email: email,
            e_salary: salary,
            e_date: date
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
    <>
    <div className='row mt-2'>
        <div className='col-md-12'>
            <div className='mb-2 mt-2 '>
                <Link to='/'>
                    <button className='btn btn-primary '>Read Data</button>
                </Link>
            </div>
            <div className='bg-primary p-4 text-center bg-dark text-white text-center mb-3 pt-1 pb-1 rounded-pill'>
                <h1>Update Data</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='form-group'>
                    <label>first Name: </label>
                    <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='firstName' className='form-control' />
                </div>
                <div className='form-group'>
                    <label> Last name </label>
                    <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='lastName' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Email </label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Salary </label>
                    <input type='number' value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='salary' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Date </label>
                    <input type='number' value={date} onChange={(e) => setDate(e.target.value)} placeholder='date' className='form-control' />
                </div>
                <br />
                <div className='d-grid'>
                    <input type='submit' value='Update' className='btn btn-primary' />
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default Edit