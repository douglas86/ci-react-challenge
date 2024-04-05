import {useState} from 'react'

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