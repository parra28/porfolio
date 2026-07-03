# Porfolio — Diego Sánchez Diéguez

Sitio estático listo para **GitHub Pages**. No necesita build ni dependencias.

## Contenido
- `index.html` — porfolio (configuración fijada: estilo Editorial, modo claro, acento azul acero)
- `porfolio.css` — estilos
- `assets/` — foto y placeholder
- `.nojekyll` — desactiva Jekyll en GitHub Pages

## Cómo publicarlo gratis en GitHub Pages

1. Repositorio: `https://github.com/parra28/porfolio` (rama `master`).
2. Sube **el contenido de esta carpeta** a la raíz del repositorio:
   ```bash
   cd site
   git init
   git add .
   git commit -m "Rediseño porfolio DevOps"
   git branch -M master
   git remote add origin https://github.com/parra28/porfolio.git
   git push -u origin master --force
   ```
3. En GitHub: **Settings → Pages → Branch: master / (root) → Save**.
4. En 1-2 minutos estará en `https://parra28.github.io/porfolio`.

## Actualizar
Edita los archivos, `git add . && git commit -m "update" && git push`.
