import React, { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';


function SearchTodos(props) {

  const [inputText, setInputText] = useState('');
  const [filterData, setFilterData] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const status = (inputText.toLowerCase() === "completed" ? false : (inputText.toLowerCase() === "incomplete" ? true : "null"));
        const vr = (data.filter((item, index) => {
          return (item.completed === status || item.title === inputText || item.userId === parseInt(inputText))
        }));
        setFilterData(vr);
      });
  }, [filterData]);


  function handleChange(event) {
    const { name, value } = event.target;
    setInputText(value);
  };

  if (filterData) {
    props.getFilterData(filterData);
  }




  return (
    <div className="navbar">
      <th>Todos</th>
      <input
        onChange={handleChange}
        className="ml-auto px-2"
        type="search"
        value={filterData}
        placeholder="🔍Search..."
        name="searchItem"
        value={inputText}
        id="searchBar"
      />
    </div>
  );
}

export default SearchTodos;
