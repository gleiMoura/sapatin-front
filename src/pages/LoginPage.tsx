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

`