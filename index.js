const express = require('express');
//init app
const port =4000;
const app =express();
app.get('/',(req,res)=>res.send('<h1>hello to the app</h1>'));
app.listen(port ,()=> console.log('the app is run at port ${port}'));