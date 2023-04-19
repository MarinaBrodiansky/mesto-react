import Header from './Header.jsx';
import Main from './Main';
import '../index.css';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      />

      <Footer />

      {/*попап редактировать профиль*/}
      <PopupWithForm
      name={"edit-profile"}
      title={"Редактировать профиль"}
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      >
        <input
          required=""
          className="popup__input popup__input_value_user-name"
          type="text"
          placeholder="Ваше имя"
          name="profile__user-name"
          minLength={2}
          maxLength={40}
          id="user-name-input"
        />
        <span className="popup__error" id="user-name-input-error" />
        <input
          required=""
          className="popup__input popup__input_value_job"
          type="text"
          placeholder="О себе"
          name="profile__job"
          minLength={2}
          maxLength={200}
          id="job-input"
        />
        <span className="popup__error" id="job-input-error" />
        <button
          type="submit"
          className="popup__submit-button"
          aria-label="кнопка сохранить"
        >
          Сохранить
        </button>
      </PopupWithForm>


      {/*попап добавить картинку*/}
      <PopupWithForm
      name={"add-element"}
      title={"Новое место"}
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      >
        <input
          required=""
          className="popup__input popup__input_value_element-name"
          type="text"
          placeholder="Название"
          name="element-name"
          minLength={2}
          maxLength={30}
          id="element-name"
        />
        <span className="popup__error" id="element-name-error" />
        <input
          required=""
          className="popup__input popup__input_value_element-link"
          placeholder="Ссылка на картинку"
          name="element-link"
          type="url"
          id="element-link"
        />
        <span className="popup__error" id="element-link-error" />
        <button
          type="submit"
          className="popup__submit-button"
          aria-label="кнопка сохранить"
        >
          Сохранить
        </button>
      </PopupWithForm>


      {/*попап картинки*/}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />


      {/*попап вы уверены?*/}
      <PopupWithForm
      name={"confirm"}
      title={"Вы уверены?"}
      isOpen={false}
      onClose={closeAllPopups}
      >
        <button
        type="submit"
        className="popup__submit-button"
        area-label="кнопка да"
        >
          Да
        </button>
      </PopupWithForm>


      {/*попап сменить аватар*/}
      <PopupWithForm
      name={"change-avatar"}
      title={"Обновить аватар"}
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      >
        <input
          required=""
          className="popup__input popup__input_value_element-link"
          placeholder="Ссылка на картинку"
          name="avatar"
          type="url"
          id="avatar"
        />
        <span className="popup__error" id="avatar-error" />
        <button
          type="submit"
          className="popup__submit-button"
          aria-label="кнопка сохранить"
        >
          Сохранить
        </button>
      </PopupWithForm>

    </div>
  );
}

export default App;
