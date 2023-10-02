import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  UnorderedList,
  ColorsContainer,
  ColorSetContainer,
  Label,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].directionId,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    isActive: gradientDirectionsList[0].directionId,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    changeDirection: gradientDirectionsList[0].directionId,
  }

  onClickDirection = id => {
    this.setState({activeDirection: id, isActive: id})
  }

  onChangeFirstColor = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({colorTwo: event.target.value})
  }

  generateGradient = () => {
    const {colorOne, colorTwo, activeDirection} = this.state
    this.setState({
      firstColor: colorOne,
      secondColor: colorTwo,
      changeDirection: activeDirection,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      isActive,
      colorOne,
      colorTwo,
      changeDirection,
    } = this.state
    const direction = gradientDirectionsList.find(
      each => each.directionId === changeDirection,
    )

    const gradient = `linear-gradient(to ${direction.value}, ${firstColor}, ${secondColor})`
    return (
      <MainContainer data-testid="gradientGenerator" gradient={gradient}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Heading as="p" sub>
          Choose direction
        </Heading>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              isActive={isActive}
              details={each}
              onClickDirection={this.onClickDirection}
            />
          ))}
        </UnorderedList>
        <Heading as="p" sub>
          Pick the Colors
        </Heading>
        <ColorsContainer>
          <ColorSetContainer>
            <Label htmlFor="first-color">{colorOne}</Label>
            <ColorInput
              id="first-color"
              value={colorOne}
              type="color"
              onChange={this.onChangeFirstColor}
            />
          </ColorSetContainer>
          <ColorSetContainer>
            <Label htmlFor="second-color">{colorTwo}</Label>
            <ColorInput
              id="second-color"
              value={colorTwo}
              type="color"
              onChange={this.onChangeSecondColor}
            />
          </ColorSetContainer>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.generateGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
