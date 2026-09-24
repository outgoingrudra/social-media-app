import React, { useState } from 'react'
import {Link} from "react-router-dom"
export default function Header() {
    const [curr , setCurr] = useState(0)

    const navItems  = [
        { id : 0 , name : "Home" , link : "/"},
        { id : 1 , name : "Home" , link : "/"},
        { id : 2 , name : "Chats" , link : "/"},
        { id : 3 , name : "Login" , link : "/"},
    ]
  return (
    <div>
        <div className=" p-6 flex justify-between items-center bg-gray-100">
            <div className=" text-2xl font-semibold font-serif">
                  Meetly
            </div>
            <div className="">
                <ul className="flex  gap-4 text-xl">
                    <Link to={"/"} className={ `cursor-pointer    px-2 py-1 rounded-xl hover:bg-blue-400 ${ curr == 0 ? "bg-blue-500" : ""}` }>Home</Link >
                    <Link to={"/feed"} classNme={` cursor-pointer    px-2 py-1 rounded-xl hover:bg-blue-400 ${ curr == 1 ? "bg-blue-500" : ""}`}>Feed</Link >
                    <Link to={"/chats"} classame={ `cursor-pointer    px-2 py-1 rounded-xl hover:bg-blue-400 ${ curr == 2 ? "bg-blue-500" : ""}`}>Chats</Link >
                    <Link to={"/login"} classame={` cursor-pointer    px-2 py-1 rounded-xl hover:bg-blue-400 ${ curr == 3 ? "bg-blue-500" : ""}`}>Login</Link >
                </ul>
            </div>
        </div>
    </div>
  )
}
