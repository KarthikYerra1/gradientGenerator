import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  font-family: 'Roboto';
  margin: 5px;
`

export const ListButton = styled.button`
  height: 38px;
  padding: 20px;
  background-color: #ededed;
  opacity: ${props => (props.buttonActive ? '1' : '0.5')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  width: 120px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
`
