import { useState } from "react"
import {Link} from 'react-router-dom'

function Register(){
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:'',
        phoneNumber:''
    })

    const {name,email,password,password2,phoneNumber}=formData



    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        console.log(name,email,password,password2,phoneNumber)
    }
    const onChange=(e)=>{
        setFormData((prevState)=>{
            return({
                ...prevState,
                [e.target.name]:e.target.value
            })
        })
       }
    return (
        <>
            
            <div className='container mt-5 ' style={{"textAlign":"center"}} >
            <h1 className="my-5">Login</h1>
            <form onSubmit={onSubmit}>
            <div className='col  profile-data mr-4' >
            <div className='row-sm mt-4'>
                    <label className="text-dark d-none d-lg-inline" disabled>name:</label>
                    <input
                    type='name'
                    placeholder='name'
                    id='name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    required
                    
                 />
                </div>
                <div className='row-sm mt-4'>
                    <label className="text-dark d-none d-lg-inline" disabled>email:</label>
                     <input
                        type='email'
                        placeholder='Email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                    
                    />
                </div>
                <div className='row-sm mt-4'>
                    <label className="text-dark d-none d-lg-inline" disabled>pass:</label>
                    <input
                    type='password'
                    placeholder='Password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    required
                    
                 />
                </div>
                <div className='row-sm mt-4'>
                    <label className="text-dark d-none d-lg-inline" disabled>pass:</label>
                    <input
                    type='password'
                    placeholder='Confirm Password'
                    id='password2'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    required
                    
                 />
                </div>
                <div className='row-sm mt-4'>
                    <label className="text-dark d-none d-lg-inline" disabled>phone:</label>
                    <input
                    type='phoneNumber'
                    placeholder='Phone Number'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={onChange}
                    required
                    
                 />
                </div>
                 <button className='btn btn-dark text-light btn-profile btn-profile-login mt-5' type='submit'>login</button>
               
                 



            </div>

        </form>
            </div>
        </>
    )
}
export default Register