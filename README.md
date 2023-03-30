# Examenopdracht Front-end Web Development / Web Services

> Schrap hierboven wat niet past

- Student: Guillaume De Craene
- Studentennummer: 
- E-mailadres: guillaume.decraene@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- ...

> Vul eventueel aan

## Opstarten

> maak een .env bestand in de root en plaats er het volgende in:

> `REACT_APP_AUTH0_DOMAIN = {auth0_domain}`  
> `REACT_APP_AUTH0_CLIENT_ID = {auth0_client_id}`  
> `REACT_APP_AUTH0_AUDIENCE = {auth0_audience}`

> voer het volgende commando uit:  
> `yarn start`

## Testen

> maak in de root een Cypress.env.json aan en plaats er het volgende in:  
> `{`  
>  `"auth_audience": {auth_audience},`  
>  `"auth_url": {auth_url},`  
>  `"auth_client_id": {auth_clientId},`  
>  `"auth_client_secret": {auth_secret},`  
>  `"auth_username": {auth_username},`  
>  `"auth_password": {auth_password},`  
> `}`

> een voer het commando uit:  
> `npx cypress open`
