# Ignite Teams

Ignite Teams é um aplicativo React Native desenvolvido com Expo e TypeScript, que permite a criação e gestão de guildas, times e jogadores. Este projeto foi criado para facilitar a organização de grupos e jogadores em diferentes contextos, como jogos, esportes e outras atividades de equipe.

## Funcionalidades

- Criar e gerenciar guildas.
- Criar e gerenciar times dentro das guildas.
- Adicionar e gerenciar jogadores nos times.

## Projeto

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/1.jpeg" alt="Times" width="45%" style="margin: 5px;"/>
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/2.jpeg" alt="Times" width="45%" style="margin: 5px;"/>
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/3.jpeg" alt="Turmas" width="45%" style="margin: 5px;"/>
    <img src="https://github.com/WebSh4dow/Ignite-teams/blob/main/assets/3.jpeg" alt="Jogadores" width="45%" style="margin: 5px;"/>
</div>

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)

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
