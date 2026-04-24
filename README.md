# Osuny plugin : reading progress 

## Installation

### Ajouter le submodule

```
git submodule add git@github.com:osunyorg/osuny-plugin-reading-progress.git themes/osuny-plugin-reading-progress
```

### Appeler le plugin

Dans `config/_default/config.yaml` :
```yaml
theme: 
  - osuny
  - osuny-plugin-reading-progress
```

### Appeler les fichiers


Dans `assets/js/main.js` : 

```js
import './theme/';
import './osuny-plugin-reading-progress';
```

Dans `assets/sass/main.sass` : 

```sass
@import "_theme/hugo-osuny"
@import "osuny-plugin-reading-progress"
```
