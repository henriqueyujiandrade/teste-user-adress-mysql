export interface IAddressRequest{
    id_usuario: number
    logradouro: string
    numero: string
    cidade: string
    uf: string
    cep: string
    bairro: string
    complemento: string
}

export interface IUpdateAdressRequest{
    logradouro: string
    numero: string
    cidade: string
    uf: string
    cep: string
    bairro: string
    complemento: string
}