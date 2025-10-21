# 🎯 Nuclea Mega Menu

[![Live Demo](https://img.shields.io/badge/demo-online-success)](https://edumangiapane.github.io/nuclea-menu-demo/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![WordPress](https://img.shields.io/badge/WordPress-Compatible-21759B.svg)](https://wordpress.org/)
[![Elementor](https://img.shields.io/badge/Elementor-Ready-92003B.svg)](https://elementor.com/)

> Menu mega hierárquico profissional - React convertido para WordPress/Elementor

---

## 🚀 Demo Online

👉 **[Ver Demo Interativa](https://edumangiapane.github.io/nuclea-menu-demo/)** ← Clique aqui!

---

## 📦 Pacotes Disponíveis

Este repositório contém **3 implementações diferentes**:

### 1️⃣ **Demo Online (GitHub Pages)**
📁 Pasta: [`/docs`](./docs/)
- ✅ HTML standalone completo
- ✅ CSS e JS inline
- ✅ Zero dependências
- 🔗 [Acessar demo](https://edumangiapane.github.io/nuclea-menu-demo/)

### 2️⃣ **Pacote WordPress/Elementor (Recomendado)**
📁 Pasta: [`/ELEMENTOR_TEMPLATE_PACKAGE`](./ELEMENTOR_TEMPLATE_PACKAGE/)
- ✅ Template JSON para importar no Elementor
- ✅ JavaScript vanilla pronto
- ✅ Documentação completa em português
- ✅ Guias visuais passo a passo
- ⚡ Implementação em **15-20 minutos**

📖 [Guia completo →](./ELEMENTOR_TEMPLATE_PACKAGE/LEIA_PRIMEIRO.md)

### 3️⃣ **Projeto React Original**
📁 Pasta: [`/src`](./src/)
- ✅ Código fonte React + TypeScript
- ✅ Vite + Tailwind CSS
- ✅ Componentes Radix UI

**Rodar localmente:**
```bash
npm install        # Instalar dependências
npm run dev        # Iniciar servidor de desenvolvimento
# Acesse: http://localhost:3000
```

🎨 **Projeto Figma:** [Ver design original](https://www.figma.com/design/K8gnXVuiaihAgZDxodvZYc/Recreate-Menu-Layout---REACT--c%C3%B3pia-)

### Tecnologias:
- React 18.3.1 + TypeScript
- Vite (bundler)
- Tailwind CSS
- Radix UI
- Lucide React (ícones)

---

## 📦 Versão WordPress (Convertido)

### ✅ Pacote Completo Disponível!

O menu foi **convertido para WordPress/Elementor** e está pronto para uso.

**Acesse a pasta:** `wordpress-integration/`

### Arquivos inclusos:
- ✅ `menu-data.json` - Dados estruturados do menu
- ✅ `nuclea-menu-vanilla.js` - JavaScript puro (sem React)
- ✅ `nuclea-menu.css` - Estilos completos
- ✅ `functions-wordpress.php` - Integração WordPress
- 📖 `QUICK_START.md` - Guia rápido (5 min)
- 📖 `INSTRUCTIONS.md` - Instruções detalhadas
- 📖 `demo-standalone.html` - Demo standalone para testar

### Quick Start (WordPress):

```bash
# 1. Copie os arquivos para:
/wp-content/themes/seu-tema/assets/

# 2. Adicione código ao functions.php
# (copie de wordpress-integration/functions-wordpress.php)

# 3. Use no Elementor:
[nuclea_mega_menu]
```

**Leia primeiro:** `wordpress-integration/QUICK_START.md`

---

## 📚 Documentação

### Para Desenvolvedores WordPress:
1. **`GUIA_CONVERSAO_WORDPRESS.md`** - Análise e estratégias de conversão
2. **`wordpress-integration/QUICK_START.md`** - Resumo executivo
3. **`wordpress-integration/INSTRUCTIONS.md`** - Passo a passo completo

### Recursos:
- Menu hierárquico de 4 níveis
- Navegação dinâmica
- Animações suaves
- Responsivo (desktop)
- Seletor de idiomas
- Zero dependências externas

---

## 🎯 Para Quem É?

### Versão React:
- Designers e desenvolvedores React
- Protótipos e testes rápidos
- Desenvolvimento frontend moderno

### Versão WordPress:
- **Desenvolvedores WordPress**
- **Sites com Elementor**
- Clientes que querem CMS
- Sites corporativos

---

## 📊 Estrutura do Projeto

```
MENU_NUCLEA/
├── src/                          # Código React
│   ├── App.tsx                   # Componente principal
│   ├── components/               # Componentes UI
│   └── imports/                  # Assets e SVGs
├── wordpress-integration/        # 📦 PACOTE WORDPRESS
│   ├── menu-data.json            # Dados do menu
│   ├── nuclea-menu-vanilla.js    # JavaScript
│   ├── nuclea-menu.css           # Estilos
│   ├── functions-wordpress.php   # Integração PHP
│   ├── demo-standalone.html      # Demo
│   ├── QUICK_START.md            # Guia rápido
│   ├── INSTRUCTIONS.md           # Guia detalhado
│   └── PACKAGE_SUMMARY.md        # Resumo do pacote
├── GUIA_CONVERSAO_WORDPRESS.md   # Documentação técnica
├── package.json                  # Dependências React
└── README.md                     # Este arquivo
```

---

## 🔄 Conversão React → WordPress

O que foi convertido:
- ✅ React hooks → Vanilla JavaScript
- ✅ Tailwind CSS → CSS puro
- ✅ JSX → Template strings HTML
- ✅ Estado React → Variáveis globais
- ✅ Componentes → Funções puras

---

## 🛠️ Desenvolvimento

### Versão React:
```bash
npm run dev     # Desenvolvimento
npm run build   # Build de produção
npm run preview # Preview do build
```

### Versão WordPress:
Não requer build. Apenas copie os arquivos da pasta `wordpress-integration/`.

---

## 📝 Licença

- Código React: Nuclea
- Conversão WordPress: Open source para uso em projetos Nuclea

---

## 🆘 Suporte

### Para versão React:
- Consulte documentação do Vite e React

### Para versão WordPress:
- Leia `wordpress-integration/INSTRUCTIONS.md`
- Verifique `GUIA_CONVERSAO_WORDPRESS.md`
- Troubleshooting completo nos guias

---

## 📞 Contato

**Projeto:** Nuclea Mega Menu  
**Versão React:** 0.1.0  
**Versão WordPress:** 1.0.0  
**Última atualização:** 21 de outubro de 2025

---

## 🎉 Próximos Passos

### Para usar versão React:
```bash
npm i && npm run dev
```

### Para usar versão WordPress:
1. Acesse pasta `wordpress-integration/`
2. Leia `QUICK_START.md`
3. Siga as instruções
4. Integre no seu site!

---

**Escolha a versão que melhor se adapta ao seu projeto! 🚀**  