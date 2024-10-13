import { ChangeEvent, FC, InputHTMLAttributes, ReactNode, useState } from "react";
import { StaticPage } from "../components/StaticPage";
import styled from "styled-components";

export const LoginPage: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadButton, setLoadButton] = useState(true);

    const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };

    const getPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <StaticPage children={
            <LoginContainer>
                <form>
                    <input type="email" id='email' placeholder='email' required onChange={getEmail} />
                    <input type="password" id="password" placeholder='senha' required onChange={getPassword} />

                    <button className={loadButton ? "" : "hide"} onClick={(e) => {
                        if (!email || !password) {
                            alert("Preencha os dois campos!");
                            navigate("/");
                        } else {
                            setLoadButton(false)
                            const requestion = axios.post("https://sapatin.onrender.com/login", {
                                email: email,
                                password: password
                            });
                            requestion.then(answer => {
                                setData(answer.data);
                                navigate("/")
                            })
                            requestion.catch(err => {
                                alert("dados inválidos!", err.data);
                                setLoadButton(true);
                                navigate("/login");
                            })
                        }
                        e.preventDefault();
                    }}>Entrar</button>

                    <button className={loadbutton ? "hide" : "loading"}>
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
};

const LoginContainer = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;
    justify-content: center;

`