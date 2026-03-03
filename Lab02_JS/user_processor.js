// 1. Original Data
let users = [
    { id: 1, username: "hamza", postsCount: 10, isOnline: true },
    { id: 2, username: "ali", postsCount: 5, isOnline: false },
    { id: 3, username: "fatima", postsCount: 20, isOnline: true },
    { id: 4, username: "ahmed", postsCount: 7, isOnline: false },
    { id: 5, username: "zara", postsCount: 15, isOnline: true }
];

// 2. Filter Online Users
const onlineUsers = users.filter(user => user.isOnline);

// 3. Format Output
const formattedUsers = onlineUsers.map(({ username, postsCount }) =>
    `User ${username} has ${postsCount} posts.`
);

console.log("Online Users:");
console.log(formattedUsers);

// 4. Async Update Function
const updateUsers = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    users = [
        ...users,
        { id: 6, username: "Guest User", postsCount: 0, isOnline: false }
    ];

    console.log("Total Users:", users?.length ?? 0);
};

updateUsers();