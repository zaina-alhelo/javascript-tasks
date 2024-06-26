//Task 1

// let container = document.getElementById("container");
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {

// let tem = "";
//       data.forEach((element) => {
//           tem += `<h2>id :${element.id}</h2>
//           <p>Title: ${element.title}</p>
//           <p>Body :${element.body}</p>`
//       }
//       );
//       container.innerHTML = tem;

//   })
//   .catch((error) => {
//     console.error("Error:",error);
//   });

//Task 2

// let container = document.getElementById("container");
// fetch("https://jsonplaceholder.typicode.com/comments?postId=27").then(res => res.json()).then((data) => {
//     console.log(data)
//     let tem=""
//     data.forEach(element => {
//         tem += `<h4>Name: ${element.name}</h4>
//         <div>Email : ${element.email}</div>
//         <p>Body : ${element.body}</p>`
//     });
//     container.innerHTML = tem;
// })  .catch((error) => {
//     console.error("Error:",error);
//   });

//Task 3

// let container = document.getElementById("container");
// fetch("https://jsonplaceholder.typicode.com/albums?userId=1 ")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let tem = "";
//     data.forEach((element) => {
//       tem += `<h4>Title: ${element.title}</h4>`;
//     });
//     container.innerHTML = tem;
//   })  .catch((error) => {
//     console.error("Error:",error);
//   });

//Task 4

// let container = document.getElementById("container");
// fetch("https://jsonplaceholder.typicode.com/photos?albumId=2 ")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let tem = "";
//     data.forEach((element) => {
//         tem += `<h4>Title: ${element.title}</h4>
//         <div>ThumbnailUrl: ${element.thumbnailUrl}</div>
//       <img src="${element.url}">`;
//     });
//     container.innerHTML = tem;
//   })  .catch((error) => {
//     console.error("Error:",error);
//   });

//Task 5

// let container = document.getElementById("container");
// fetch("https://jsonplaceholder.typicode.com/todos ")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let tem = "";
//     data.forEach((element) => {
//       if (element.completed === true) {
//         tem += `<h4>Title : ${element.title}</h4>

//       <input type="checkbox" id="check">`;
//       } else {
//         tem += `<h4>Title : ${element.title}</h4>

//       <input type="checkbox" id="check" checked>`;
//       }
//     });
//     container.innerHTML = tem;
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//Task 6

// let container = document.getElementById("container");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let tem = "";
//     data.forEach((element) => {
//       tem += `<h3>Name : ${element.name}</h3>
//         <h4>User Name : ${element.username}</h4>
//         <p>Email : ${element.email}</p>`;
//       let address = element.address;
//       tem += `<p>Address:</p>
//               <p>Street: ${address.street}</p>
//               <p>Suite: ${address.suite}</p>
//               <p>City: ${address.city}</p>
//               <p>Zipcode: ${address.zipcode}</p>`;
//     });
//     container.innerHTML = tem;
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });



//Task 7


// let postsContainer = document.getElementById("posts");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         posts.forEach((post) => {
//           let user = null;
//           for (let i = 0; i < users.length; i++) {
//             if (users[i].id === post.userId) {
//               user = users[i];
//               break;
//             }
//           }
//           if (user) {
//             let postElement = document.createElement("div");
//             postElement.innerHTML = `
//               <h4>Title: ${post.title}</h4>
//               <p>${post.body}</p>
//               <p>Posted by: ${user.name} (${user.email})</p>
//               <button onclick="fetchComments(${post.id})">Fitch Comments</button>
//               <div id="${post.id}" class="comments"></div>
//             `;
//             postsContainer.appendChild(postElement);
//           }
//         });
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   })
//   .catch((error) => console.error("Error fetching posts:", error));

// function fetchComments(postId) {
//   let commentsDiv = document.getElementById(`${postId}`);
//   fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
//     .then((response) => response.json())
//     .then((comments) => {
//       commentsDiv.innerHTML = "<h3>Comments:</h3>";
//       comments.forEach((comment) => {
//         let commentElement = document.createElement("div");
//         commentElement.innerHTML = `
//           <p>name :${comment.name} email :${comment.email}</p>
//           <p>${comment.body}</p>
//         `;
//         commentsDiv.appendChild(commentElement);
//       });
//     })
//     .catch((error) =>
//       console.error(`Error fetching comments for post ${postId}:`, error)
//     );
// }
