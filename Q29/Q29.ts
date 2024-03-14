// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favoriteFruits: string []=["banana","cherry", "mango","Apple"]
if(favoriteFruits.includes("Banana")){
console.log('you really like bananas!')
}
if(favoriteFruits.includes("cherry")){
    console.log('you really like cherry!')
    }
    if(favoriteFruits.includes("peach")){
        console.log('you really like peach!')
    } else{
        console.log ("mango is not your favorite fruit")
    }
    if(favoriteFruits.includes("Grapes")){
        console.log("you really like Grapes!")
    }
    if(favoriteFruits.includes("Apple")){
        console.log("you really like Apples!")

    }
    else{
        console.log("strawberry is not my favorite list")
    }