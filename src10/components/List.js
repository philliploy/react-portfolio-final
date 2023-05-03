import React from 'react';
/*
props={
 items:groceries 
}

*/


function List(props) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.items.map((grocery) => {
        return (
          // TODO: Your code here
        <li key={ grocery.id} > {grocery.id *2} - {grocery.name} - {grocery.purchased.toString()}  </li>
        );
      })}
    </ul>
  );
}

export default List;
