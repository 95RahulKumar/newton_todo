import React from 'react'
import {FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa';

const Sidebar = ({selectedTab,setSelectedTab}) => {
  console.log({selectedTab});
  return (
    <div className="sidebar">
      <div className="active" onClick = {()=>{setSelectedTab("Index")}}>
        <FaInbox  className ="icon"/>Inbox
        </div>
      <div onClick = {()=>{setSelectedTab("Today")}}>
        <FaRegCalendarAlt className ="icon" />Today
        </div>
      <div onClick = {()=>{setSelectedTab("Next 7 day")}}>
        <FaRegCalendar className ="icon" />Next 7 days
        </div>
    </div>
  )
}

export default Sidebar
