import React from 'react'
import '../RightSidebar/RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RigthSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}

export default RigthSidebar