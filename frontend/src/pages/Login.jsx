import { useState } from "react"

function Login(){
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const {email,password}=formData

   const onSubmit=(e)=>{

   }
   const onChange=(e)=>{

   }

    return (
        <>
            
            <div className='container mt-5 ' style={{"textAlign":"center"}} >
            <h1 className="my-5">Login</h1>
            <form onSubmit={onSubmit}>
            <div className='col  profile-data mr-4' >
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
                 <button className='btn btn-dark text-light btn-profile btn-profile-login mt-5' type='submit'>login</button>
               
                 



            </div>

        </form>
            </div>
        </>
    )
}

export default Login