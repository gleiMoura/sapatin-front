import styled from "styled-components";
import { CgAdidas } from "react-icons/cg";
import { SiNike } from "react-icons/si";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <FooterContainer>
            <div className="main">
                <h1>Procurando por uma marca?</h1>
                <div className="brands">
                    <div className="brand">
                        <SiNike size={50} />
                    </div>
                    <div className="brand">
                        <CgAdidas size={50} />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>Produzido por Gleison Moura</p>
            </div>
        </FooterContainer>
    )
};

const FooterContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    
    .main{
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        border: 1px solid darkgray
    }

    .main h1{
        padding: 15px;
        box-sizing: border-box;
        font-size: 1.5rem;
        text-align: center;
        font-weight: 700;
    }
    
    .brands{
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .brand{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 1px solid darkgray;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: white;
        background-color: black;
    };

    .bottom{
        width: 100%;
        height: 40px;
        background-color: white;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.8rem;
    }
`
