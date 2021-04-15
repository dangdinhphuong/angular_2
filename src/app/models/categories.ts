export class categories {
    id: number;
    name: string;
    products?: Array<any>;
    constructor(id: number, name:string,products: Array<any> =[]) { 
        this.id = id;
        this.name = name;
        this.products = products;
    }
}