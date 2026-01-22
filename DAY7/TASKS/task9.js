/*  Create a fake fetchUser(id) function that returns a Promise 
   Create a fake fetchPosts(userId) function 
   Create a fake fetchComments(postId) function 
   Chain these calls using async/await 
   Implement proper error handling for each call*/



function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject("User ID is missing ❌");
      } else {
        resolve({ id: id, name: "Tavishi" });
      }
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        reject("User ID not found for posts ❌");
      } else {
        resolve([
          { id: 101, title: "Post 1" },
          { id: 102, title: "Post 2" }
        ]);
      }
    }, 1000);
  });
}


function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!postId) {
        reject("Post ID not found for comments ❌");
      } else {
        resolve([
          { id: 1, text: "Nice post!" },
          { id: 2, text: "Very helpful 👍" }
        ]);
      }
    }, 1000);
  });
}


async function getUserPostsAndComments() {
  try {
    // Fetch user
    const user = await fetchUser(1);
    console.log("User:", user);

    //Fetch posts
    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);

    //Fetch comments of first post
    const comments = await fetchComments(posts[0].id);
    console.log("Comments:", comments);

  } catch (error) {
    console.log("Error occurred:", error);
  }
}

getUserPostsAndComments();
