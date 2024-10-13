import { Link } from "react-router-dom";
import { Categories } from "./Categories";
import styled from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import { FC } from "react";
import { UserDataType } from "../interfaces";

interface PropsTopBar {
    userData: UserDataType,
    withEnter?: boolean,
    withBag?: boolean
}

export const TopBar: FC<PropsTopBar> = ({ userData, withEnter, withBag }) => {
    return (
        <TopBarHeader>
            <section className="topbar_section">
                <div className="title">
                    <Link to={"/"}>sapatin</Link>
                </div>
                <div className="bag">
                    {(userData.name) ? <Link to="/profile">{withEnter && userData.name}</Link> : <Link to={"/login"}>{withEnter && 'Entrar'}</Link>}
                    {
                        withBag &&
                        <Link to={"/bag"}>
                            <FaShoppingBag size={30} />
                        </Link>
                    }
                </div>
            </section>
            <Categories />
        </TopBarHeader>
    )
};

const TopBarHeader = styled.header`
    width: 100%;
    height: auto;
    background-color: #ffffff;
    
    .topbar_section{
        width: 100%;
        height: auto;
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
        box-sizing: border-box;
        border-bottom: 1px solid darkgray;
    }

    .title a {
        font-size: 2rem;
        font-weight: 700;
    }

    .bag{
        width: 150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .bag a{
        font-size: 1.2rem;
        font-weight: 500;
    }
`
