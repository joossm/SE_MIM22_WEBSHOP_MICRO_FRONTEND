import Link from 'next/link'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px 20px;
`

export const NavItem = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? 'black' : 'grey')};
  padding: 5px;
  background-color: rgb(246, 248, 252);
  margin-right: 10px;

  :hover {
    color: black;
  }
`
