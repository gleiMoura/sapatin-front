export interface UserDataType {
    name: string,
};

export interface CredentialsType {
    name?: string,
    email: string,
    password: string
};

export interface AdressType {
    street: string,
    number: number | string,
    city: string,
    state: string,
    cep: string,
    more?: string
}