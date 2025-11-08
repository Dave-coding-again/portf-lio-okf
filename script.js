const form = document.getElementById("contact-form");
const successPopup = document.querySelector(".pop-up:not(.error)");
const errorPopup = document.querySelector(".pop-up.error");

(function() {
  emailjs.init({
    publicKey: "Ve2GGgBVkx-z06xIc", 
  });
})();


form.addEventListener("submit", function (e) {
  e.preventDefault();

emailjs.sendForm("gmail_fernando", "template_u2uxucn", this).then(
  () => {
    showPopup(successPopup);
    form.reset();
  },
  (error) => {
    showPopup(errorPopup);
    console.error("Erro ao enviar o email:", error);
  }
);
});

function showPopup(popup) {
  popup.classList.add("active");
  setTimeout(() => popup.classList.remove("active"), 3000);
}
