import {Button, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {btnDetails, selectedBtn, changeSelectedBtn} = props
  const {displayText, value} = btnDetails

  const changeBackgroundColor = () => {
    changeSelectedBtn(value)
  }

  return (
    <List>
      <Button className={selectedBtn === value} onClick={changeBackgroundColor}>
        {displayText}
      </Button>
    </List>
  )
}
export default GradientDirectionItem
