let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

contacto.onclick = (e) => {
    e.preventDefault();
    const downloadLink = document.querySelector('#downloadContact');
    if (downloadLink) {
        downloadLink.click();
    }
};


sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior:"smooth"
    });
}

const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Juan Carlos Vasquez
ORG:JC Carpet & Flooring Services
TEL;TYPE=CELL:9545884816
URL:https://jccarpetflooring.com
END:VCARD
  `.trim();



  const blob = new Blob([vcardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.getElementById('downloadContact');
  downloadLink.href = url;

   // formulario
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));
  const res = await fetch('https://backend-jc-j682.onrender.com/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    alert('Mensaje enviado correctamente');
    this.reset();
  } else {
    alert('Error enviando mensaje');
  }
});