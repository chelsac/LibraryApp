const express=require('express');
const cors=require('cors');
const bookData=require('./model/bookdata');
const userData=require('./model/userdata');

const app=new express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/addbook',function(req,res){
var item={
    title:req.body.title,
    author:req.body.author,
    description:req.body.description,
    image:req.body.image
}
var data=bookData(item);
data.save();
bookData.find().then(function(data){
    res.send(data);
})
})

app.post('/adduser',function(req,res){
  var item={
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
  }
  var data=userData(item);
  data.save();
  userData.find().then(function(data){
      res.send(data);
  })
  })


app.get('/books', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

    bookData.find()
    .then(function(books){
      res.send(books);
    })
  })
  app.delete('/delete/:id',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    console.log(req.params.id);
    bookData.findByIdAndDelete(req.params.id).then(()=>{
      console.log('success')
      res.send();
  })
     
    })

    app.put('/edit',function(req,res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    
        id=req.body.book._id;
        title=req.body.book.title;
        author=req.body.book.author;
        image=req.body.book.image;
        description=req.body.book.description;
        bookData.findByIdAndUpdate({"_id":id},
                                    {$set:{"title":title,
                                            "author":author,
                                            "image":image,
                                            "description":description
                                           }})
          .then(function(){
            res.send();
          })
    
    });

    app.get('/:id', function(req,res){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
  
  
      const id=req.params.id;
      bookData.findOne({"_id":id}).then((_book)=>{
        res.send(_book);
      })
    
    })


app.listen(3000,function(){
    console.log("server is running at "+3000);
});


