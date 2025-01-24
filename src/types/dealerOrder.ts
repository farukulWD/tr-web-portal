import { TProduct } from "./products"

export type TDealerOrder= {
    _id: string
    dealer: string
    status: string
    approved: boolean
    orderType: string
    product: IProduct[]
    createdAt: string
    updatedAt: string
    orderCode: string
    __v: number
    total: number
  }
  
  export interface IProduct {
    product: TProduct
    quantity: number
    price: number
    _id: string
  }
  
 