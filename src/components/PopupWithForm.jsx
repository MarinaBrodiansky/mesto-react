import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, children}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <button onClick={onClose} type="button" className="popup__close-button" />
      <h2 className="popup__title">{title}</h2>
      <form
        className={`popup__form popup__form_${name}`}
        name="popup__form"
        noValidate=""
      >
        {children}
      </form>
    </div>
  </section>
  );
}
export default PopupWithForm;