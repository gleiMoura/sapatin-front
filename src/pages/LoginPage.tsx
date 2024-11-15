import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, Link } from "react-router-dom";
import { StaticPage } from "../components/StaticPage";
import styled from "styled-components";
import { CredentialsType } from "../interfaces";
import doLogin from "../services/doLogin";
import { useMessageContext } from "../contexts/MessageContext";
import { setByStorage } from "../hooks/useLocalStorage";

export const LoginPage: FC = () => {
    const messageContext = useMessageContext();
    const { setMessage } = messageContext;
    const [credentials, setCredentials] = useState<CredentialsType>({
        email: "",
        password: ""
    });
    const [loadButton, setLoadButton] = useState(true);
    const navigate = useNavigate();

    const handleCredentials = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleDoLogin = async (e: FormEvent) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password) {
            setMessage({ text: "Preencha todos os campos!", type: "login" })
            return
        }

        try {
            setLoadButton(false);
            const res = await doLogin(credentials);
            setByStorage("userData", res.data)
            setMessage({ text: "Login efetuado com sucesso!", type: "login" })
            navigate("/");
        } catch (error) {
            console.log("Erro ao tentar fazer login!", error);
            setMessage({ text: "Usuário ou senha inválido.", type: "error" })
            console.error(error);
        } finally {
            setLoadButton(true)
        }
    }

    return (
        <StaticPage children={
            <SignContainer>
                <form>
                    <h1>Faça seu Login</h1>
                    <input type="email" id='email' placeholder='email' required onChange={handleCredentials} />
                    <input type="password" id="password" placeholder='senha' required onChange={handleCredentials} />

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
            </SignContainer>
        } />
    )
}

export const SignContainer = styled.div`
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
    form h1{
        font-size: 1.5rem;
        margin-bottom: 20px;
        font-weight: 600;
    }
    input{
        width: 326px;
        height: 40px;
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
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
    }
   a{
    color: black;
    font-weight: 600;
   }
`