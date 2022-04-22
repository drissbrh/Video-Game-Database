import bcrypt from "bcryptjs";

const users = [
  {
    name: "Driss Admin",
    email: "drissadmin@example.com",
    password: bcrypt.hashSync("112233", 10),
    isAdmin: true,
  },
  {
    name: "Hamza BRH",
    email: "hamzabrh@example.com",
    password: bcrypt.hashSync("112233", 10),
  },
  {
    name: "Saif Eddine",
    email: "saiferrabeh@example.com",
    password: bcrypt.hashSync("112233", 10),
  },
];

export default users;
