import { Router} from "https://deno.land/x/oak/mod.ts";
import { Book } from './types.ts';

const router = new Router();

let books : Book[] = [
    {
        id: "1",
        title: "Sofware Future",
        author: "asdf"
    },
    {
        id: "2",
        title: "Sofware Future2",
        author: "asdf2"
    },
    {
        id: "3",
        title: "Sofware Future3",
        author: "asdf3"
    }
]


router.get('/',(context) => {
    context.response.body = "Hello world";
})
    .get("/books", (context)=>{
        context.response.body = books;
    })
    .post("/books", async (context)=>{
        const body = await context.request.body();
        
        //if !info
        if(!context.request.hasBody){
            context.response.status = 400;
            context.response.body = "None Data";
        }else{
            const book: Book = body.value;
            books.push(book)
            context.response.status = 201
            context.response.body = body
            console.log(book)
        }
    })
    .get("/book/:id", async(context)=>{
        const book: Book | undefined = books.find((b)=> b.id === context.params.id);
        
        if (book){
            context.response.body = book;
            context.response.status = 200
        }else {
            context.response.body = "책을 찾지 못했습니다."
            context.response.status = 404
        }
    })

export default router;