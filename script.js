document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("user-list");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach(user => {
            const userElement = document.createElement("div");
            userElement.classList.add("user");
            userElement.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <a href="user-detail.html?id=${user.id}">ดูรายละเอียด</a>
            `;
            userList.appendChild(userElement);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});