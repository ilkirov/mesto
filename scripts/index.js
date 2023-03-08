const popup = document.querySelector(".popup");
const buttonOpenEdit = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
let userName = document.querySelector("#name-input");
let userAbout = document.querySelector("#about-input");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let formElement = document.querySelector(".popup__form");

const toggleOpenPopup = function () {
  userName.value = profileTitle.textContent;
  userAbout.value = profileSubtitle.textContent;
  popup.classList.toggle(".popup_opened");
};

const toggleClosePopup = function () {
  popup.classList.toggle(".popup_opened");
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = userName.value;
  profileSubtitle.textContent = userAbout.value;
  toggleClosePopup();
}
buttonOpenEdit.addEventListener("click", toggleOpenPopup);
closeButton.addEventListener("click", toggleClosePopup);
formElement.addEventListener("submit", handleFormSubmit);
