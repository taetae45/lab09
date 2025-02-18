document.addEventListener("DOMContentLoaded", async () => {
    const userId = new URLSearchParams(window.location.search).get("id");
    const postsList = document.getElementById("posts-list");
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await response.json();
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="view-comments" data-postid="${post.id}">ดูความคิดเห็น</button>
                <div class="comments" id="comments-${post.id}" style="display:none"></div>
            `;
            postsList.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
});