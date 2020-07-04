const users = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
    },
    phone: "111111111131",
    website: "hildegard.org",
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
    },
    phone: "1111111111",
    website: "anastasia.net",
  },
  {
    id: "3",
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
    },
    phone: "111111111147",
    website: "ramiro.info",
  },
  {
    id: "4",
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
    },
    phone: "1111111111",
    website: "kale.biz",
  },
  {
    id: "5",
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
    },
    phone: "11111111119",
    website: "demarco.info",
  },
  {
    id: "6",
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
    },
    phone: "1111111111780",
    website: "ola.org",
  },
  {
    id: "7",
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
    },
    phone: "1111111111",
    website: "elvis.io",
  },
  {
    id: "8",
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
    },
    phone: "1111111111",
    website: "jacynthe.com",
  },
  {
    id: "9",
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
    },
    phone: "11111111114 ",
    website: "conrad.com",
  },
  {
    id: "10",
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
    },
    phone: "1111111111",
    website: "ambrose.net",
  },
];

export function getUsers() {
  return users;
}

export function getUser(id) {
  const user = users.find((u) => u.id === id);
  return user;
}

export function saveUser(user) {
  let userInDB = users.find((u) => u.id === user.id) || {};

  userInDB.name = user.name;
  userInDB.username = user.username;
  userInDB.email = user.email;

  const address = {};
  address.street = user.street;
  address.suite = user.suite;
  address.city = user.city;

  userInDB.address = { ...address };
  userInDB.phone = user.phone;
  userInDB.website = user.website;

  if (!userInDB.id) {
    userInDB.id = Date.now().toString();
    users.push(userInDB);
  }

  return userInDB;
}

export function deleteUser(id) {
  let userInDb = users.find((u) => u.id === id);
  users.splice(users.indexOf(userInDb), 1);
  return userInDb;
}
