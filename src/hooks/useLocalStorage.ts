const getByStorage = (key: string) => {
    const dataStorage = localStorage.getItem(key);

    if (dataStorage) {
        return JSON.parse(dataStorage)
    }
};

const setByStorage = (key: string, value: any) => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}

export {
    getByStorage,
    setByStorage
}