import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

interface MessageType {
    type: string,
    text?: string
};

interface MessageContextType {
    message: MessageType,
    setMessage: Dispatch<SetStateAction<MessageType>>
};

const defaultContextValue: MessageContextType = {
    message: {
        type: "none"
    },
    setMessage: () => { }
}

const MessageContext = createContext<MessageContextType>(defaultContextValue)

export const useMessageContext = () => {
    return useContext(MessageContext);
};

export const MessageProvider: FC<{ children: ReactNode }> = ({ children }: any) => {
    const [message, setMessage] = useState<MessageType>({
        type: "none"
    });

    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {children}
        </MessageContext.Provider>
    )
}