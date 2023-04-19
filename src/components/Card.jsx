function Card({card, onCardClick}) {
    const handleClick = () => {
        onCardClick(card);
    }
    return (
        <div className="element">
            <button className="element__trash" type="button" area-label="кнопка удалить элемент"></button>
            <img              
            src={card.link} alt={card.name}
            className="element__image" 
            onClick={handleClick}
            />            
            <div className="element__wrap">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like-button" type="button"></button>
                    <span className="element__like-count">{card.likes.length}</span>
                </div>                
            </div>                
        </div>
    )
}

export default Card