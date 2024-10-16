import api from ".";
import { CredentialsType } from "../interfaces";


const doRegister = async (credentials: CredentialsType) => {
    return (
        await api.post("/register", credentials)
    )
};

export default doRegister;