import {Link,useNavigate} from 'react-router-dom'
function Header(){
    const navigate=useNavigate()
    const onLogin=()=>{
        navigate('/login')
    }
    const onRegister=()=>{
        navigate('/register')

    }
    return (
        <>
        
        <ul className='nav justify-content-end bg-dark  ' style={{"height":"70px"}}>
            
            <li className="nav-item px-2 py-3">
                <button onClick={onLogin} type='submit' className='btn btn-light '>Login</button>
            </li>
            <li className="nav-item px-2 py-3">
                <button onClick={onRegister}  type='submit' className='btn btn-light '>Rgister</button>
            </li>
        </ul>
        
        </>
    )
}

export default Header