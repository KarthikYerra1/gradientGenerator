import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: ${props => props.gradient};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  min-height: 100vh;
  padding: 20px;
`

export const Heading = styled.h1`
  color: ${props => (props.sub ? '#ffffff79' : '#ededed')};
  font-size: ${props => (props.sub ? '15px' : '18px')};
  margin: 20px;
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.sub ? '18px' : '22px')};
  }
`

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
  margin-top: 15px;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ColorSetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin: 30px;
`

export const Label = styled.p`
  font-family: 'Roboto';
  margin-bottom: 20px;
  color: #ededed;
  font-weight: 700;
`
export const ColorInput = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  cursor: pointer;
  outline: none;
  background: none;
`

export const GenerateButton = styled.button`
  height: 40px;
  padding: 10px;
  background-color: #00c9b7;
  color: #334155;
  width: 110px;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
`
