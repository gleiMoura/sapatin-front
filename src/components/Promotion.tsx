import styled from "styled-components";

export const Promotion = () => {
    return (
        <PromotionContainer>
            <div className="image_container" />
        </PromotionContainer>
    )
};

const PromotionContainer = styled.div`
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
`;