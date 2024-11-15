import api from ".";
import { getByStorage } from "../hooks/useLocalStorage";
import { AdressType } from "../interfaces";


const saveAdress = async (adress: AdressType) => {
    const token = getByStorage("userData")?.token;
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    return (
        await api.post("/user/adress", adress, { headers })
    )
};

export default saveAdress;