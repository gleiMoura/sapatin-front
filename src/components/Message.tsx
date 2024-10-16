import { FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useMessageContext } from "../contexts/MessageContext";

export const Message: FC = () => {
    const messageContext = useMessageContext();
    const { message, setMessage } = messageContext;


    useEffect(() => {
        if (message.type !== "none") {
            const timeout = setTimeout(() => {
                setMessage({ type: "none" })
            }, 5000);

            return () => clearTimeout(timeout)
        }

    }, [message])

    return (
        <MessageContainer type={message.type}>
            <p>{message.text}</p>
        </MessageContainer>
    )
};

const slideIn = keyframes`
  from {
    right: -300px; /* Começa fora da tela à direita */
  }
  to {
    right: 20px; /* Posição final visível */
  }
`;

const MessageContainer = styled.div<{ type: string }>`
  width: 250px;
  height: 50px;
  background-color: darkgray;
  border: 1px solid black;
  display: ${(props) => (props.type === 'none' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px; /* Define a posição inicial para a animação */
  top: 20px;
  color: black;
  font-weight: 700;
  animation: ${slideIn} 1s ease-out forwards; /* Animação de 1 segundo */
`;
