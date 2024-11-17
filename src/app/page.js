"use client"
import { useState } from "react";
import UserForm from "./userForm/userForm";
import UsersData from "./usersData/usersData";

export default function Home() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-10">
      <div className="mb-8">
        <UserForm addUsers={addUser} />
      </div>
      <div className="mt-auto mx-auto">
        <UsersData users={users} />
      </div>
    </div>
  );
}
