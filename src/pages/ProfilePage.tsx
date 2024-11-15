import styled from "styled-components";
import { StaticPage } from "../components/StaticPage";
import { getByStorage } from "../hooks/useLocalStorage";
import { FC, useState } from "react";
import { AdressForm } from "../components/AdressForm";
import { AdressType } from "../interfaces";

interface productType {
    name: string,
    image: string,
    brand: string,
    value: string
};
interface purchaseType {
    products: productType[];
    total: string,
    status: string
}

export const ProfilePage = () => {
    const { history } = getByStorage("userData");
    const adress: AdressType = getByStorage("userAdress");
    const [popUp, setPopUp] = useState<boolean>(false);

    const handleOpenPopUp = () => {
        setPopUp(true);
    };

    const AdressComponent: FC = () => {
        return (
            <>
                <p>Rua: {adress?.street}</p>
                <p>Número: {adress?.number}</p>
                <p>cep: {adress?.cep}</p>
                <p>Complemento: {adress?.more || ""}</p>
                <p>Cidade: {adress?.city}</p>
                <p>Estado: {adress?.state}</p>
            </>

        )
    }
    return (
        <StaticPage withEnter withLogout children={
            <ProfileContainer>
                <AdressForm popUp={popUp} setPopUp={setPopUp} />
                <div className="adress">
                    {adress ? <AdressComponent /> : <p>Você ainda não possui um endereço cadastrado!</p>}
                    <button onClick={handleOpenPopUp}>{adress ? "Mudar endereço" : "cadastrar endereço"}</button>
                </div>
                <div className="history">
                    {!history ? <p>Você ainda não possui compras!</p> : history.map((purchase: purchaseType) => {
                        const products: productType[] = purchase?.products;
                        return (
                            <div className="purchase">
                                {products.map((product: productType) => {
                                    return (
                                        <div className="product">
                                            <img src={product.image} alt="" />
                                            <div className="content">
                                                <p>{product.name}</p>
                                                <p>{product.brand}</p>
                                                <p>{product.value}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        )
                    })}
                </div>
            </ProfileContainer>
        } />
    )
};

const ProfileContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 125px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .adress{
        width: 500px;
        margin-top: 30px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 600;
        text-align: start;
        background-color: black;
        border: none;
        border-right: 1px solid darkgray;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .adress p {
        width: 200px;
        height: 50px;
        margin-bottom: 10px;
        background-color: white;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
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

    .history{
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 700;
    }
`;
