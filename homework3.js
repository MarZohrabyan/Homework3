const sum= function(a,b,c){
	return a+b+c;
}
const b= function(){
	return 75;
}
const string= function(Joe,Jonas){
	console.log(Joe + Jonas);
}
  c('Maro',"Zohrabyan");
const myfav= function(a,b,c){
	let max="";
	if(a.lenght <= b.lenght){
		max=b
	}else{
		max=a
	}
	if(c.lengh > max.lenght){
		max=c
	}
	return max;
}
const comp= function(a,b){
	if(a === b){
		return 0;
	}else if(a>b){
		return 1;
	}else{
		return -1;
	}
}
const multiply= function(a,b){
  
    return a*b;
  }
const div= function(c,d){
     return c/d;
   };
const triangleArea= function(base,height){
  return div(multiply(base,height),2);
  }
const numLength= function(a){
    a=a+""
    return (a).length;
  }
const my= function(a,b,c){
    if((a.length+b.length)>c){
      return 1;
    }else{
      return -1;
     }
  }
const runStuff= function(num1,num2,string){
    if(string === "rectangle"){
      return num1*num2;
    } else if(string === "triangle"){
      return num1*num2/2;
    }else{
      return -1;
    } 
  }