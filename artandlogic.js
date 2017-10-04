//converts int to special text

function convertint(intermediate){

  //add 8192 to raw value
  var intermediate = intermediate+8192;
   console.log("intermediate decimal is "+intermediate);

  // //intermediate decimal
  // var hexString = intermediate.toString(16);
  // console.log("intermediate hex " + hexString);

//  var intermediate_1 = intermediate >>> 7;
//  console.log("intermediate_1 upper decimal is "+intermediate_1);

//  //encoded upper byte
// var upperbyte = intermediate_1.toString(16);
//  console.log("upper byte " +upperbyte);

  //lower byte
 var intermediate_21 = intermediate;
 var intermediate_2 = (intermediate_21 &= 0x7F);
  var lowerbyte = intermediate_2.toString(16);
  console.log("lower byte " +lowerbyte);

   var intermediate_3 = intermediate_2 + ((intermediate &= 0xFF80)<<1);
 var encodedword = intermediate_3.toString(16);

  if(encodedword == 0){encodedword = "0000";}
  console.log("encoded word " +encodedword);

}

// convertint(0);
//convertint(-8192);
// convertint(8191);
// convertint(-4096);
// convertint(2048);
// convertint(6111);
// convertint(2628);






//converts text to integer

function convertbytes(hi,lo){
  yourNumber = parseInt(hexString, 16);
  console.log(text);
}







// convertbytes(40,00);
// convertbytes(00,00);
// convertbytes(7f,7f);
// convertbytes(50,00);
// convertbytes(0A,05);
// convertbytes(55,00);


// range will be from  14-bit range [-8192..+8191]
// return a 4 character


/*
The encoding process is as follows:
1. Add 8192 to the raw value, so its range is translated to [0..16383]
2. Pack that value into two bytes such that the most significant bit of each is cleared
Unencoded intermediate value (as a 16-bit integer):
00HHHHHH HLLLLLLL
Encoded value:
0HHHHHHH 0LLLLLLL
3. Format the two bytes as a single 4-character hexadecimal string and return it.

*/
