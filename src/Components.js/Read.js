import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    
    const [apiData, setApiData] = useState([])

    const getData = () => {
        axios.get('https://63d7f10b5dbd7232443052cf.mockapi.io/my-crud')
        .then((response)=>{
            setApiData(response.data);
        })
    }

    useEffect(() => {
        getData();
      }, []);

     const handleDelete = (id) => {
        axios.delete(`https://63d7f10b5dbd7232443052cf.mockapi.io/my-crud/${id}`)
        .then(()=>{
            getData();
        })
     }

     const setDataToStorage = (id, firstName, lastName, email, salary, date) => {
         localStorage.setItem('id', id);
         localStorage.setItem('firstName', firstName);
         localStorage.setItem('lastName', lastName)
         localStorage.setItem('email', email);
         localStorage.setItem('salary', salary);
         localStorage.setItem('date', date);
     }

  return (
    <>
    
    <div className="row mt-2">
        <div className="col-md-12">
            <div className="bg-dark text-white text-center mb-3 pt-1 pb-1 rounded-pill">
                <h1>Employee Management Software </h1>
            </div>
            <div>
             <Link to='/create' >
              <button type="button" class="btn btn-primary mb-3 ms-2">Add Employee</button>
             </Link>
            </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
                apiData.map((item) => {
                    return (
                        <>
                        <tr>
                        <td scope="row">{item.id}</td>
                        <td>{item.e_firstName}</td>
                        <td>{item.e_lastName}</td>
                        <td>{item.e_email}</td>
                        <td>{item.e_salary}</td>
                        <td>{item.e_date}</td>
                        <td>
                         <Link to="/update">   
                          <button type="button" className="btn btn-secondary me-1" onClick={() => setDataToStorage(item.id, item.e_firstName, item.e_lastName, item.e_email, item.e_salary, item.e_date)}>
                            Edit
                          </button>
                          </Link>
                          <button type="button" className="btn btn-secondary" onClick={() => {if(window.confirm('Are You Sure To Delete Data ??')) {handleDelete(item.id)}}}>
                            Delete
                          </button>
                        </td>
                      </tr>
                      </>
                    )
                })
            }          
        </tbody> 
      </table>
      </div>
      </div>
    </>
  );
};

export default Read;
