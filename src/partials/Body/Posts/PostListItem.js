import React from 'react'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

import {Icon} from '../../../components/Icon'

const StyledPostListItem = styled.div`
  padding: 20px 10px;
  cursor: pointer;

  :hover {
    background: #efefef;
  }

  & > div:nth-child(1) {
    color: #015770;
    font-size: 18px;
    text-transform: uppercase;
  }

  & > div:nth-child(2) {
    color: #333;
  }

  & > div:nth-child(3) {
    color: #999;
  }

  & > div > span + span {
    margin-left: 10px;
  }

  & > div > span > span {
    margin-right: 5px;
  }

  & > div + div {
    margin-top: 5px;
  }
`

export const PostListItem = withRouter(({body, id, title, userId, history}) => (
  <StyledPostListItem onClick={() => history.push(`/user/${userId}`)}>
    <div><b>{title}</b></div>
    <div>{body}</div>
    <div>
      <span><Icon type="pin" />{id}</span>
      <span><Icon type="user" />{userId}</span>
    </div>
  </StyledPostListItem>
))
