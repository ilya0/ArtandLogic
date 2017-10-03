
//converts int to special text

function convertint(integer){
  //add 8192 to raw value
  integer = integer+8182
  console.log("intermediate decimal is"+integer);
}

//converts text to integer
function converttext(text){
  console.log(text);
}

convertinit("test");
converttext("test");

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
