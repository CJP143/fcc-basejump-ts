
// init project
var express = require('express');
var app = express();
var months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/*", function (request, response) {
  var chkdate=request.params[0];
  response.json(isDate(chkdate));
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function isDate(chkdate){
  //first check for date and then time stamp - is given in seconds not milliseconds
  //parse causes rollover for false dates eg 2017-02-31 gives 2017-03-02 as valid date
  //let go as example https://timestamp-ms.herokuapp.com has same problem
  var result={};
  var chk1=Date.parse(chkdate);
  if (!isNaN(chk1)) {
    var chk2=new Date(chk1);
    result.unix=chk1/1000;
    result.natural= months[chk2.getMonth()] + ' ' + chk2.getDate() + ', ' + chk2.getFullYear();
    return result;
  }else {
 
    if (isNaN(Number(chkdate))){
      result.unix=null;
      result.natural=null;
      return result;
    }
    var chk2= new Date(chkdate*1000)
    result.unix=Number(chkdate);
    result.natural= months[chk2.getMonth()] + ' ' + chk2.getDate() + ', ' + chk2.getFullYear();
 
    return result;
  }
}