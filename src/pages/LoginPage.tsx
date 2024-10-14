import { ChangeEvent, FC, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, Link } from "react-router-dom";
import { StaticPage } from "../components/StaticPage";
import styled from "styled-components";
import { CredentialsType } from "../interfaces";
import doLogin from "../services/doLogin";

export const LoginPage: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadButton, setLoadButton] = useState(true);
    const navigate = useNavigate();

    const handleGetEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };

    const handleGetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleDoLogin = async () => {
        const credentials: CredentialsType = { email, password };
        if (!email || !password) {
            alert("Preencha os dois campos!");
            return
        }

        try {
            setLoadButton(false);
            await doLogin(credentials);
            navigate("/");
        } catch (error) {
            console.log("Erro ao tentar fazer login!", error);
            console.error(error);
        } finally {
            setLoadButton(true)
        }
    }

    return (
        <StaticPage children={
            <LoginContainer>
                <form>
                    <input type="email" id='email' placeholder='email' required onChange={handleGetEmail} />
                    <input type="password" id="password" placeholder='senha' required onChange={handleGetPassword} />

                    <button className={loadButton ? "" : "hide"} onClick={handleDoLogin}>Entrar</button>

                    <button className={loadButton ? "hide" : "loading"}>
                        <ThreeDots
                            height="80"
                            width="80"
                            color='white'
                            ariaLabel='loading'
                        />
                    </button>
                    <p>
                        <Link to="/register">
                            Não tem uma conta? Cadastre-se
                        </Link>
                    </p>
                </form>
            </LoginContainer>
        } />
    )
}

const LoginContainer = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;
    justify-content: center;

    .hide{
        display: none
    }

    form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
    }
    input{
        width: 326px;
        height: 58px;
        background-color: #FFF;
        border: 1px solid #D4D4D4;
        padding: 10px;
        text-align: left;
        margin-bottom: 13px;
        font-family: 'Raleway';
        font-size: 20px;
        border-radius: 5px;
        color: #000;
    }
    input:placeholder-shown{
        font-family: 'Raleway';
    }
    button{
        width: 326px;
        height: 46px;
        background-color: #000;
        border-radius: 5px;
        margin-bottom: 25px;
        cursor: pointer;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: white;
        border: none;
    }
   a{
    color: black;
    font-weight: 600;
   }
`