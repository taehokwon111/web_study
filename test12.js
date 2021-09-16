var express = require('express');
var app = express();
var PORT = 3000;
  
app.set('title', '자세히 보아야 이쁘다');
app.set('test', '오래 보아야 사랑스럽다.');
app.set('test2', '너만빼고');
app.set('test3', 'fuck..');

  
app.get('/', (req, res) => {
	res.sendFile(__dirname+"index_test.html");
  

})
  
app.get('/1', (req, res) => {
    res.send(app.get('test'));

  })
  
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 