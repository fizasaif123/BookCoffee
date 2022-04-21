const express=require("express");
const app=express();
const path=require("path");
const mongoose = require('mongoose');
const Book=require("./models/books");
const Article=require("./models/articles");
const methodoverride = require( 'method-override');


mongoose.connect('mongodb://127.0.0.1/BookCoffee') 
.then(()=>{   
    console.log("mongo is connected")
})
.catch((e)=>{
    console.log("mongo error")
    console.log(e)
})

const category= ['fantasy','thriller','romance'];
const articlecategory=['fashion','cooking','business'];

app.listen(8080,()=>{
    console.log("listening on port 8080!");

})
app.set('view engine', 'ejs')
app.set ('views', path.join(__dirname, 'views')) //absolute
app.use(express.urlencoded ({ extended: true }))
app.use(methodoverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));


app.get("/",(req,res)=>{
    res.render("books/home");

})

app.get("/books",async (req,res)=>{
    const {category}=req.query;
    if(category)
    {
        const book= await Book.find({category});
         res.render("books/index",{book,category});
    
    }
    else{
        const book= await Book.find({});
        res.render("books/index",{book,category:"Our Most Popular Books.."});
    
    }
  
})


app.get("/books/new",async(req,res)=>{
    res.render("books/new",{category})
})

app.post("/books",async(req,res)=>{
    const book=new Book(req.body);
    await book.save();
    res.redirect("/books")

})



app.get("/books/:id",async(req,res)=>{
    const {id}=req.params;
    const book= await Book.findById(id);
    res.render("books/show",{book});

})

 app.get("/books/:id/edit",async(req,res)=>{
    const {id}=req.params;
    const book= await Book.findById(id);
   res.render("books/edit",{book,category});
 })

app.put("/books/:id",async(req,res)=>{
    const {id}=req.params;
    const updates=await Book.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect("/books");
})




app.delete("/books/:id",async(req,res)=>{
    const{id}=req.params;
    const deleted= await Book.findByIdAndDelete(id);
    res.redirect("/books");
})

// ARTICLES SECTION

app.get("/articles",async(req,res)=>{
   const {category} =req.query;
   if(category)
    {
        const article=await Article.find({category});
        console.log(article);
        res.render("articles/index",{article,category});

    }
else
{
    const article=await Article.find({});
    res.render("articles/index",{article,category:"Our Most Popular Articles..."});
}


})

app.get("/articles/new",(req,res)=>{
    res.render("articles/new",{articlecategory});
})



app.post("/articles",async(req,res)=>{
    const article= new Article(req.body);
    await article.save();
    res.redirect("/articles");
   

})
app.get("/articles/:id",async(req,res)=>{
    const {id}=req.params;
    const article=await Article.findById(id);
    res.render("articles/show",{article});
})


app.get("/articles/:id/edit",async(req,res)=>{
    const {id}=req.params;
    const article=await Article.findById(id);
    res.render("articles/edit",{article,articlecategory})
})

app.put("/articles/:id",async(req,res)=>{

    const {id}=req.params;
    const article=await Article.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect("/articles");
 

})

app.delete("/articles/:id",async(req,res)=>{
    const {id}=req.params;
    const del_art=await Article.findByIdAndDelete(id);
    res.redirect("/articles");
})