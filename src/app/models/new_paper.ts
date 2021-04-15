
export class new_paper {
    id: number;
    name: string;
    title:String;
    content:String;
    date:String;
    id_cate_new:Number

    constructor(
        id: number,
        name:string,         
        title:String,
        content:String,
        date:String,
        id_cate_new:Number
        ) { 
        this.id = id;
        this.name = name;
        this.title=title;
        this.content=content;
        this.date=date;
        this.id_cate_new=id_cate_new
        
    }
}
