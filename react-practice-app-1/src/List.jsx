function List(props){

// fruits.sort();
// fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetic order
// fruits.sort((a,b)=> b.name.localeCompare(a.name)); //reverse Alphabetic order
// fruits.sort((a,b)=>a.calories - b.calories);//assending orders or numeric orders
// fruits.sort((a,b)=> b.calories - a.calories);//desending orders or reverse numeric orders


// Filtering list items
// const lowCalFruits = fruits.filter(localFruit => localFruit.calories < 100);
// const listItems = lowCalFruits.map(localFruit => <li key={localFruit.name}>{localFruit.name}: &nbsp; {localFruit.calories}</li>)
// const highCalFruits = fruits.filter(highcalFruit => highcalFruit.calories > 100);
// const listItems = highCalFruits.map(highcalFruit => <li key={highcalFruit.name}>{highcalFruit.name}: &nbsp; {highcalFruit.calories}</li>)
const itemList = props.items;
const category = props.category;
const listItems = itemList.map(item=><li key={item.name}>{item.name}: &nbsp;<b>{item.calories}</b></li>);
return (
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-item">{listItems}</ol>
    </>
);
}
export default List