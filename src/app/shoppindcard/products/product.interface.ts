export interface IProductCard {

    id: number,
    title: string,
    price?: number,
    discountPercentage?: number,
    description: string,
    category?: string,
    images: string[],
    rating: number,
    stock?: number,
    thumbnail?: string,
    brand?: string,
    oldPrice?: number

}
export interface IProductRating {
    rate: number
    count: number
}
export enum ICategory {
    MEN = "MEN",
    WOMEN = "WOMEN",
    JEWELRY = "JEWELRY"

}


export interface IBaseProducts 
{
    limit?: number,
    total?: number,
    skip?: number,
    products: IProductCard []
    
}


