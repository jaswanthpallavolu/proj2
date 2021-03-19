const express =require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('user_page',{ data :{
        ref:false,
        }
    });
})

app.post('/saved',(req,res)=>{
    const a = req.body
    console.log(a)
    return res.render('user_page',{data : {
                ref : true,
                }
            })
})
const port = process.env.PORT || 3000;
app.listen( port,()=>console.log("running..."))