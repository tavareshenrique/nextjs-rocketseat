<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js"/>
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/Rocketseat-8257E5?style=for-the-badge&logo=rocket&logoColor=white"/>
</p>

<h1 align="center">🚀 Next.js Studies — Rocketseat</h1>

<p align="center">
  <strong>Projetos desenvolvidos na nova trilha de Next.js da Rocketseat</strong>
</p>

<p align="center">
  <a href="#-visão-geral">Visão Geral</a> •
  <a href="#-projetos">Projetos</a> •
  <a href="#-conceitos-abordados">Conceitos</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-autor">Autor</a>
</p>

---

## 💡 Visão Geral

Este repositório reúne os projetos desenvolvidos durante a **nova trilha de Next.js** da **Rocketseat**. Cada projeto explora diferentes aspectos do ecossistema Next.js, desde fundamentos com App Router até funcionalidades avançadas como Server Actions, banco de dados e gerenciamento de conteúdo.

---

## 📦 Projetos

<div>
  <table>
    <tr>
      <td width="50%" valign="top">
        <h3 align="center">🐾 Pet Shop</h3>
        <p align="center">
          <img src="https://img.shields.io/badge/Next.js-15.5-black?logo=next.js"/>
          <img src="https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma"/>
          <img src="https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql"/>
          <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css"/>
        </p>
        <p align="center">
          Sistema de agendamento para pet shop com banco de dados real, formulários com validação e interface responsiva.
        </p>
        <p align="center"><a href="./pet-shop">🔗 Ver detalhes →</a></p>
      </td>
      <td width="50%" valign="top">
        <h3 align="center">📝 Site.Blog</h3>
        <p align="center">
          <img src="https://img.shields.io/badge/Next.js-15.4-black?logo=next.js"/>
          <img src="https://img.shields.io/badge/Contentlayer-0.3-7C3AED"/>
          <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css"/>
          <img src="https://img.shields.io/badge/Radix_UI-FF4D4D"/>
        </p>
        <p align="center">
          Landing page moderna + blog com posts em Markdown processados via Contentlayer e design system componentizado.
        </p>
        <p align="center"><a href="./site-blog">🔗 Ver detalhes →</a></p>
      </td>
    </tr>
  </table>
</div>

---

## 🎯 Conceitos Abordados

### Fundamentos Compartilhados

| Conceito | Pet Shop | Site.Blog |
|---|---|---|
| App Router (Next.js 13+) | ✅ | ✅ |
| React Server Components | ✅ | ✅ |
| TypeScript | ✅ | ✅ |
| Tailwind CSS | ✅ (v4) | ✅ (v3) |
| Componentes Radix UI / shadcn/ui | ✅ | ✅ |
| SEO com Metadados | ✅ | ✅ |
| Responsividade | ✅ | ✅ |

### Diferenciais

<table>
  <tr>
    <th>Pet Shop</th>
    <th>Site.Blog</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>Server Actions (CRUD completo)</li>
        <li>Prisma + PostgreSQL (Docker)</li>
        <li>Validação com Zod</li>
        <li>react-hook-form + react-day-picker</li>
        <li>Toast notifications (sonner)</li>
        <li>Docker Compose</li>
        <li>Lefthook (git hooks)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Contentlayer (CMS type-safe)</li>
        <li>React Markdown + Remark GFM</li>
        <li>Componentes compostos (Compound Pattern)</li>
        <li>Sistema de variantes com CVA</li>
        <li>Clipboard API</li>
        <li>Compartilhamento em redes sociais</li>
        <li>Open Graph / OG Image</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🚀 Como Executar

### Pré-requisitos

- **[Node.js](https://nodejs.org/)** 18+
- Gerenciador de pacotes: **npm**, **pnpm** ou **yarn**
- **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** (apenas para o Pet Shop)

### Pet Shop

```bash
cd pet-shop
cp .env.example .env        # configure DATABASE_URL
docker compose up -d         # sobe PostgreSQL
npm install
npm run dev                  # http://localhost:3000
```

### Site.Blog

```bash
cd site-blog
pnpm install
pnpm dev                     # http://localhost:3000
```

---

## 👨‍💻 Autor

**Henrique Tavares**

- 💼 [LinkedIn](https://linkedin.com/in/tavareshenrique)
- 🐙 [GitHub](https://github.com/tavareshenrique)
- 📧 ihenrits@gmail.com

---

<p align="center">
  <sub>Projetos de estudo da <strong>nova trilha de Next.js</strong> da <strong>Rocketseat</strong> 🚀</sub>
</p>
