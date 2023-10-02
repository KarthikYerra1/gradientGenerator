import {ListItem, ListButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, onClickDirection} = props
  const {directionId, value, displayText} = details

  const buttonActive = isActive === directionId

  const onClickButton = () => {
    onClickDirection(directionId)
  }
  return (
    <ListItem>
      <ListButton
        value={value}
        buttonActive={buttonActive}
        onClick={onClickButton}
      >
        {displayText}
      </ListButton>
    </ListItem>
  )
}

export default GradientDirectionItem
