// const fs = require('fs');
// const data = fs.readFileSync('./mayReadMe.txt',{encoding:'utf8'});
// console.log(data);
// console.log(data.toString());
// const fs = require('fs');
// fs.writeFileSync('./logs.txt',"10th april 2024:day 7",{encodinng:'utf8'});
// console.log(data);
// const fs = require('fs');
// console.log("start");
// const data = fs.readFileSync('./mayReadMe.txt',{encoding:'utf8'});
// console.log(data);
// console.log("end");
//promises in file system
// const fsPromises = require('fs/promises');
// console.log("start");
// const pr = fsPromises.readFile('./mayReadme.txt',{encoding:'utf8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("end");
//callback in file system
// const fs = require('fs');
// const data = fs.readFile('./mayReadme.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data);
// });
//http://localhost:1400/
// const http = require('http');
// const app = http.createServer((req,res)=>{
//     console.log('request recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html',
//     })
//     res.end('<h1>Yashodhan</h1><h1>tyagi</h1>');
//     // console.log();
// });
// app.listen(1400,()=>{
//     console.log('.................server started!......................')
// });
//mini-project
const http = require('http');
const fs =require('fs');
const data =fs.readFileSync('./data.json','utf8');
const dataObj =JSON.parse(data);
const product = dataObj.products;
// console.log(dataObj);
const htmlTemplate = `
<!DOCTYPE HTML>
<html>
<head> <style>
.product-card{
    max-width:500px;
    margin:20px auto;
    border:3px double black;
    border-radius:20px;
    padding:40px;
    background-color:grey;
    </style>
</head>
<body>
   products
</body>
</html>`
const cardTemplate=`
<div class='product-card'>
<h4>title</h4>
<p>__info__</p>
</div>
`
// const card1 = cardTemplate.replace('title',product[0].title)
// .replace('__info__',product[0].description);
// const card2 = cardTemplate.replace('title',product[1].title)
// .replace('__info__',product[1].description);
// const card3 = cardTemplate.replace('title',product[2].title)
// .replace('__info__',product[2].description);
// const allcards = card1+card2+card3;
const allCards= product.map((elem)=>{
    let newCard = cardTemplate;
    newCard=newCard.replace('title',elem.title);
    newCard=newCard.replace('__info__',elem.description);
 return newCard;
});
const page = htmlTemplate.replace('products',allcards);
const app = http.createServer((req,res)=>{
    console.log('request recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html',
    })
    res.end(page);
    // console.log();
});
app.listen(1400,()=>{
    console.log('.................server started!......................')
});
