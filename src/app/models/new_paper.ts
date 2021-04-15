
export class new_paper {
    id: number;
    name: string;
    image:String;
    description:String;
    detail:String;
    date:Number;
    newcateId:Number;
    newcate?:any;
    constructor(
        id: number,
        name:string,         
        image:String,
        description:String,
        detail:String,
        date:Number,
        newcateId:Number,
        newcate?:any
        ) { 
        this.id = id;
        this.name = name;
        this.image=image;
        this.description=description;
        this.detail=detail,
        this.date=date;
        this.newcateId=newcateId
        this. newcate=newcate
        
    }
}
// "id": 1,
//       "name": "SOMEWHERE IN TIME",
//       "image": "https://firebasestorage.googleapis.com/v0/b/angular-4ead9.appspot.com/o/Products%2F1618429591666?alt=media&token=59badada-90b1-4b9a-ae96-1d2cae453a73",
//       "newcateId": 1,
//       "description": "When Mary Lennox was sent to Manor to live with her uncle everybody said she was the most disagreeablelooking child ever seen. It was true, too. She had a little thin face and a little thin body, thin light hair and a sour expression. Her hair was yellow, and",
//       "date": 1618429591666