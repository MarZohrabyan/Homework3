const a= function(a,b,c){
	return a+b+c;
}
  console.log(a(5,48,106));
const b= function(){
	return 75;
}
  console.log(b());
const c= function(Joe,Jonas){
	console.log(Joe + Jonas);
}
  c("Maro"," Zohrabyan");
const d= function(a,b,c){
	let max="";
	if(a.lenght <= b.lenght){
		max=b
	}else{
		max=a
	}
	if(c.lengh > max.lenght){
		max=c
	}
	return max
}
   console.log(d("Happy","Little","Pill"));
const e= function(a,b){
	if(a === b){
		return 0;
	}else if(a>b){
		return 1;
	}else{
		return -1;
	}
}
   console.log(e(456,12));
const f= function(a,b){
	return a*b;
}
  console.log(f(12,11));
const g= function(c,d){
	return c/d;
}
   console.log(g(125,5));
const triangleArea= function(base,height){
	return base*height/2
}
   console.log(triangleArea(14,11));
const numLength= function(a){
    a=a+""
    return (a).length
  }
    console.log(numLength(14091997));
const my= function(a,b,c){
    if((a.length+b.length)>c){
      return 1
    }else{
      return -1
     }
  }
    console.log(my("Misht","Misht",9));
  const runStuff= function(num1,num2,string){
    if(string === "rectangle"){
      return num1*num2
    } else if(string === "triangle"){
      return num1*num2/2
    }else{
      return -1
    } 
  }
   console.log (runStuff(15,2,"yay"));