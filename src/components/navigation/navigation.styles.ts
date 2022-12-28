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
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 5px;
  margin-right: 10px;
  text-decoration: none;
  font-weight: 500;
  color: ${({ active }) => (active ? 'black' : 'grey')};
  background-color: ${({ active }) =>
    active ? 'rgb(246, 248, 252)' : 'white'};

  :hover {
    color: black;
    background-color: rgb(246, 248, 252);
  }
`

export const LoggeedInBadge = styled.p`
  margin: 0;
  font-size: 12px;
`

export const LogoutButton = styled.button`
  background-color: white;
  color: rgb(52, 120, 255);

  :hover {
    background-color: white;
    color: rgba(78, 137, 254, 1);
  }
`
