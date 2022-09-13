#! /usr/bin/env node

const { exec } = require("child_process");
const path = require("path");

console.log("===Inicializando projeto===");

exec(
  `yarn init -y && git init --prefix ${path.resolve(process.cwd())}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log("==Projeto iniciado==");
  }
);

console.log("===Instalando dependências do projeto===");

exec(
  `yarn add express express-async-errors cors dotenv --prefix ${path.resolve(
    process.cwd()
  )}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log("==Depêndencias instaladas==");
  }
);

console.log("===Instalando dependências de desenvolvimento do projeto===");

exec(
  `yarn add typescript ts-node nodemon eslint prettier eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-prettier @types/cors @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser --prefix ${path.resolve(
    process.cwd()
  )}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log("==Depêndencias de desenvolvimento instaladas==");
  }
);

console.log("===Apagando setup===");

exec(
  `rm setup.js --prefix ${path.resolve(process.cwd())}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log("==Tudo Pronto==");
  }
);
