import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ViewUserDetails from "./ViewUserDetails";



function App() {
  const [userInfo, setUsersList] = useState("");
  const [todoInfo, setTodoInfo] = useState();


  function handleUserDetail(id, userId, title) {

    const userTitle_Id = {
      title: title,
      id: id
    };

    setTodoInfo(userTitle_Id);
    const url = "https://jsonplaceholder.typicode.com/users/" + userId;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsersList(data);
      });

    setTimeout(function () { setUsersList('') }, 3000);
  }




  return (
    <div>
      <div className="row">
        <ToDoList userDetail={handleUserDetail} />
        {(userInfo && (
          <ViewUserDetails
            key={userInfo.id}
            userId={userInfo.id}
            id={todoInfo.id}
            title={todoInfo.title}
            name={userInfo.name}
            email={userInfo.email}
          />)
        )}
      </div>
    </div>
  );
}

export default App;
