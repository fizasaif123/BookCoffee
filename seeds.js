const mongoose = require('mongoose');
const Book=require("./models/books");
const Article=require("./models/articles");

mongoose.connect('mongodb://127.0.0.1/BookCoffee') 
.then(()=>{   
    console.log("mongo is connected")
})
.catch((e)=>{
    console.log("mongo error")
    console.log(e)
})

const seedBooks = [
    {
    name: 'Will',
    price: 1.00,
    category: 'thriller',
    author:'Will Smith and Mark Manson',
    year:2012
    },
    {
        name: 'My Joys and Sorrows- as a Mother of a Special Child',
        price: 2.00,
        category: 'thriller',
        author:'Krishna Saksena',
        year:2019,
        comments:'I love this book!'
},

{
    name: 'its a wonderful life',
    price: 2.00,
    category: 'romance',
    author:'ruksin bond',
    year:2019,
    comments:'I hate this book!'
},
{
    name: 'Rich dad poor dad',
    price: 8.00,
    category: 'fantasy',
    author:'robert',
    year:2000,
    comments:'this book is great!'
},

{
    name: 'Fiercely Female',
    price: 5.00,
    category: 'romance',
    author:'Sundeep',
    year:2014,
    comments:'Amazing Book!'
},

]


const seedArticle = [
    {
    name: 'Highlights High Five',
    price: 1.00,
    category: 'business',
    author:'Nadia Hussain',
    year:2012
    },
    {
        name: 'My Joys and Sorrows- as a Mother of a Special Child',
        price: 2.00,
        category: 'cooking',
        author:'Bachi Karkaria.',
        year:2019,
        comments:'I love this article!'
},

{
    name: 'its a wonderful life',
    price: 2.00,
    category: 'fashion',
    author:'ruksin bond',
    year:2019,
    comments:'I hate this article!'
},
{
    name: 'Rich dad poor dad',
    price: 8.00,
    category: 'fashion',
    author:'Wiiliam F',
    year:2000,
    comments:'this article is great!'
},

{
    name: 'Fiercely Female',
    price: 5.00,
    category: 'cooking',
    author:'Nadia hussain',
    year:2014,
    comments:'Amazing Article!'
},


]



Book.insertMany(seedBooks)
.then(data=>{
    console.log('data inserted')
    console.log(data)
})
.catch(e=>{
    console.log('Insertion error')
    console.log(e)
})

Article.insertMany(seedArticle)
.then(data=>{
    console.log('Article data inserted')
    console.log(data)
})
.catch(e=>{
    console.log(' Article Insertion error')
    console.log(e)
})