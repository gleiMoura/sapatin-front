import styled from "styled-components";
import { Link } from "react-router-dom";
import { FC } from "react";

export const Categories: FC = () => {
    return (
        <MainCategories>
            <Category>
                <Link to={"/category/masculino"}>
                    MASCULINO
                </Link>
            </Category>
            <Category>
                <Link to={"/category/feminino"}>
                    FEMININO
                </Link>
            </Category>
            <Category>
                <Link to={"/category/infantil"}>
                    INFANTIL
                </Link>
            </Category>
        </MainCategories>
    )
}

const MainCategories = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
`;

const Category = styled.div`
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 17px;
    text-align: center; 
`;
