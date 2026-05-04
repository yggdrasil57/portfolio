# Portfolio IT

Portfolio statique en HTML, CSS et JavaScript vanilla pour présenter un profil IT, les compétences, les expériences, les projets personnels et les cubes CESI sous forme d'études de cas.

## Lancer le site

Aucun framework ni build n'est nécessaire.

1. Ouvre `index.html` directement dans ton navigateur.
2. Ou lance un petit serveur local depuis ce dossier :

```powershell
python -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

## Modifier le contenu

La majorité du contenu est dans `data.js`.

- `profile` : nom, rôle, phrase d'accroche, email, téléphone, LinkedIn, CV, postes recherchés, présentation et chiffres clés.
- `skills` : catégories et badges de compétences.
- `softSkills` : savoir-être affichés dans la section Profil.
- `interests` : centres d'intérêt liés aux métiers visés.
- `cubeCategories` : filtres affichés dans la section Cubes CESI.
- `cubes` : études de cas CESI avec problématique, contexte, solution, outils, référentiels, livrables, compétences, documents et synthèse du contenu.
- `projects` : projets personnels avec liens GitHub ou démo si tu en as. Sinon le site affiche une mention propre.
- `educationCurrent` : diplôme en cours.
- `education` : diplômes obtenus.
- `experiences` : expériences professionnelles, avec ce qui a été fait et appris.

Le site est bilingue :

- `window.portfolioData` : contenu français.
- `window.portfolioDataEn` : contenu anglais.
- `window.portfolioUi` : textes fixes de l'interface, labels, boutons et modales.

Pour ajouter un cube, duplique un objet dans le tableau `cubes`, change son `id`, puis remplace les textes.

Chaque carte de cube ouvre `cube.html?id=...`. Les documents sont conservés en PDF uniquement et affichés directement dans la page, avec une synthèse visible sous la visionneuse. Les documents liés aux Cubes 1, 2 et 3 sont placés dans :

```text
assets/cubes/
```

## Remplacer le CV

Le bouton `CV` pointe vers :

```text
assets/cv.pdf
```

Ton CV français a été placé dans le dossier `assets/` avec le nom `cv.pdf`.
Ton CV anglais a été placé dans le dossier `assets/` avec le nom `resume.pdf`.

Pour remplacer un CV, garde le même nom ou modifie le chemin dans `data.js`, propriété `profile.cv` de la langue concernée.

## Remplacer les visuels

- `assets/profile-placeholder.svg` : icône du site utilisée comme favicon.
- `assets/portfolio-visual.svg` : visuel du hero, modifiable ou remplaçable.

Si tu remplaces par une image JPG ou PNG, mets à jour les chemins dans `index.html`.

## Déployer gratuitement

### GitHub Pages

1. Crée un dépôt GitHub.
2. Ajoute les fichiers du portfolio.
3. Va dans `Settings > Pages`.
4. Choisis la branche `main` et le dossier racine.
5. GitHub fournit une URL publique.

### Netlify

1. Connecte ton dépôt GitHub sur Netlify.
2. Choisis le projet.
3. Laisse le dossier de publication vide ou mets `/`.
4. Déploie. Aucun build command n'est nécessaire.

## Sécurité

Le site reste volontairement simple : pas de dépendance front, pas de formulaire, pas d'appel API côté client. Les pages ajoutent aussi une CSP en `meta`, une politique de referrer et une Permissions-Policy pour limiter les surfaces inutiles sur GitHub Pages.
