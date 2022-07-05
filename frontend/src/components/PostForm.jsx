import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../features/posts/postSlice'

function PostForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost({ text }))
    setText('')
  }

  return (
    <section className="mt-12">
      <form onSubmit={onSubmit}>
        <div className="form-group pl-8">
          <label htmlFor="text">Post News</label>
          <textarea
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea border-black w-96 h-48"
          />
        </div>
        <div className="m-6 ml-36">
          <button className="btn w-32" type="submit">
            Post
          </button>
        </div>
      </form>
    </section>
  )
}

export default PostForm
