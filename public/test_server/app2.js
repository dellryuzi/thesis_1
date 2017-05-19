var fs = require('fs');

fs.unlink('./stuff/writeMe.txt', function(){ //unlink delete file
  fs.rmdir('stuff'); //delete dir
});

/*
fs.mkdir('stuff',function (){
  fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('./stuff/writeMe.txt',data);
  });
});
*/
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');
