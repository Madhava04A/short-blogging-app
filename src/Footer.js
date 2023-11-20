import React from 'react'

const Footer = ({ posts }) => {
  return (
    <footer className='footer'>  {posts.length === 1? "Post" : "Posts"} : {posts.length}</footer>
  )
}

export default Footer