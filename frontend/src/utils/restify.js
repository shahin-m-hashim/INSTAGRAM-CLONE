export default function restify(promise) {
  let result;
  let status = "pending";

  const suspender = promise
    .then((res) => {
      status = "success";
      result = res;
    })
    .catch((err) => {
      status = "error";
      result = err;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender; // Suspense fallback
      } else if (status === "error") {
        throw result; // ErrorBoundary fallback
      }
      return result; // Return the data when resolved
    },
  };
}

// example usage in component:

// import restify from "utils/restify";

// const fetchUsers = restify(
//   fetch("http://localhost:8080/users").then((res) => res.json())
// );

// export default function Users() {
//   const users = fetchUsers.read();

//   return (
//     <div>
//       <h1>Users</h1>
//       <div>
//         {users.length > 0 ? (
//           users.map((user) => <p key={user.id}>{user.username}</p>)
//         ) : (
//           <p>No users</p>
//         )}
//       </div>
//     </div>
//   );
// }
