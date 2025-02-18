document.addEventListener("DOMContentLoaded", async () => {
    const userId = new URLSearchParams(window.location.search).get("id");
    const userDetail = document.getElementById("user-detail");
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        userDetail.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <button id="view-posts">ดูโพสต์</button>
        `;
        document.getElementById("view-posts").addEventListener("click", () => {
            window.location.href = `user-posts.html?id=${user.id}`;
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
    }
});