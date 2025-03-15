const usersList = [
  { id: 0, name: "Вася" },
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Алла" },
  { id: 2, name: "Пётр" },
  { id: 1707, name: "Руслан" },
];

const usersSet = new Set(
  [...new Set(usersList.map(({ id }) => id))].map((uniqueId) =>
    usersList.find(({ id }) => id === uniqueId)
  )
);

console.log("🚀 ~ usersSet:", usersSet);
