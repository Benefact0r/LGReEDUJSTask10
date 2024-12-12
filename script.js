// Fetch and display posts
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        const list = document.createElement("ol");
        data.forEach(post => {
            const listItem = document.createElement("li");
            listItem.textContent = post.title;
            list.appendChild(listItem);
        });
        document.body.appendChild(list);
    })
    .catch(error => console.error("Error fetching posts:", error));

// Create a new post
function createPost() {
    const newPost = {
        title: "New Post",
        body: "This is the body of the new post.",
        userId: 1
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
        .then(response => response.json())
        .then(data => console.log("Post created:", data))
        .catch(error => console.error("Error creating post:", error));
}

// Delete a post
function deletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
    })
        .then(response => {
            if (response.ok) {
                console.log("Post deleted successfully.");
            } else {
                console.log("Failed to delete post:", response.status);
            }
        })
        .catch(error => console.error("Error deleting post:", error));
}

// Example usage
createPost();
deletePost(1);


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        const list = document.createElement("ol");
        data.forEach(post => {
            const listItem = document.createElement("li");
            listItem.textContent = post.title;
            list.appendChild(listItem);
        });
        document.body.appendChild(list);
    })
    .catch(error => console.error("Error fetching posts:", error));


function deletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
    })
        .then(response => {
            if (response.status === 204) {
                console.log("Post deleted successfully: No Content.");
            } else if (response.ok) {
                console.log("Post deleted successfully.");
            } else {
                console.log("Failed to delete post:", response.status);
            }
        })
        .catch(error => console.error("Error deleting post:", error));
}