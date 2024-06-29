import '../Signin/styles.scss'
import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleAuthProvider, User, signInWithPopup }  from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useState } from 'react';

export function SignIn(){

    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn() {

        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
        .then((result) => [setUser(result.user)]) 
        .catch((error) => [console.log(error)]) 
    }

    return(

        <div className="container">

            <div className='user'>
                {user.photoURL && <img className='image' src={user.photoURL} alt="Foto do usuário" />}
            </div>
            <div className='userdata'>
                <strong className='nome'>{user.displayName}</strong>

                <small className='email'>{user.email}</small>
            </div>

            <h1 className="">
               Acesse sua conta
            </h1>

            <span className="">
                Ultilizando autênticação social
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                < AiOutlineGoogle className='glogo' size={28} />
                Entrar com google
            </button>
        </div>

    )
    
}