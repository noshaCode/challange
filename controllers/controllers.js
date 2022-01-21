const    Feed   = require("../models/feed")

const redirectPage = (req, res)=> {
    res.redirect('/feed')
}

const  allFeeds  =(req,res)=>{
    Feed.find()
    .then((myList)=>{
   
       res.render("index", {result : myList});
   })
   .catch((err)=>{
       console.log(err);
   }) 
    
}

const createFeed =(req,res)=>{
    const body = req.body
    const newFeed= new Feed({
        name:body.name,
        message:body.message,
    });

    newFeed.save()
    .then((result)=>{
        res.redirect("/feed");
    })
    .catch((err)=>{
        console.log(err);
        res.redirect("/feed");
    
    })
}


const readFeed = (req, res) => {
    const id = req.params.id;
  
   Feed.findById(id)
    .then((result)=>{
        if (result){
            res.render("readFeed", {result});
        } else {
            res.redirect('/feed/:id')
        }
        
    })
    .catch((err)=>{
        console.log(err);
    }) 
}


const editForm = (req, res) => {
    const id = req.params.id;
   Feed.findById(id)
    .then((result)=>{
        res.render("editFeed", {result});
    })
    .catch((err)=>{
        console.log(err);
    }) 
   
}


const deleteFeed =(req,res)=>{
    Feed.findByIdAndDelete(req.params.id)
    .then((result)=> {
        res.redirect(`/feed`);
    })
    .catch((error)=> {
        console.log('error deleting, feed', error)
        res.redirect('/feed')
    })
    
}
    
const updateFeed= (req, res) => {
    const body = req.body
    const id = req.params.id;

    Feed.findByIdAndUpdate(id, body)
    .then((result)=> {
        res.redirect(`/feed/${id}`);
    })
    .catch((error)=> {
        console.log('error saving article', error)
        res.redirect('/')
    })
}
    






module.exports = {allFeeds,createFeed, redirectPage,deleteFeed,readFeed ,editForm,updateFeed}