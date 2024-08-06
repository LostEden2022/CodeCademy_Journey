let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push ("to","Program");
secretMessage.splice (7,1,"right");
//secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(6,5,"know");
console.log(secretMessage.join());

//Should print:
//Programming,is,not,about,what,you,know,it,is,about,what,you,can,figure,out.,-2015,,Chris,Pine,,Learn,to,Program
