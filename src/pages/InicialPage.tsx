import { FC } from "react"
import { Promotion } from "../components/Promotion";
import { StaticPage } from "../components/StaticPage";

export const InicialPage: FC = () => {
    return (
        <StaticPage withEnter withBag children={
            <Promotion />
        } />
    )
};
