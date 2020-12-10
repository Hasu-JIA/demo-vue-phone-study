let Koa = require("koa");
let app = new Koa();
let fs = require('fs')
let router = require('koa-router')();
// let router = new Router;
const koaBody = require('koa-body');
let cors = require('koa-cors')
// app.use(cors())
// app.use(koaBody)
// app.use(ctx => {
//   ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
// });

app.use(cors({
  origin: function (ctx) {
    return "*"; // 允许来自所有域名请求
    if (ctx.url === '/test') {
      return "*"; // 允许来自所有域名请求
    }

    //这样就能只允许 http://localhost:8080 这个域名的请求了
    // return 'http://localhost:8080';
  },
  // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  // maxAge: 5,
  // credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
//模拟轮播图接口
let sliders = require('./slider');
let books = [
  {
    "bookCover": "https://images-na.ssl-images-amazon.com/images/I/41qzgSLFQwL._SX395_BO1,204,203,200_.jpg",
    "bookName": "Vue.js入門 基礎から実践アプリケーション開発まで",
    "bookInfo": "Vue.jsを初歩から実践まで徹底的に解説。使いやすくかつ、。...",
    "bookPrice": 19.99,
    "bookId": 1
  },
  {
    "bookCover": "https://images-fe.ssl-images-amazon.com/images/I/81KMZ8IzKSL._AC_UL160_.jpg",
    "bookName": "基礎から学ぶ Vue.js (日本語) 単行本",
    "bookInfo": "フロントエンドを取り巻く技術の発展によって、フロントエンドの役割は増え....",
    "bookPrice": 29.99,
    "bookId": 2
  },
  {
    "bookCover": "https://images-na.ssl-images-amazon.com/images/I/514wGTjRziL._SX390_BO1,204,203,200_.jpg",
    "bookName": "これからはじめるVue.js実践入門 (日本語) 単行本",
    "bookInfo": "いま学んでおきたいJavaScriptフレームワーク「Vue.js」のエッセンスを一冊に詰め込みました!...",
    "bookPrice": 39.99,
    "bookId": 3
  },
  {
    "bookCover": "https://m.media-amazon.com/images/I/51eFKoSgx5L.jpg",
    "bookName": "Vue.js&Nuxt.js超入門",
    "bookInfo": "いま、Web開発の現場では「サーバ側の処理をするバックエンドよりも...",
    "bookPrice": 19.99,
    "bookId": 4
  },
  {
    "bookCover": "https://images-na.ssl-images-amazon.com/images/I/51vjj+osAgL._SX258_BO1,204,203,200_.jpg",
    "bookName": "プログラミングTypeScript ―スケールする(日本語) 単行本",
    "bookInfo": "プログラミング言語TypeScriptの解説書。TypeScriptの型に関する基礎的な内容からその応用、",
    "bookPrice": 49,
    "bookId": 5
  },
  {
    "bookCover": "https://images-na.ssl-images-amazon.com/images/I/41qzgSLFQwL._SX395_BO1,204,203,200_.jpg",
    "bookName": "Vue.js入門 基礎から実践アプリケーション開発まで",
    "bookInfo": "Vue.jsを初歩から実践まで徹底的に解説。使いやすくかつ、。...",
    "bookPrice": 19.99,
    "bookId": 6
  },
  {
    "bookCover": "https://images-fe.ssl-images-amazon.com/images/I/81KMZ8IzKSL._AC_UL160_.jpg",
    "bookName": "基礎から学ぶ Vue.js (日本語) 単行本",
    "bookInfo": "フロントエンドを取り巻く技術の発展によって、フロントエンドの役割は増え....",
    "bookPrice": 29.99,
    "bookId": 7
  },
  {
    "bookCover": "https://images-na.ssl-images-amazon.com/images/I/514wGTjRziL._SX390_BO1,204,203,200_.jpg",
    "bookName": "これからはじめるVue.js実践入門 (日本語) 単行本",
    "bookInfo": "いま学んでおきたいJavaScriptフレームワーク「Vue.js」のエッセンスを一冊に詰め込みました!...",
    "bookPrice": 39.99,
    "bookId": 8
  },
  {
    "bookCover": "https://m.media-amazon.com/images/I/51eFKoSgx5L.jpg",
    "bookName": "Vue.js&Nuxt.js超入門",
    "bookInfo": "いま、Web開発の現場では「サーバ側の処理をするバックエンドよりも...",
    "bookPrice": 19.99,
    "bookId": 9
  },
  {
    "bookCover": "https://images-na.ssl-images-amazon.com/images/I/51vjj+osAgL._SX258_BO1,204,203,200_.jpg",
    "bookName": "プログラミングTypeScript ―スケールする(日本語) 単行本",
    "bookInfo": "プログラミング言語TypeScriptの解説書。TypeScriptの型に関する基礎的な内容からその応用、",
    "bookPrice": 49,
    "bookId": 10
  },

];
// function read(cb){
//   fs.readFile('./booksbak.json','utf8',function(err,data){

//     if(err || data.length==0){
//       console.log(err)
//       cb([])
//     }else{
//       console.log(2)
//       cb(JSON.parse(data))
//     }
//   })
// }
// function write(data,cb){
//   fs.writeFile('./book.json',JSON.stringify(data),cb)
// }
// read(function(books){
// console.log(books)
// });
// write(booksbak,function(){
//   console.log('write ok')
// })
// read(function(books){
//   console.log('read ok')
// console.log(books)
// });
router.get('/api/getSliders', ctx => {
  // console.log(ctx.req.method);
  ctx.body = sliders
})
router.get('/api/getHotBooks', koaBody(), ctx => {
  ctx.body = books;
})
router.get('/api/getBookList/:offset', koaBody(), ctx => {
  let { offset } = ctx.params;
  let pageSize = 5;
  //默认有更多
  let hasMore = true;
  //每次偏移量 在偏移的基础上增加5条
  let data = books.reverse().slice(offset, offset + pageSize) || 0;

  if (books.length <= offset + pageSize) {
    hasMore = false;
  }
  ctx.body = JSON.stringify({ hasMore, data });
})
router.delete('/api/removeBook/:id', ctx => {
  let id = ctx.params.id
  books = books.filter(item => item.bookId !== id);
  ctx.body = 'deleted ok'
})
router.get('/api/getDetail/:id', ctx => {
  //如果没找到，则是undefind
  let id = ctx.params.id;
  book = books.find(book => book.bookId == id);
  if (!book) book = {};
  ctx.body = book;
})
router.put('/api/updateBook/:id', koaBody(), ctx => {
  // ctx.body = JSON.stringify(ctx.request.body);
  console.log("+++++")
  console.log(JSON.stringify(ctx.request.body))
  console.log("+++++")
  console.log('ctx.id = ')
  console.log(ctx.params.id)

  let reqBooks = JSON.stringify(ctx.request.body)
  books = books.map(item => {
    //找到id相同的那一本书，返回更改的数据
    if (item.bookId === ctx.params.id) {
      return reqBooks
    }
    //其他书正常返回
    return item
  })
  ctx.body = book;
})
router.post('/api/addBook/:id', koaBody(), ctx => {
  console.log(JSON.stringify(ctx.request.body))
  let reqBooks = JSON.stringify(ctx.request.body)
  books = books.reduce((acc, cur,index,item) => {
    reqBooks.bookId=
    cur = reqBooks;
    return [...acc, { ...cur }]
  }, [])
  ctx.body = books;
})

// var obj = { a: 'a', b: 'b'};
// var obj2 = {...obj, c: 'c'}; //{ a: 'a', b: 'b', c: 'c'}
// var ary = [1,2,3];
// var ary2 = [3,4,5];
// var ary3 = [...ary2, 6,6,6];
// var ary3 = ary2;
// console.log([...ary, ...ary2]); //[1,2,3,4,5]


//模拟下拉刷新接口
// let lessonList = require('./lessonList')
// router.get('/api/getLessons/:type/:limit/:offset',ctx=>{
//     console.log(ctx.params.type)
//     console.log(ctx.params.limit)
//     console.log(ctx.params.offset)
//     ctx.body = lessonList

// })

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)