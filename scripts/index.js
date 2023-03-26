//кнопки
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

//закрытие
const popupCloseProfile = document.querySelector(".popup__close_profile");
const popupCloseMesto = document.querySelector(".popup__close_add-mesto");
const popupCloseImage = document.querySelector(".popup__close_image");

//формы
const formElementProfile = document.querySelector(".popup__form_profile");
const formElementMesto = document.querySelector(".popup__form_add-mesto");

//попапы
const editPopup = document.querySelector(".popup_profile");
const popupAddMesto = document.querySelector(".popup_add-mesto");
const popupOpenImage = document.querySelector(".popup_image");

//имя
const userName = document.querySelector(".profile__title");
const userAboutMe = document.querySelector(".profile__subtitle");
const mestoName = document.querySelector(".popup__title_add-mesto");

//инпут
const nameInput = document.querySelector(".popup__input_type_name");
const aboutMeInput = document.querySelector(".popup__input_type_about-me");
const nameMestoInput = document.querySelector(".popup__input_type_name-mesto");
const linkInput = document.querySelector(".popup__input_type_link");

//контейнер
const elementsCon = document.querySelector(".elements");

//картинка
const imagePopup = popupOpenImage.querySelector(".popup__image");
const titlePopup = popupOpenImage.querySelector(".popup__title_image");


//изображения
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closeModal(popup) {
  popup.classList.remove("popup_opened");
}
function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userAboutMe.textContent = aboutMeInput.value;
  closeModal(editPopup);
}
function addCardSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: nameMestoInput.value,
    link: linkInput.value,
    alt: nameMestoInput.value,
  };

  renderCard(card);
  evt.target.reset();
  
  closeModal(popupAddMesto);
}

function createCard(card) {
  const cardTemplate = document.querySelector(".template-card").content;
  const imageElement = cardTemplate.querySelector(".element").cloneNode(true);
  imageElement.querySelector(".element__title").textContent = card.name;
  imageElement.querySelector(".element__mask-group").src = card.link;
  imageElement.querySelector(".element__mask-group").alt = card.alt;
  imageElement
    .querySelector(".element__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like-button_active");
    });

  const buttonDelete = imageElement.querySelector(".element__delete-button");
  buttonDelete.addEventListener("click", deleteButtonClick);
  imageElement
    .querySelector(".element__mask-group")
    .addEventListener("click", function (evt) {
      const image = evt.target;
      imagePopup.src = image.src;
      imagePopup.alt = image.alt;
      titlePopup.textContent = image.alt;
      openPopup(popupOpenImage);
    });
  return imageElement;
}

const renderCard = (card) => {
  const cardElement = createCard(card);
  elementsCon.prepend(cardElement);
};

function deleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".element");
  card.remove();
}

initialCards.forEach(function (card) {
  elementsCon.append(createCard(card));
});

popupCloseProfile.addEventListener("click", function () {
  closeModal(editPopup);
});

popupCloseMesto.addEventListener("click", function () {
  closeModal(popupAddMesto);
});

popupCloseImage.addEventListener("click", function () {
  closeModal(popupOpenImage);
});

editButton.addEventListener("click", function () {
  nameInput.value = userName.textContent;
  aboutMeInput.value = userAboutMe.textContent;
  openPopup(editPopup);
});

addButton.addEventListener("click", function () {
  openPopup(popupAddMesto);
});

formElementProfile.addEventListener("submit", formProfileSubmitHandler);
formElementMesto.addEventListener("submit", addCardSubmit);
