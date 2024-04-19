import './index.css'

const Card = props => {
    const {each} = props
    const {imageUrl, title, text} = each

    return (
        <li style={{ listStyleType: 'none' }}>
            <div className="card-container">
                <img src={imageUrl} className = "card-img" />
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </li>
    )
}

export default Card