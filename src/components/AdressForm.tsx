import { FC, useState, SetStateAction, Dispatch } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

interface AdressFormProps {
    popUp: boolean,
    setPopUp: Dispatch<SetStateAction<boolean>>
}

export const AdressForm: FC<AdressFormProps> = ({ popUp, setPopUp }) => {
    const [loadButton] = useState<boolean>(true);

    return (
        <AdressContainer popUp={popUp} onClick={() => {
            setPopUp(false)
        }}>
            <form>
                <div className="close">
                    <p>
                        X
                    </p>
                </div>
                <h1>Dados de endereço</h1>
                <input type="text" id='street_name' placeholder='Nome da Rua' required />
                <input type="number" id='street_number' placeholder='número' required />
                <input type="text" id="city" placeholder='cidade' />
                <input type="text" id="state" placeholder='estado' required />
                <input type="text" id="more" placeholder='complemento' required />

                <button className={loadButton ? "" : "hide"} >Enviar</button>

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
        position: relative;
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
