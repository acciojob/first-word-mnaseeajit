function firstWord(s) {
  // your code here
	s = s.trimStart();
	let index = 0;
	for(let i = 0;i<s.length;i++)
		{
			if(s[i] == " "){
				index = i;
				return s.slice(0,index+1);
			}
		}   
	for(let i = 0;i<s.length;i++)
		{
			if(s[i] != " "){
				return s;
			}
		}
	return "";
	
}

// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
