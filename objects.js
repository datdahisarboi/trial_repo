// {} is an object boi!!! --> just assign it to a variable 

let tony = {
    name : "tony", 
    lastName : "Stark",
    friends : ["Steve" , "Bruce" , "Peter"],
    isAvenger : 45,
    abc : null,
    pqr : undefined,
    age: 44,
    address :  {
        name : "NewYork",
        city : "Long Island",
    },
    saysHi: function fn()
    {
        console.log("Ironman says Hi !!!");
        return "Part of Journey is the End"
    }
}

// method 1 
console.log(tony);
console.log(tony.address.name);
console.log(tony.saysHi);
console.log(tony.address.name);

// method 2 --> useful when you dont kow which key's value is being asked
console.log(tony["address"]);
console.log(tony["address"]["city"]);
console.log(tony["address"]["name"]);
console.log(tony["saysHi"]);    // will return function reference 
console.log(tony["saysHi()"]);  // invoke / call the function defined inside the object 


// get all keys 

let karr = Object.keys(tony);
console.log(karr);
for(let k in tony){
    console.log(k);
    // console.log(tony[k]);
}


