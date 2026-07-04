# Sitio web YAARQUITECTOS

Sitio estático (HTML + CSS + JS, sin frameworks ni build step), listo para publicarse en **GitHub Pages** y conectarse a tu dominio propio.

## Estructura

```
index.html              → Inicio
proyectos.html           → Listado de proyectos
proyectos/
  casa-jp.html                  → Casa JP
  casa-rm.html                  → Casa RM
  casa-las-canas.html           → Casa Las Cañas
  sede-social-villa-alegre.html → Sede Social Valles de Villa Alegre
  acceso-fundo-santa-clara.html → Acceso Fundo Santa Clara
  casa-armerillo.html           → Casa Armerillo
  casa-bt.html                  → Casa BT
  casa-levante.html             → Casa Levante
  casa-ab.html                  → Casa AB
nosotros.html            → Sobre el estudio
contacto.html            → Formulario de contacto
assets/
  css/style.css          → Todos los estilos
  js/main.js             → Menú móvil, año automático, formulario
  js/carousel.js         → Carrusel de imágenes de cada proyecto
  img/logo.svg           → Logo (monograma + marcas de esquina)
CNAME                    → Dominio propio (edítalo antes de publicar)
```

## 1. Reemplazar contenido de prueba

- **Imágenes de proyectos**: cada bloque marcado como `(reemplazar imagen)` es un `<div class="ph">`. Reemplázalo por una etiqueta `<img src="...">` dentro del `div.frame-media`, por ejemplo:
  ```html
  <div class="frame-media">
    <img src="../assets/img/proyectos/casa-jp/casa-jp-fachada.jpg" alt="Fachada principal, Casa JP">
  </div>
  ```
  Guarda las fotos en `assets/img/proyectos/` (créala) con nombres cortos y descriptivos.
- **Textos**: nombres del equipo en `nosotros.html`, correo/WhatsApp/dirección en el footer y en `contacto.html`, y las memorias de cada proyecto en `proyectos/*.html`.
- **Nuevos proyectos**: para agregar un proyecto nuevo, duplica cualquier archivo de `proyectos/`, cambia el contenido y las imágenes del carrusel, y agrégalo como tarjeta en `proyectos.html` (y opcionalmente en `index.html` si quieres destacarlo).

## 2. Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `yaarq-web`).
2. Sube **todo el contenido de esta carpeta** a la raíz del repositorio (no dentro de una subcarpeta).
3. En GitHub: **Settings → Pages → Source**, selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
4. GitHub te dará una URL tipo `https://tu-usuario.github.io/yaarq-web/`. Confirma que el sitio carga ahí antes de conectar el dominio.

## 3. Conectar tu dominio propio

1. Edita el archivo `CNAME` en la raíz del repositorio y reemplaza el contenido por tu dominio, por ejemplo:
   ```
   www.yaarq.cl
   ```
   (una sola línea, sin `http://` ni barra final).
2. En el proveedor donde compraste el dominio (NIC Chile, GoDaddy, etc.), agrega estos registros DNS:
   - Si usarás `www.tudominio.cl`: un registro **CNAME** apuntando `www` → `tu-usuario.github.io`.
   - Si usarás el dominio raíz (`tudominio.cl` sin `www`): cuatro registros **A** apuntando a las IPs de GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. Vuelve a **Settings → Pages** en GitHub, escribe tu dominio en el campo "Custom domain" y guarda (esto genera el `CNAME` automáticamente si no lo subiste tú). Activa **Enforce HTTPS** una vez que el certificado esté disponible (puede tardar unos minutos a horas).

## 4. Formulario de contacto

El formulario de `contacto.html` es solo del lado del cliente (muestra un mensaje de confirmación, pero no envía correos, porque GitHub Pages no ejecuta backend). Para recibir los mensajes de verdad, más adelante puedes conectarlo a un servicio como Formspree, Getform o Web3Forms (agregan un `action` al `<form>` y listo, sin backend propio).
