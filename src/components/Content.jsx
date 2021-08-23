import React, { useState } from 'react'
import Task from './Task'
import Sidebar from './Sidebar'

const Content = () => {
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <section className="content">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Task />
    </section>
  )
}

export default Content

