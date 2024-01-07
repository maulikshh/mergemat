import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../context/usercontext";

export default function Dashboard() {
  const {user} =useContext(UserContext);
  return (
    <div><h1>Dashboard</h1>
    {!!user && (<h2>hello {user.firstname +" "+ user.lastname}!</h2>)}
    </div>

  )
}
