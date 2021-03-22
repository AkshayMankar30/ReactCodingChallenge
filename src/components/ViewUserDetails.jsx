import React from "react";

function ViewUserDetails(props) {
  // console.log(props);

  return (
    <div className="col-lg-5 offset-1 ">
      <div className=" font-weight-bold mt-5">User Detail</div>
      <div style={{ border: "1px solid black" }}>
        <div className="row">
          <div className="col-lg-10">
            <table className="table borderless ">
              <tbody>
                <tr >
                  <td>ToDo ID</td>
                  <td>{props.id}</td>
                </tr>

                <tr>
                  <td>ToDo Title</td>
                  <td>{props.title}</td>
                </tr>
                <tr>
                  <td>User ID</td>
                  <td>{props.userId}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{props.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{props.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUserDetails;
