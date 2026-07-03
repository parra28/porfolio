# parra28.github.io

Portfolio personal de **Diego Sánchez Diéguez** — DevOps Engineer / SRE.

Sitio estático (HTML + CSS + JavaScript vanilla), servido con GitHub Pages.

## Estructura

```
index.html                  Portfolio (tema DevOps / terminal, oscuro)
assets/diego.jpg            Tu foto (4:5). Reemplaza el placeholder.
assets/diego-placeholder.svg  Marcador que se muestra si no hay foto
.nojekyll                   Desactiva el procesado Jekyll (sitio estático)
```

## Tu foto

Guarda tu foto como `assets/diego.jpg` (recomendado vertical 4:5). El
`index.html` ya la enlaza; si no existe, muestra el marcador automáticamente.

## Desarrollo local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8080
# http://localhost:8080
```
