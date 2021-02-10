
const express = require('express');
const app = express();
const port = process.env.port||80

function kazi(req,res,next)
{

	if (req.url==='/user') 
	{
		res.send('userMiddleware')
	}

	next();
}

app.use(kazi);

app.get('/admin',(req,res)=>{

	console.log('hii');
	
	res.send('<h1>admin</h1>')
})


app.get('/user/:id',(req,res)=>{
	
	res.send('user ' + req.params.id)
})


app.get('/',(req,res)=>{

	res.send('<h1>hi</h1>')
})




app.get('*',(req,res)=>{

	res.send('<h1>404 Not found</h1>')
})



app.listen(port,()=>(console.log(`http://localhost:${port}`)));


