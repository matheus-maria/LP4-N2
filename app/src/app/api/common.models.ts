export enum TypeEnum { 'Vestido','Saia','Conjunto','Blusa','Calça' }
export enum BrandEnum { 'Polo','Tommy','Forever','Levis' }

export class Clothes {
    code: string
    color: string
    entryAt: Date
    saleValue: number
    purchaseValue: number
    type: TypeEnum
    brand: BrandEnum
    margin : number
    features: string
    size: string
    price: number
}