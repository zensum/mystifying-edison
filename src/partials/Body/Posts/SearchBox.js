import React from 'react'
import styled from 'styled-components'

const StyledSearchBox = styled.input`
  padding: 10px 20px;
  margin: 10px;
  width: fill-available;
  border: 1px solid #d4d4d4;
  border-radius: 25px;

  :focus {
    outline: none;
  }
`

export const SearchBox = ({onChange}) => (
  <StyledSearchBox
    placeholder="Skriv något för att söka bland poster här"
    autoFocus
    onChange={e => onChange(e.target.value)}
  />
)
