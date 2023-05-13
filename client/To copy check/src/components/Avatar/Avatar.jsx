import React from 'react'

const Avatar = ({children,backgroundColor,px,py,color,borderRadius,width,fontSize,cursor,textDecoration}) => {
  const style={
    backgroundColor,
    padding: `${py} ${px}`,
    color : color || 'white',
    borderRadius,
    width: width || '14px',
    // height: height || '30px',
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  }
  
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar