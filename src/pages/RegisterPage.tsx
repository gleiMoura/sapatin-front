import { SignContainer } from "./LoginPage";
import doRegister from "../services/doRegister";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, Link } from "react-router-dom";
import { StaticPage } from "../components/StaticPage";
import { CredentialsType } from "../interfaces";
import { useMessageContext } from "../contexts/MessageContext";

export const RegisterPage: FC = () => {
    const messageContext = useMessageContext();
    const { setMessage } = messageContext;
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [loadButton, setLoadButton] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleGetData = (e: ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "confirmPassword":
                setConfirmPassword(e.target.value);
                break;
        }
    };

    const handleDoRegister = async (e: FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage({ text: "As senhas precisam ser idênticas!", type: "registro" });
            return
        }
        const credentials: CredentialsType = { name, email, password };
        if (!name || !email || !password || !confirmPassword) {
            setMessage({ text: "Preencha todos os campos!", type: "registro" })
            return
        }

        try {
            setLoadButton(false);
            await doRegister(credentials);
            console.log("foi aqui")
            setMessage({ text: "Registro efetuado com sucesso!", type: "Registro" })
            navigate("/login");
        } catch (error) {
            console.log("Erro ao tentar fazer Registro!", error);
            setMessage({ text: "Usuário já cadastrado!", type: "registro" })
            console.error(error);
        } finally {
            setLoadButton(true)
        }

    }

    return (
        <StaticPage children={
            <SignContainer>
                <form>
                    <h1>Registre-se</h1>
                    <input type="name" id='name' placeholder='Primeiro nome' required onChange={(e) => handleGetData(e, "name")} />
                    <input type="email" id='email' placeholder='email' required onChange={(e) => handleGetData(e, "email")} />
                    <input type="password" id="password" placeholder='senha' required onChange={(e) => handleGetData(e, "password")} />
                    <input type="password" id="confirm_password" placeholder='confirme a senha' required onChange={(e) => handleGetData(e, "confirmPassword")} />

                    <button className={loadButton ? "" : "hide"} onClick={handleDoRegister}>Registrar</button>

                    <button className={loadButton ? "hide" : "loading"}>
                        <ThreeDots
                            height="80"
                            width="80"
                            color='white'
                            ariaLabel='loading'
                        />
                    </button>
                    <p>
                        <Link to="/login">
                            Já tem uma conta? Faça login!
                        </Link>
                    </p>
                </form>
            </SignContainer>
        } />
    )
};
