# Utiliser une image de base Node.js
FROM node:20

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier tous les fichiers du projet local vers le conteneur
COPY . .

# Installer les dépendances du projet
RUN npm install

# Exposer le port 8080 pour l'application Vue.js
EXPOSE 8080

# Démarrer le serveur de développement Vue.js
CMD ["npm", "run", "serve"]
