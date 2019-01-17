# Step 1

```bash
git checkout --orphan demo
npm init
yarn add add parcel-bundler
touch index.html
touch style.scss
```

# Step 2 : Changement dans le package.json

```json
{
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
  ```
# Step 3 : édition du html et css

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.scss" />
</head>
<body>
    <h1>Salut les IARDeurs</h1>
</body>
</html>
```

```css
body {
    margin:0;
    padding:0;
    background-color:#FF4136;
    color:white;
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    margin:10vh auto ;
    width:fit-content;
    font-size: 7em;
}
```
# Step 4 : .gitignore

```
node_modules/
dist/
.cache/
.vscode/
```

# Step 5
```bash
git add .
git commit -m "mon app"
git push origin demo
```

# Step 6 : Déployer la branche

Aller sur Netlify