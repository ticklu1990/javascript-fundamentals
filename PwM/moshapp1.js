//const,let:

const person ={
    name:'Mosh',
    walk:function(){},
    talk:function(){}
};

//person['name']='John';
const targetMember='name';

person[targetMember.value]='John Wick';

//person['name']='John';
//console.log(person);

//{name: "John", walk: ƒ, talk: ƒ}


//person[targetMember.value]='John Wick';
//console.log(person);

//{name: "Mosh", undefined: "John Wick", walk: ƒ, talk: ƒ}

