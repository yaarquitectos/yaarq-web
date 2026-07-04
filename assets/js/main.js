document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#nombre');
      var status = form.querySelector('.form-status');
      var button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          if (status) {
            status.textContent = 'Gracias' + (name && name.value ? ', ' + name.value : '') + '. Recibimos tu mensaje y te responderemos a la brevedad.';
          }
          form.reset();
        } else {
          if (status) {
            status.textContent = 'No pudimos enviar tu mensaje. Escríbenos directamente a yaarquitectos@gmail.com con los detalles de tu proyecto.';
          }
        }
      }).catch(function () {
        if (status) {
          status.textContent = 'No pudimos enviar tu mensaje. Escríbenos directamente a yaarquitectos@gmail.com con los detalles de tu proyecto.';
        }
      }).finally(function () {
        if (button) button.disabled = false;
      });
    });
  }
});
