import { useState, useEffect } from "react";
import api from '../utils/Api';
import Card from './Card'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });

    api.getInitialCards()
    .then(data => setCards(data))
    .catch(error => console.log(error));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button 
          className="profile__avatar-container" 
          onClick={onEditAvatar}
          >
            <img
              src={userAvatar}
              alt="фото профиля"
              className="profile__avatar"
            />
          </button>
          <div className="profile__form">
            <div className="profile__info">
              <h1 className="profile__user-name">{userName}</h1>
              <button
                onClick={onEditProfile}
                className="profile__edit-button"
                type="button"
                aria-label="кнопка редактировать"
              />
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="кнопка добавить"
        />
      </section>
      <section className="elements">
        <div className="elements__list">
          {
            cards.map((card) => 
            <Card key={card._id} card={card} onCardClick={onCardClick} />
            )
          }
        </div>
      </section>
    </main>
  );
};

export default Main;
