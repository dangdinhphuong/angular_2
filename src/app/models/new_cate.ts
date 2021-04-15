// export class new_cate {
//     id: number;
//     name: string;
   
//     constructor(id: number, name:string) { 
//         this.id = id;
//         this.name = name;
        
//     }
// }
export class new_cate {
    id: number;
    name: string;
    news?: Array<any>;
    constructor(id: number, name:string,news: Array<any> =[]) { 
        this.id = id;
        this.name = name;
        this.news = news;
    }
}
