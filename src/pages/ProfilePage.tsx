import styled from "styled-components";
import { StaticPage } from "../components/StaticPage";
import { getByStorage } from "../hooks/useLocalStorage";
import { useState } from "react";
import { AdressForm } from "../components/AdressForm";

export const ProfilePage = () => {
    const { adress } = getByStorage("userData");
    const [popUp, setPopUp] = useState<boolean>(false);

    const handleOpenPopUp = () => {
        setPopUp(true);
    }
    return (
        <StaticPage withEnter children={
            <ProfileContainer>
                <AdressForm popUp={popUp} setPopUp={setPopUp} />
                <div className="data">
                    <div className="adress">
                        <p>{adress ? adress : "Você ainda não possui um endereço cadastrado!"}</p>
                    </div>
                    <button onClick={handleOpenPopUp}>{adress ? "Mudar endereço" : "cadastrar endereço"}</button>
                </div>
            </ProfileContainer>
        } />
    )
};

const ProfileContainer = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;

    .data{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .adress{
        width: auto;
        height: 50px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        background-color: black;
        color: white;
        border: none;
        cursor: pointer;
        border-right: 1px solid darkgray;
    }

    button{
        width: auto;
        height: 50px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        background-color: white;
        color: black;
        border: none;
        cursor: pointer;
        border: 1px solid black;
        box-sizing: border-box;
    }

    button:hover{
        background-color: black;
        color:white;
    }
`;
