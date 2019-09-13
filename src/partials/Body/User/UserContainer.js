import React, {useState, useEffect} from 'react'
import { withRouter } from "react-router-dom";

import {Loader} from '../../../components/Loader'
import {User} from './User'

export const UserContainer = withRouter(props => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const userId = props.match.params.userId

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(result => result.json())
      .then(result => {
        setUser(result)
        setLoading(false)
      })
      // eslint-disable-next-line
  }, [!!user])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <User user={user} />
      )}
    </>
  )
})
