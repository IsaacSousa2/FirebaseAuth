import '../Signin/styles.scss'
import { AiOutlineGoogle } from "react-icons/ai";

export function SignIn(){

    return(

        <div className="container">
            <h1 className="">
               Acesse sua conta
            </h1>

            <span className="">
                Ultilizando autênticação social
            </span>

            <button type="button" className="button">
                < AiOutlineGoogle className='glogo' size={28} />
                Entrar com google
            </button>
        </div>

    )
    
}