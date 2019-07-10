<html>
  <head>
    <style>
      body {
        background-color: #1d2126;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>Hello, World</h1>
    <input type="number" id="inputVal"/>
    <button type="submit" id="submitBtn">Submit!</button>
    <div id="returnText"></div>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script>
  
  
    var coinObj = {
      // 25: 'quarter',
      // 10: 'dime',
      // 5: 'nickel',
      // 1: 'penny'
      quarter: '25',
      dime: '10',
      nickel: '5',
      penny: '1',
    }
    
    function computeChange(changeAmt){ //curency
      
      var returnObj = {};
      
      Object.keys(coinObj).map(function(key, index) {
        returnObj[key] = Math.floor(changeAmt / coinObj[key]);
        changeAmt -= coinObj[key] * Math.floor(changeAmt / coinObj[key]);
      });
      
      //console.log('returnObj', returnObj)
      
      var readableChangeAmt = '';
      Object.keys(returnObj).map(function(key, index) {
        if (returnObj[key] > 1){
          readableChangeAmt += returnObj[key] + ' ' + key + 's, ';
        } else if (returnObj[key] > 0){
          readableChangeAmt += returnObj[key] + ' ' + key + ', ';
        }
      })

      console.log('readableChangeAmt', readableChangeAmt);
      
      $('#returnText').html(readableChangeAmt)
    }
    
    $('#submitBtn').click(function(){
      //console.log('submitBtn click'); 
      
      var inputVal = $('#inputVal').val();
      console.log('inputVal', inputVal);
      console.log('parseInt(inputVal)', parseInt(inputVal));
      console.log('is int?', Number.isInteger(parseInt(inputVal)))
      if (Number.isInteger(parseInt(inputVal))){
        computeChange(inputVal);
      } else {
        alert('invalid input');
      }
      
    });

    
    
    
    // computeChange(35); // 1 quarter, 1 dime
    // computeChange(37); // 1 quarter, 1 dime, 2 pennies
    // computeChange(3); // 3 pennies
    // computeChange(87); //3 quarters, 1 dime, 2 pennies
  
  </script>
  
  
</html>

<!--
  Example: 35 cents

  Input: 35
  Output: "1 quarter, 1 dime"
  Possible Inputs: 1-99
  Currency: USD or some other currency or bonus pts if it's flexible
-->