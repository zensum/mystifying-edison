import React, {useState, useEffect} from 'react'

import {Loader} from '../../../components/Loader'
import {PostListItem} from './PostListItem'

export const PostList = props => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(result => result.text())
      .then(result => {
        setPosts(result)
        setLoading(false)
      })
      // eslint-disable-next-line
  }, [posts.length])

  let filteredPosts = []
  try {
    filteredPosts = posts.filter(post => {
      const text = post.body + post.title
      return text.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1
    })
  } catch(e) {
    console.error(e);
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : filteredPosts.map(post => (
        <PostListItem {...post} key={`post__${post.id}`} />
      ))}
    </div>
  )
}
