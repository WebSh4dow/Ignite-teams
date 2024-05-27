# Ignite Teams

Ignite Teams é um aplicativo React Native desenvolvido com Expo e TypeScript, que permite a criação e gestão de guildas, times e jogadores. Este projeto foi criado para facilitar a organização de grupos e jogadores em diferentes contextos, como jogos, esportes e outras atividades de equipe.

## Funcionalidades

- Criar e gerenciar guildas.
- Criar e gerenciar times dentro das guildas.
- Adicionar e gerenciar jogadores nos times.

## Tecnologias Utilizadas

- [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
- [![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
- [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
- [![React Navigation](https://img.shields.io/badge/React_Navigation-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnavigation.org/)

## Projeto

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/1.jpeg" alt="Times" width="45%" style="margin: 5px;"/>
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/2.jpeg" alt="Times" width="45%" style="margin: 5px;"/>
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/3.jpeg" alt="Turmas" width="45%" style="margin: 5px;"/>
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/3.jpeg" alt="Jogadores" width="45%" style="margin: 5px;"/>
</div>

## Estrutura do Projeto

```plaintext
ignite-teams/
├── App.tsx
├── app.json
├── babel.config.js
├── tsconfig.json
├── package.json
├── src/
│   ├── components/
│   │   └── PlayerItem.tsx
│   ├── screens/
│   │   ├── GuildScreen.tsx
│   │   ├── TeamScreen.tsx
│   │   └── PlayerScreen.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   └── types/
│       └── index.d.ts
└── yarn.lock
