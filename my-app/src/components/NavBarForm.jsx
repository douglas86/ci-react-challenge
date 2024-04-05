import {useState} from 'react'
import styles from '../styles/NavBarForm.module.css';

const NavBarForm = props => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            {isLogin === false ? <button onClick={() => setIsLogin(true)}>Login</button> :
                <button onClick={() => setIsLogin(false)}>Logout</button>}
        </div>
    )

}

export default NavBarForm