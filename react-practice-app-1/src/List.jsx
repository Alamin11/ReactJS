function List(){
const fruits = [
    {name: "Apple", calories: 95}, 
    {name: "Orange", calories: 45}, 
    {name: "Banana", calories:105}, 
    {name: "Coconut", calories: 159}, 
    {name: "Pineapple", calories: 37}];
// fruits.sort();
// fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetic order
// fruits.sort((a,b)=> b.name.localeCompare(a.name)); //reverse Alphabetic order
// fruits.sort((a,b)=>a.calories - b.calories);//assending orders or numeric orders
// fruits.sort((a,b)=> b.calories - a.calories);//desending orders or reverse numeric orders

// const listItems = fruits.map(fruit=><li key={fruit.name}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);
// Filtering list items
const lowCalFruits = fruits.filter(localFruit => localFruit.calories < 100);
const listItems = lowCalFruits.map(localFruit => <li key={localFruit.name}>{localFruit.name}: &nbsp; {localFruit.calories}</li>)
return (<ol>{listItems}</ol>);
}
export default List