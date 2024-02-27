interface IUsers {
    username: string,
    _id: string,
    email: string,
    isAdmin: boolean,
    isActive: boolean,
    img?: string,
    address: string,
    phone: string,
    password: string,
    createdAt?: string 
}
export interface IUserPromise{
    count: number,
    users: IUsers[]
}

interface IProducts {
    title: string,
    desc: string,
    price: number,
    stock: number,
    img?: string,
    color: string,
    size: string 
}
export interface IProductsPromise{
    count: number,
    products: IProducts[]
}