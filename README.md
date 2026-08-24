# SpaceHub Web - Frontend

O **SpaceHub** é a interface de usuário da plataforma desenvolvida para conectar pessoas a espaços, facilitando a busca, o gerenciamento e a reserva de imóveis, salas de reunião e coworkings. Este repositório contém exclusivamente o front-end (aplicação web) do projeto, projetado para oferecer uma experiência fluida, responsiva e segura tanto para anfitriões quanto para hóspedes.

## 🚀 Tecnologias Utilizadas

A interface foi construída utilizando um ecossistema moderno focado em performance, tipagem estática e componentização:

*   **Framework:** Next.js com React (utilizando o App Router).
*   **Linguagem:** TypeScript, garantindo segurança na tipagem dos dados.
*   **Estilização:** Tailwind CSS e PostCSS para estilização utilitária rápida e responsiva.
*   **Biblioteca de Componentes:** ecossistema shadcn/ui (configurado via `components.json`), utilizando componentes reutilizáveis e acessíveis (ex: `button.tsx`).
*   **Padronização:** ESLint para manter a qualidade e o padrão do código.

## ⚙️ Arquitetura e Funcionalidades Principais

O front-end consome uma API RESTful externa e está estruturado para lidar com os principais fluxos de negócio exigidos pela aplicação:

*   **Camada de Integração (`src/services/`):** A comunicação com o servidor é abstraída em serviços dedicados, facilitando a manutenção e a reutilização do código:
    *   `api.ts`: Configuração base do cliente HTTP (geralmente com Axios ou Fetch nativo) lidando com interceptação de tokens.
    *   `auth.service.ts`: Gerencia o fluxo de login, cadastro e persistência segura do token JWT do usuário.
    *   `space.service.ts`: Consome as rotas do catálogo, permitindo aos hóspedes buscar/filtrar espaços e aos anfitriões realizarem o CRUD de seus anúncios.
    *   `reservation.service.ts`: Lida com o fluxo crítico de solicitações de reserva e validações de disponibilidade de datas.
*   **Interface de Autenticação:** Separa a experiência e o painel de uso entre os papéis de *Anfitrião* (que cadastra imóveis) e *Hóspede* (que realiza as reservas).
*   **Tratamento de Overbooking:** A interface está preparada para receber e tratar erros 4xx/5xx do servidor de forma amigável, exibindo alertas claros caso o usuário tente reservar um período que já foi ocupado.

## 🛠️ Como rodar o projeto localmente

### Pré-requisitos
* Node.js (v18 ou superior)
* A [API do SpaceHub (Backend)](https://github.com/seu-usuario/spacehub-backend) rodando localmente na sua máquina ou disponível via nuvem.

### Passos de Instalação

1. Clone o repositório e instale as dependências:
```bash
npm install

```

2. Configure as variáveis de ambiente. Crie um arquivo `.env.local` na raiz do projeto (use o `.env.example` como base):

```env
# Exemplo de configuração apontando para o backend rodando localmente
NEXT_PUBLIC_API_URL="http://localhost:3000"

```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev

```

4. Acesse a aplicação no seu navegador:
Abra [http://localhost:3000](http://localhost:3000) (ou a porta indicada no terminal pelo Next.js).

## 👥 Desenvolvedores

Este projeto foi desenvolvido pelo seguinte grupo:

* **Lucas Satoshi Cipriano Oikawa**
* **Isaias Menezes Silva**
* **Yslander Martins de Souza**