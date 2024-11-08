import styled from "styled-components";
import { StaticPage } from "../components/StaticPage";
import { getByStorage } from "../hooks/useLocalStorage";
import { useState } from "react";
import { AdressForm } from "../components/AdressForm";

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
    const { adress, history } = getByStorage("userData");
    const [popUp, setPopUp] = useState<boolean>(false);

    const handleOpenPopUp = () => {
        setPopUp(true);
    }
    return (
        <StaticPage withEnter withLogout children={
            <ProfileContainer>
                <AdressForm popUp={popUp} setPopUp={setPopUp} />
                <div className="data">
                    <div className="adress">
                        <p>{adress ? adress : "Você ainda não possui um endereço cadastrado!"}</p>
                    </div>
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
    height: 400px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    .history{
        width: 100%;
        height: auto;
        min-height: 400px;
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
