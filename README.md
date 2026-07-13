# SpaceHub – Conectando Lugares e Pessoas


## 🛠️ Instalação e Execução do Projeto

## Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

- Node.js (versão LTS recomendada)
- npm ou outro gerenciador de pacotes
- Git
- 
## Clonando o projeto

Execute:

git clone URL_DO_REPOSITORIO

Acesse a pasta:

cd spacehub-front

## Instalação das dependências

Após clonar o projeto, instale todas as dependências:

npm install

O comando irá instalar automaticamente todas as bibliotecas definidas no arquivo package.json, incluindo:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Shadcn/UI

## Configuração das variáveis de ambiente

Crie um arquivo chamado:

.env.local

Na raiz do projeto.

Adicione as variáveis necessárias:

NEXT_PUBLIC_API_URL=http://localhost:3001

Para facilitar a configuração de novos integrantes, utilize o arquivo:

.env.example

como referência.

## Executando o projeto

Para iniciar o ambiente de desenvolvimento:

npm run dev

Após iniciar, acesse:

http://localhost:3000

## Estrutura de desenvolvimento

O projeto utiliza uma estratégia baseada em branches por funcionalidade:

develop

├── feature/home-page
├── feature/search-page
├── feature/space-details
├── feature/login-page
├── feature/register-page
├── feature/guest-dashboard
├── feature/host-dashboard
├── feature/create-space
├── feature/calendar
└── feature/booking-flow

## Tecnologias utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Lucide React

## Integração Backend

O frontend foi estruturado para integração com a API desenvolvida em Nest.js.

A comunicação entre aplicações será realizada através de serviços separados:

src/services

permitindo organização dos endpoints e manutenção simplificada.

## Desenvolvimento responsivo

Todas as interfaces seguem a abordagem Mobile First, garantindo compatibilidade com:

- Smartphones
- Tablets
- Notebooks
- Desktops