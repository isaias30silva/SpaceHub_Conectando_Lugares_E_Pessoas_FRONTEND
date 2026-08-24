# SpaceHub - Conectando Lugares e Pessoas

O **SpaceHub** é uma plataforma full-stack desenvolvida para conectar pessoas a espaços, permitindo o gerenciamento e a reserva de imóveis, salas de reunião e coworkings. Este projeto agora engloba a solução completa (Backend e Frontend), projetada para centralizar dados, garantir a confiabilidade da disponibilidade e fornecer uma experiência segura e fluida aos usuários.

## 🚀 Tecnologias Utilizadas

A aplicação foi construída utilizando uma arquitetura moderna dividida entre cliente e servidor:

### Frontend (Interface do Usuário)
*   **Framework:** Next.js com React (App Router)
*   **Estilização:** Tailwind CSS e componentes integrados via ecossistema Shadcn UI (ex: `button.tsx`)
*   **Integração com API:** Camada de serviços (`src/services/api.ts`, `auth.service.ts`, `reservation.service.ts`, `space.service.ts`) configurada para comunicação estruturada com o backend.
*   **Ferramentas:** PostCSS, ESLint, TypeScript.

### Backend (Servidor e API)
*   **Framework:** NestJS (Node.js)
*   **ORM:** Prisma
*   **Banco de Dados:** PostgreSQL
*   **Segurança:** Autenticação via JWT e Bcrypt para criptografia de senhas.

## ⚙️ Arquitetura e Funcionalidades Principais

O sistema atende a dois perfis principais (Anfitrião/Host e Hóspede/Guest) e está estruturado de ponta a ponta nos seguintes domínios:

*   **Autenticação e Perfil:** Criação de contas e login seguro, garantindo que o hóspede acesse suas reservas e o anfitrião gerencie seus anúncios. O frontend consome essa lógica via `auth.service.ts`.
*   **Catálogo Dinâmico (Spaces):** Permite ao anfitrião realizar o CRUD completo de seus imóveis (título, descrição, preço, fotos). A interface renderiza o catálogo e os filtros de busca integrando-se via `space.service.ts`.
*   **Motor de Reservas (Bookings):** Valida a disponibilidade do espaço no banco de dados para impedir *overbooking* (reservas duplicadas no mesmo período). O fluxo de reservas no cliente é gerenciado pelo `reservation.service.ts`.
*   **Gestão de Imagens:** Suporte para envio e armazenamento de fotos dos imóveis cadastrados.

## 🛡️ Regras de Negócio e Segurança

*   **Prevenção de Overbooking:** O backend possui verificações rigorosas para bloquear tentativas de reserva concomitantes para o mesmo imóvel.
*   **Isolamento de Dados (IDOR):** Um usuário logado só pode editar ou excluir os seus próprios anúncios.
*   **Segurança de Dados Sensíveis:** O frontend gerencia os tokens localmente, e o backend jamais expõe senhas em texto puro.

## 🛠️ Como Rodar o Projeto Localmente

### 1. Configurando o Backend (API)
1. Acesse o diretório do backend (NestJS) e instale as dependências: `npm install`
2. Crie um arquivo `.env` baseado no `.env.example` contendo as credenciais do PostgreSQL e a chave `JWT_SECRET`.
3. Execute as migrações do banco de dados: `npx prisma migrate dev`
4. Inicie o servidor: `npm run start:dev` (A API estará disponível na porta definida no backend).

### 2. Configurando o Frontend (Web)
1. Acesse o diretório da interface (`spacehub-front-deploy`).
2. Instale as dependências do front-end:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env.local` baseado no `.env.example`. Certifique-se de configurar a URL da API (por exemplo: `NEXT_PUBLIC_API_URL=http://localhost:3000`).
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação no navegador via `http://localhost:3000` (ou a porta mapeada pelo Next.js).