(function () {
  emailjs.init("Ve2GGgBVkx-z06xIc");
})();

const form = document.getElementById("contact-form");
const popUp = document.querySelector("#container-pop-up .pop-up");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("gmail_fernando", "template_u2uxucn", this).then(
    (data) => {
      if (data) {
        showpopUp()
        form.reset();
      } else {
       
      }
    },
    (error) => {
      alert("Erro ao enviar mensagem" + error.text);
    }
  );
});

function showpopUp() {
    popUp.classList.add('active');

    setInterval(() => {
        popUp.classList.remove('active')
    }, 3000);
}
