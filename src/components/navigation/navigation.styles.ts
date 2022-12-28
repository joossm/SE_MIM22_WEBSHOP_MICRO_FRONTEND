import Link from 'next/link'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  margin-bottom: 10px;
  background-color: white;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`

export const NavItem = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? 'black' : 'grey')};
  padding: 5px;
  background-color: ${({ active }) =>
    active ? 'rgb(246, 248, 252)' : 'white'};
  margin-right: 10px;

  :hover {
    color: black;
    background-color: rgb(246, 248, 252);
  }
`

export const LoggeedInBadge = styled.p`
  margin: 0;
  font-size: 12px;
`
