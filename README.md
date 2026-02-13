# Adopciones KalÃ¶ (Astro + Tailwind + Decap CMS + Netlify)

Sitio web completo para rescate y adopciÃ³n de perros en Costa Rica.

## 1) Estructura del proyecto

```text
adopciones-kalo/
  public/
    admin/
      config.yml
      index.html
    images/perritos/
      bruno.svg
      luna.svg
      nala.svg
    uploads/perritos/            # imÃ¡genes subidas desde CMS
    favicon.png
    logo-kalo.png
  src/
    components/
      DogCard.astro
      DonationCard.astro
      NewsletterForm.astro
    content/
      perritos/
        bruno.md
        luna.md
        nala.md
    layouts/
      Layout.astro
    pages/
      index.astro
      perros/index.astro
      perros/[slug].astro
      nuestra-historia/index.astro
      como-ayudar/index.astro
      contacto/index.astro
      solicitud-lista/index.astro
      gracias-newsletter/index.astro
    content.config.ts
    styles/global.css
  astro.config.mjs
  netlify.toml
  package.json
```

## 2) Requisitos

- Node.js 20+
- npm
- cuenta Netlify (gratis)
- repo en GitHub/GitLab/Bitbucket

## 3) Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:4321`.

## 4) Build de producciÃ³n

```bash
npm run build
npm run preview
```

## 5) Deploy en Netlify (gratis)

1. Subir este proyecto a un repositorio Git.
2. En Netlify: **Add new site** -> **Import an existing project**.
3. Seleccionar el repo y usar:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

## 6) Activar Decap CMS (admin)

1. En Netlify, ir a **Identity** y activar Identity.
2. En **Identity** -> **Registration preferences**: `Invite only` (recomendado).
3. En **Identity** -> **Services** activar **Git Gateway**.
4. Invitar usuarios administradores desde **Identity** -> **Invite users**.
5. Abrir `https://TU-SITIO.netlify.app/admin/`.
6. Iniciar sesiÃ³n y crear/editar perritos en la colecciÃ³n **Perritos**.

Notas:
- `public/admin/config.yml` usa backend `git-gateway`.
- `media_folder` apunta a `public/uploads/perritos`.
- El slug es automÃ¡tico con `slug: '{{slug}}'`.

## 7) Campos CMS por perrito

ColecciÃ³n: `perritos`

- `foto` (imagen)
- `nombre` (texto)
- `edad` (texto)
- `historia_situacion` (markdown)
- `estado` (`Disponible | Reservado | Adoptado`)
- `fecha_publicacion` (date)
- `destacado` (boolean)
- slug automÃ¡tico

## 8) Flujo del formulario de adopciÃ³n

En `src/pages/perros/[slug].astro`:

1. Usuario completa el formulario (campos obligatorios + checkboxes obligatorios).
2. Se genera el resumen con formato listo para Instagram.
3. El resumen se copia al portapapeles.
4. Se abre DM de Instagram: `https://ig.me/m/adopcioneskalo`.
5. Se redirige a `/solicitud-lista/` con mensaje final:
   - "Listo: tu solicitud se copiÃ³. PÃ©gala en Instagram y envÃ­ala. Adjunta tambiÃ©n fotos del hogar y foto de tu cÃ©dula."

AdemÃ¡s, el formulario estÃ¡ preparado para Netlify Forms con:
- `data-netlify="true"`
- `form-name`
- honeypot anti-spam

## 9) Newsletter (Netlify Forms)

Formulario en componente `src/components/NewsletterForm.astro`.

Campos:
- nombre
- email

Al enviar, redirige a `/gracias-newsletter/`.

## 10) Donaciones

SecciÃ³n en `src/pages/como-ayudar/index.astro` con botones para copiar:

- SINPE MÃ“VIL: `8672-5678`
- Cuenta BAC: `943408567`
- CÃ©dula JurÃ­dica: `3002790325`
- Nombre: AsociaciÃ³n Adopciones KalÃ¶

## 11) Perritos de prueba incluidos

- `src/content/perritos/nala.md` (Disponible)
- `src/content/perritos/bruno.md` (Reservado)
- `src/content/perritos/luna.md` (Adoptado)

## 12) Branding / logo / favicon

- Header: `public/logo-kalo.png`
- Favicon: `public/favicon.png` (mismo branding)

Si tienen el logo oficial final, reemplacen `public/logo-kalo.png` (y opcionalmente `public/favicon.png`) manteniendo el mismo nombre de archivo.


