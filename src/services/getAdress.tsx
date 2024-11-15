import api from ".";
import { getByStorage } from "../hooks/useLocalStorage";

const getAdress = async () => {
    const token = getByStorage("userData")?.token;
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    return (
        await api.get("/user/adress", { headers })
    )
};

export default getAdress;