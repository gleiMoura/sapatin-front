import styled from "styled-components";
import { FC, ReactNode } from "react"
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { Message } from "./Message";
import { getByStorage } from "../hooks/useLocalStorage";

interface StaticPageProps {
    children: ReactNode;
    withEnter?: boolean,
    withBag?: boolean,
    withLogout?: boolean,
    withFooter?: boolean
};

export const StaticPage: FC<StaticPageProps> = ({ children, withBag, withEnter, withLogout, withFooter }) => {
    const userData = getByStorage("userData") || [];;

    return (
        <Container>
            <Message />
            <TopBar withBag={withBag} withEnter={withEnter} userData={userData} withLogout={withLogout} />
            {children}
            {withFooter ? <Footer /> : ""}
        </Container>
    )
};

const Container = styled.main`
    width: 100%;
    height: auto;
    background-color: darkgray;
    position: relative;

    a{
        text-decoration: none;
        color: #000000
    }
`;


