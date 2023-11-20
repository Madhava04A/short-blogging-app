import React from 'react'
import './Newpost.css'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {

 

  return (
    <main className='newpost'>
      <form className='addPost' onSubmit={handleSubmit}>
        <label htmlFor="addTitle" className='labeltitle'>TITLE</label>
        <input
          id='addTitle'
          type="text"
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
          required
        />
        <label htmlFor="addBody" className='labelbody'>BLOG</label>
        <textarea
          id='addBody'
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
          required
        />
          <button
            type= 'submit'
            className='submitBtn'
          >Post
          </button>
            
        
        
      </form>
    </main>
  )
}

export default NewPost