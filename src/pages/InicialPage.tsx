import { FC } from "react"
import styled from "styled-components";
import { TopBar } from "../components/TopBar";

export const InicialPage: FC = () => {
    const dataStorage = localStorage.getItem("userInformation");

    const userData = dataStorage ? JSON.parse(dataStorage) : [];

    return (
        <Container>
            <TopBar userData={userData} />
            <Promotion>
                <div className="image_container" />
            </Promotion>
        </Container>
    )
};

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: darkgray;

    a{
        text-decoration: none;
        color: #000000
    }
`;

const Promotion = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;
    justify-content: center;

    .image_container{
        width: 100%;
        height: 100%;
        background-image: url("./promotion.png"); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        
        @media(max-width: 500px){
            .image-container{
                height: 300px;
            }
        }
    };
`