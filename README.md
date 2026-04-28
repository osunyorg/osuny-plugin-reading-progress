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

### Configurer la couleur 

```css
--osuny-reading-progress-bar-color: var(--color-accent)
```

### Exemples

- https://www.encommuns.net/articles/2026-04-20-laffaire-de-tous-la-part-de-total/
- https://example.osuny.org/
