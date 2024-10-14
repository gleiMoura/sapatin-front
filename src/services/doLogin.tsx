import api from ".";
import { CredentialsType } from "../interfaces";


const doLogin = async (credentials: CredentialsType) => {
    return (
        await api.post("/login", credentials)
    )
};

export default doLogin;