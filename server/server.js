const path = require('path');
const publicPath =path.join(__dirname, '../public');
var express =require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.listen(PORT,function(){
          console.log('express server started');
          
})

