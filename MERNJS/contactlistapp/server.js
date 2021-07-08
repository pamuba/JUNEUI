var express = require("express")
var mongojs = require("mongojs")
var db = mongojs('mydb', ['contactlist'])

var app = express()
app.use(express.json())
app.use(express.static(__dirname+"/public"));

app.get('/contactlist', function(req, res){
    console.log("Server received the call")

    db.contactlist.find(function(err, docs){
        if(err == null)
            res.json(docs);
        else
            console.log("Error retrieving data")
    })
    
});

app.post('/contactlist', function(req, res){
    console.log(req.body)
    db.contactlist.insert(req.body, function(err, doc){
        if(err == null)
            res.json(doc);
        else
            console.log("Error retrieving data")
    })
})

app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
    if(err == null)
        res.json(doc);
    else
        console.log("Error retrieving data")
    })
})

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
    if(err == null)
    {
        console.log(doc);
        res.json(doc);
    }
    else
        console.log("Error retrieving data")
    })
})

app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
        update:{$set:{name:req.body.name, email:req.body.email, number:req.body.number}},
        new: true}, function(err, doc){
            res.json(doc)
        }
    )

})
app.listen(3000)
console.log("Server running @3000")