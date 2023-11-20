import React from 'react'
import Feed from './Feed.js'

const Home = ({ posts }) => {
  return (
    <main className='homePg'>
      {
        posts.length ? (
          <Feed posts={posts} />)
        : (
           <p style={{marginTop: '2rem', fontSize: '2.5rem', textAlign: 'center'}}>No posts to display.
           </p>)
      }
    </main>
  )
}

export default Home