import styled from "styled-components";
import { StaticPage } from "../components/StaticPage";

export const ProfilePage = () => {
    return (
        <StaticPage children={
            <ProfileContainer>

            </ProfileContainer>
        } />
    )
};

const ProfileContainer = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;
