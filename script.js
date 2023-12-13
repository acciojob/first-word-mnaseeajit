// function firstWord(s) {
//   // your code here
// 	s = s.trimStart();
// 	let index = 0;
// 	for(let i = 0;i<s.length;i++)
// 		{
// 			if(s[i] == " "){
// 				index = i;
// 				return s.slice(0,index+1);
// 			}
// 		}   
// 	for(let i = 0;i<s.length;i++)
// 		{
// 			if(s[i] != " "){
// 				return s;
// 			}
// 		}
// 	return "";
	
// }

// // Do not change the code below 

// const s = prompt("Enter String:");
// alert(firstWord(s));
function firstWord(s) {
    // Trim spaces from the start of the string
    s = s.trimStart();

    // Find the first space in the trimmed string
    const index = s.indexOf(" ");

    // If a space is found, return the substring up to that space
    if (index !== -1) {
        return s.slice(0, index);
    }

    // If no space is found, return the entire trimmed string
    return s;  
}

// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
