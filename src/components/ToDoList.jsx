import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import SearchTodos from "./SearchTodos";
import SortByToDoId from "./SortByToDoId";




function ToDoList(props) {
  const [fData, setFData] = useState();
  const [defaultList, setDefaultList] = useState([]);
  const [isSort, setIsSort] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setDefaultList(data.filter((data, index) => index < 4)));
  }, [defaultList])

  function sendUserDetail(id, userId, title) {
    props.userDetail(id, userId, title);
  }

  function handleFilterData(filterdata) {

    if (filterdata.length === 0) {
      setFData(false);
    } else {
      setFData(filterdata);
    }
  }




  return (
    <div className="col-lg-6">
      <SearchTodos getFilterData={handleFilterData} />
      <div>
        <table className="table  text-center " style={{ border: "2px solid black" }} >
          <thead>
            <tr >
              <SortByToDoId onClick={(sortType) => setIsSort(sortType)} />
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {(fData ? (isSort ? fData : fData.sort((a, b) => a - b).reverse()) : (isSort ? defaultList : defaultList.sort((a, b) => a - b).reverse())).map((listItem) => (
              <ToDo
                checkDetail={sendUserDetail}
                key={listItem.id}
                userId={listItem.userId}
                id={listItem.id}
                title={listItem.title.slice(0, 20)}
                status={listItem.completed ? "Incomplete" : "Completed"}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoList;
