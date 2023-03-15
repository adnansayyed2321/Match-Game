import './index.css'

const TabItem = props => {
  const {TabDetails, onTabIdChange} = props
  const {tabId, displayText} = TabDetails

  const onTabChange = () => {
    onTabIdChange(tabId)
  }

  return (
    <li className="item-per">
      <button type="button" className="tag-name-button" onClick={onTabChange}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
