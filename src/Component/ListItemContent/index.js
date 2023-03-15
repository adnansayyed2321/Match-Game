import './index.css'

const ListItemContent = props => {
  const {details, onThumbclick} = props
  const {id, thumbnailUrl} = details

  const onThumbnailClick = () => {
    onThumbclick(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onThumbnailClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ListItemContent
