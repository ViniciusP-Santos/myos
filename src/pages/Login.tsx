import logoImg from '../assets/images/Logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { auth } from '../services/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

import '../styles/auth.scss';
import { Button } from '../components/button/Button';

import { InitialFocus } from '../components/modal/modal';

export function Login(){

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((re)=> {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div id="page-auth">
            <aside>
                <strong>Crie e gerencie suas Ordens de Serviço!</strong>
                <p>Além de controlar todas as suas OS, tenha todas as metricas do seu negocio em um só lugar.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Market Finance" />
                    <button onClick={signInWithGoogle} className="create-login">
                        <img src={googleIconImg} alt="logo do Google" />
                        Log in with Google
                    </button>
                    <div className='separator'>or Log in with your email</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="username or email"
                        />
                        <input 
                            type="password" 
                            placeholder="password"
                        />
                        <Button>Log In</Button>
                        <a href="#">Forgot password?</a>
                        
                        <p>Don't have an account? <a><InitialFocus /></a></p>
                    </form>
                </div>
            </main>
        </div>
    );
}