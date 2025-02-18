document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("view-comments")) {
        const postId = event.target.dataset.postid;
        const commentsContainer = document.getElementById(`comments-${postId}`);
        if (commentsContainer.style.display === "none") {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const comments = await response.json();
            commentsContainer.innerHTML = comments.map(comment => `
                <p><strong>${comment.name}:</strong> ${comment.body}</p>
            `).join("");
            commentsContainer.style.display = "block";
            event.target.textContent = "ซ่อนความคิดเห็น";
        } else {
            commentsContainer.style.display = "none";
            event.target.textContent = "ดูความคิดเห็น";
        }
    }
});