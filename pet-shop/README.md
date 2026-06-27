<p align="center">
  <img src="./public/next.svg" alt="Pet Shop" width="120" />
</p>

<h1 align="center">🐾 Pet Shop — Agendamentos</h1>

<p align="center">
  <strong>Sistema de agendamento para pet shop com Next.js, Prisma e PostgreSQL</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js"/>
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css"/>
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-estrutura">Estrutura</a> •
  <a href="#-aprendizado">Aprendizado</a>
</p>

---

## 📖 Sobre

O **Pet Shop** é um sistema completo de agendamento para pet shops, desenvolvido como projeto de estudo da **nova trilha de Next.js da Rocketseat**. O foco está na implementação de funcionalidades full-stack com **Server Actions**, banco de dados relacional com **Prisma + PostgreSQL**, e uma interface moderna com **Tailwind CSS v4**.

---

## ✨ Funcionalidades

- **📅 Calendário Interativo** — Navegação entre datas com react-day-picker
- **📋 CRUD de Agendamentos** — Criar, editar e remover agendamentos via Server Actions
- **⏰ Divisão por Períodos** — Agendamentos organizados em manhã, tarde e noite
- **✅ Validação de Conflitos** — Impede agendamentos duplicados no mesmo horário
- **🔒 Validação com Zod** — Schemas type-safe para formulários
- **📱 Responsivo** — Layout adaptável para mobile e desktop
- **🔔 Toast Notifications** — Feedback visual com sonner
- **📞 Formatação de Telefone** — Input mask com react-imask
- **🐳 Docker Compose** — Ambiente PostgreSQL configurado

---

## 🛠 Tecnologias

### Core

| Tecnologia | Versão | Propósito |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.5.6 | Framework React com App Router |
| [React](https://reactjs.org/) | 19.1.0 | Biblioteca de interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Prisma](https://www.prisma.io/) | 6.17 | ORM type-safe |
| [PostgreSQL](https://www.postgresql.org/) | 17 | Banco de dados relacional |

### UI & Styling

| Tecnologia | Propósito |
|---|---|
| [Tailwind CSS v4](https://tailwindcss.com/) | Framework CSS utility-first |
| [Radix UI](https://www.radix-ui.com/) | Componentes acessíveis (Dialog, Popover, Select, Alert Dialog, Tooltip) |
| [react-day-picker](https://react-day-picker.js.org/) | Calendário de seleção de datas |
| [Lucide React](https://lucide.dev/) | Ícones SVG |
| [Class Variance Authority](https://cva.style/) | Variantes de componentes |

### Forms & Data

| Tecnologia | Propósito |
|---|---|
| [react-hook-form](https://react-hook-form.com/) | Gerenciamento de formulários |
| [Zod](https://zod.dev/) | Validação de esquemas |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | Integração Zod + react-hook-form |
| [react-imask](https://imask.js.org/) | Máscara de input (telefone) |
| [date-fns](https://date-fns.org/) | Manipulação de datas |

### Development

| Tecnologia | Propósito |
|---|---|
| [ESLint](https://eslint.org/) | Linter |
| [Prettier](https://prettier.io/) | Formatador de código |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git hooks |
| [Docker](https://www.docker.com/) | Contêiner PostgreSQL |

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Passo a Passo

1. **Clone o repositório e acesse a pasta**

```bash
git clone https://github.com/tavareshenrique/nextjs.git
cd nextjs/pet-shop
```

2. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Edite o arquivo `.env` com a URL de conexão:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/petshop?schema=public"
```

3. **Suba o banco de dados PostgreSQL**

```bash
docker compose up -d
```

4. **Instale as dependências**

```bash
npm install
```

5. **Execute as migrations e genere o Prisma Client**

```bash
npx prisma migrate dev
```

6. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

7. **Acesse** [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção (Prisma + Next) |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa ESLint |
| `npm run format` | Formata código com Prettier |
| `npm run validate:typecheck` | Valida tipos TypeScript |

---

## 📁 Estrutura do Projeto

```
pet-shop/
├── 📁 prisma/
│   └── schema.prisma          # Schema do banco de dados
├── 📁 src/
│   ├── 📁 app/
│   │   ├── page.tsx           # Página principal (agenda do dia)
│   │   ├── layout.tsx         # Layout global
│   │   └── actions.ts         # Server Actions (CRUD)
│   ├── 📁 components/
│   │   ├── ui/                # Componentes base (shadcn/ui)
│   │   ├── appointment-form/  # Formulário de agendamento
│   │   ├── appointment-card/  # Card de agendamento
│   │   ├── date-picker/       # Seletor de data
│   │   ├── period-section/    # Seção de período (manhã/tarde/noite)
│   │   ├── header/            # Header do app
│   │   └── logo/              # Logo
│   ├── 📁 lib/
│   │   ├── prisma.ts          # Instância do Prisma Client
│   │   └── utils.ts           # Utilitários (cn)
│   ├── 📁 types/
│   │   └── appointment.ts     # Tipos do agendamento
│   ├── 📁 utils/
│   │   ├── appointment-utils.ts # Lógica de períodos e horários
│   │   ├── mock-data.ts       # Dados mockados
│   │   └── index.ts           # Barrels export
│   └── 📁 styles/
│       └── globals.css        # Estilos globais
└── 📄 docker-compose.yml      # PostgreSQL container
```

### Modelo do Banco

```prisma
model Appointment {
  id          String   @id @default(cuid())
  tutorName   String
  petName     String
  phone       String
  description String
  scheduleAt  DateTime

  @@map("appointments")
}
```

---

## 🧠 Conceitos Abordados

### Next.js & React

- **App Router** — Rotas aninhadas e layouts com React Server Components
- **Server Actions** — `createAppointment`, `updateAppointment`, `deleteAppointment` com `"use server"`
- **Revalidação** — `revalidatePath` para atualizar dados em tempo real
- **Search Params** — Filtro de data via URL (`?date=2025-01-01`)

### Prisma & Banco de Dados

- **Schema e Migrations** — Definição declarativa do modelo
- **Prisma Client** — Consultas tipadas com `findMany`, `findFirst`, `create`, `update`, `delete`
- **Conflito de Horários** — Verificação de agendamentos existentes antes de criar/atualizar

### Validação & Formulários

- **Zod** — Schema de validação type-safe
- **react-hook-form** — Gerenciamento de estado do formulário
- **Máscara de Input** — Formatação automática de telefone

### UI/UX

- **Períodos** — Agendamentos agrupados em manhã (9h-12h), tarde (13h-18h) e noite (19h-21h)
- **Responsividade** — Layout adaptável com Tailwind
- **Feedback** — Notificações toast para operações CRUD

---

## 👨‍💻 Autor

**Henrique Tavares**

- 💼 [LinkedIn](https://linkedin.com/in/tavareshenrique)
- 🐙 [GitHub](https://github.com/tavareshenrique)
- 📧 ihenrits@gmail.com

---

<p align="center">
  <sub>Projeto de estudo da <strong>nova trilha de Next.js</strong> da <strong>Rocketseat</strong> 🚀</sub>
</p>
