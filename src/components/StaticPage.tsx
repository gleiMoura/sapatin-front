import { FC, ReactNode } from "react"
import styled from "styled-components";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { Message } from "./Message";

interface StaticPageProps {
    children: ReactNode;
    withEnter?: boolean,
    withBag?: boolean
};

export const StaticPage: FC<StaticPageProps> = ({ children, withBag, withEnter }) => {
    const dataStorage = localStorage.getItem("userInformation");

    const userData = dataStorage ? JSON.parse(dataStorage) : [];

    return (
        <Container>
            <Message />
            <TopBar withBag={withBag} withEnter={withEnter} userData={userData} />
            {children}
            <Footer />
        </Container>
    )
};

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: darkgray;
    position: relative;

    a{
        text-decoration: none;
        color: #000000
    }
`;


