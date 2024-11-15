import { FC, useState, SetStateAction, Dispatch, ChangeEvent, FormEvent } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { AdressType } from "../interfaces";
import saveAdress from "../services/saveAdress";
import { setByStorage } from "../hooks/useLocalStorage";
import { useMessageContext } from "../contexts/MessageContext";
interface AdressFormProps {
    popUp: boolean,
    setPopUp: Dispatch<SetStateAction<boolean>>
}

export const AdressForm: FC<AdressFormProps> = ({ popUp, setPopUp }) => {
    const [loadButton, setLoadButton] = useState<boolean>(true);
    const [adress, setAdress] = useState<AdressType>({
        street: "",
        number: "",
        city: "",
        state: "",
        cep: "",
        more: ""
    });
    const messageContext = useMessageContext();
    const { setMessage } = messageContext;

    const handleClosePopUp = () => {
        setPopUp(false)
    };

    const handleGetAdress = async (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setAdress((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveAdress = async (e: FormEvent) => {
        e.preventDefault();


        if (!/^\d{5}-\d{3}$/.test(adress.cep)) {
            setMessage({ text: "Formato de CEP inválido!", type: "Endereço" });
            return
        };
        try {
            setLoadButton(false);
            const res = await saveAdress(adress);;
            setByStorage("userAdress", res.data)
            setMessage({ text: "Endereço salvo com sucesso!", type: "Endereço" });
            handleClosePopUp();
        } catch (error) {
            console.log("Erro ao tentar salvar endereço!", error);
            setMessage({ text: "Erro ao tentar salvar endereço.", type: "error" })
            console.error(error);
        } finally {
            setLoadButton(true)
        }
    }

    return (
        <AdressContainer popUp={popUp} onClick={handleClosePopUp}>
            <form onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={handleClosePopUp}>
                    <p>
                        X
                    </p>
                </div>
                <h1>Dados de endereço</h1>
                <input type="text" id='street' name="street" placeholder='Nome da Rua' required onChange={handleGetAdress} />
                <input type="number" id='number' name="number" placeholder='número' required onChange={handleGetAdress} />
                <input type="text" id="city" name="city" placeholder='cidade' onChange={handleGetAdress} />
                <input type="text" id="state" name="state" placeholder='estado' required onChange={handleGetAdress} />
                <input type="text" id="more" name="more" placeholder='complemento' required onChange={handleGetAdress} />
                <input type="text" id="cep" name="cep" placeholder='cep xxxxx-xxx' required onChange={handleGetAdress} />

                <button className={loadButton ? "" : "hide"} onClick={handleSaveAdress}>Enviar</button>

                <button className={loadButton ? "hide" : "loading"}>
                    <ThreeDots
                        height="80"
                        width="80"
                        color='white'
                        ariaLabel='loading'
                    />
                </button>
            </form>
        </AdressContainer>
    )
};

const AdressContainer = styled.div<{ popUp: boolean }>`
    width: 100%;
    height: 100vh;
    background-color: #808080aa;
    display: ${(props) => props.popUp ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left:0;

    .hide{
        display: none;
    }

    form{
        width: 400px;
        height: 95vh;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
    }

    form h1{
        font-size: 1.5rem;
        margin-bottom: 20px;
        font-weight: 600;
        color: white;
    }
    input{
        width: 300px;
        height: 30px;
        background-color: #FFF;
        border: 1px solid #D4D4D4;
        padding: 20px;
        box-sizing: border-box;
        text-align: left;
        margin-bottom: 13px;
        font-family: 'Raleway';
        font-size: 20px;
        border-radius: 5px;
        color: #000;
    }
    button{
        width: 300px;
        height: 30px;
        background-color: white;
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: black;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .close{
        color: white;
        font-size: 1.5rem;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
`;
