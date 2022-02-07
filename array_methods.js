let users = [
    {
        name : "aplha",
        age: 24,

    },
    {
        name : "beta",
        age: 35,
        
    },
    {
        name : "gamma",
        age: 49,
        
    },
    {
        name : "delta",
        age: 54,
        
    },
    {
        name : "omicron",
        age: 66,
        
    }
]

let fruits = ["Apple", "Mango", "Orange", "Banana"];
let colors = ["red", "yellow", "pink", "green"];
let numArr = [ 28, 9, 55, 70, 2, 99, 18, 77, 66 , 55];

//A. LOOPERS
{

    // 1. forEach

        //    fruits.forEach((value , index) => {
        //         console.log(`${index} => ${value}`);
        //     })

    //2. Map

        // fruits = ["Apple", "Mango", "Orange", "Banana", "Apple"];
        // let element = fruits.map((value, index) => {
        //     return value + " is a fruit!";
        // })
        // console.log(element);

    // 3. filter

        // let element = users.filter((value, index) => {
        //     return value.age > 40
        // })
        // console.log(element);

    // 4. reduce

        // let num = [1,13,15,19];
        // let total = num.reduce((total, value) => {
        //     return total += value ;
        // })
        // console.log(total);

    //5. reduceRight

        // const numbers = [175, 50, 25];
        // function myFunc(total, num, index) {
        // console.log(index , total);
        // return total - num;
        // }
        // numbers.reduceRight(myFunc);

    //6. every
        
        // let element = users.every((value, index) => {
        //     return value.age >= 18
        // })
        // console.log("element =>", element);

    //7.  some
        // let num = [1,13,15,19];
        // let element = num.some((value, index) => {
        //     return value < 5 ;
        // })

        // console.log(element);
}

// B. SORTERS
{

    //8. sort

        // let element = numArr.sort((a , b) => {
        //     return b - a;
        // });
        // console.log(element);

        // let element = fruits.sort();
        // console.log(element);

    //9. reverse

        // let element = fruits.reverse();
        // console.log(fruits);
}

//C. SEARCHERS
{

    // 10 find

        // let element = users.find((value , index) => {
        // return value.name = "pi";
        // })
        // console.log(element);

    //11. includes

        // let element = fruits.includes("Orange")
        // console.log(element);

    //12. findIndex
        // let element_ = users.findIndex((value, index) => {
        //     return value.name === "omicron";
        // })
        // console.log(element_);

    //13. indexOf

        // let element = fruits.indexOf("Orange");
        // console.log(element);

    //14. lastIndeOf

        // let element = fruits.lastIndexOf("Apple");
        // console.log(element);
}

// D. MANIPULATORS
{

    //15. Splice
        // let element = fruits.splice(2, 1, "orange-deleted", "papaya");
        // console.log(element);
        // console.log(fruits);

    //15.a splice as POP
        //  let element = fruits.splice((fruits.length - 1),  1);
        //  console.log(element);
        //  console.log(fruits);

    //15.b splice as push
        // let element = fruits.splice(fruits.length , 0, "Avacado");
        // console.log(element);
        // console.log(fruits);

    // 15.c splice as shift
        // let element = fruits.splice(0 , 0, "Avacado");
        // console.log(element);
        // console.log(fruits);

    // 15.d splice as unshift
            // fruits = ["Apple", "Mango", "Orange", "Banana"];
            // let element = fruits.splice(0 , 1);
            // console.log(element);
            // console.log(fruits);

    //16. slice
        // let element = fruits.slice(1 ,3 )
        // console.log(element);
        // console.log(fruits);

    //17. concat();
        // let newArray = fruits.concat(colors);
        // console.log(newArray);
}

//E. STRINGLAND
{

    //18. join();
        // let stringFromArray2 = fruits.join('*****');
        // console.log(stringFromArray2);
        // console.log(fruits);

    //19. from
        // let element = Array.from("APPLE");
        // console.log(element);
}

//F.VALIDATORS

{
    //20.  isArray
        // let element = Array.isArray(fruits);
        // console.log(element);

        // let element1 = Array.isArray(users[0]);
        // console.log(element1);
}

//G. AVOIDABLE

{
    //21. pop();
        // let removedElement = fruits.pop();
        // console.log(removedElement);
        // console.log(fruits);

    //22. push();
        // let addedElement = fruits.push("Guava");
        // console.log(addedElement);
        // console.log(fruits);

    //23. shift()
        // let removedElement = fruits.shift();
        // console.log(removedElement);
        // console.log(fruits);

    //24. unshift()
        // let addedElement = fruits.unshift("avacado");
        // console.log(addedElement);
        // console.log(fruits);

    //25 toString
        // let string = fruits.toString();
        // console.log(string);

    //26 copyWithin
        // let element = fruits.copyWithin(0, 3 , 4);
        // console.log(element);
        // console.log(fruits);

    //27. entries
        // const f = fruits.entries();
        // for(let x of f){
        //     console.log(x)
        // }

    //28. fill
        // fruits.fill("fruits");
        // console.log(fruits);

    //29. keys
        // const keys = fruits.keys();
        // for(let x of keys){
        //     console.log(fruits[x])
        // }

    //30. valueOf
        // const newFruits = fruits.valueOf(fruits);
        // console.log(fruits);
        // console.log(newFruits);

    //31. delete
        // delete fruits[1];
        // console.log(fruits);
        // console.log(fruits.length);
        // console.log(fruits[1]);
}

// PROPERTIES

{
    //A. Changing element
            // fruits = ["Apple", "Mango", "Orange", "Banana"];
            // fruits[1] = 'watermelon';
            // console.log(fruits);

    //B. Getting Length
            // fruits = ["Apple", "Mango", "Orange", "Banana"];
            // console.log(fruits.length);
}












































