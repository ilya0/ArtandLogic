cleancodeartandlogic.js


//converts int to special text

function convertint(intermediate){
  var unencoded = intermediate;
  var intermediate = intermediate+8192;
  var intermediate_21 = intermediate;
  var intermediate_2 = (intermediate_21 &= 0x7F);
  var intermediate_3 = intermediate_2 + ((intermediate &= 0xFF80)<<1);
  var encodedword = intermediate_3.toString(16);
  console.log("Unencoded value: "+unencoded+ " Encoded hex " +encodedword);
}

//test case
// convertint(0);
// convertint(-8192);
// convertint(8191);
// convertint(2048);
// convertint(-4096);


//project case
convertint(6111)
convertint(340)
convertint(-2628)
convertint(-255)
convertint(7550)


//converts text to integer

function convertbytes(encodedinital){


  var intermediate = parseInt(encodedinital, 16);
  var intermediate_2 = intermediate;
  var intermediate_3 = intermediate;
  var intermediate_1 =  ((intermediate_2 &= 0x7F00) >>> 1) + (intermediate_3 &= 0x7F);
  intermediate_1 = intermediate_1 -8192;
  console.log("Encoded hex: "+encodedinital+" Unencoded Value: " +intermediate_1);
}


//test case
// convertbytes("4000");
// convertbytes("0000");
// convertbytes("7f7f");
// convertbytes("5000");
// convertbytes("0A05");
// convertbytes("5500");

// //project case
convertbytes("0A0A");
convertbytes("0029");
convertbytes("3F0F");
convertbytes("4400");
convertbytes("5e7F");
