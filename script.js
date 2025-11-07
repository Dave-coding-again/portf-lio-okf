(function () {
  emailjs.init("Ve2GGgBVkx-z06xIc");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("gmail_fernando", "template_u2uxucn", this).then(
    () => {
      alert("Mensagem enviada");
      form.reset();
    },
    (error) => {
      alert("Erro ao enviar mensagem" + error.text);
    }
  );
});
