# 🎯 Nuclea Mega Menu - Demo Online

[![Live Demo](https://img.shields.io/badge/demo-online-success)](https://SEU-USUARIO.github.io/NOME-DO-REPO/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/vanilla-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Menu mega hierárquico profissional convertido de React para Vanilla JavaScript

## 📋 Sobre

Esta é uma **demonstração interativa** do Nuclea Mega Menu, um componente de menu hierárquico de 4 níveis totalmente funcional, sem dependências externas.

**✨ Características:**
- 🚀 Zero dependências (Vanilla JavaScript puro)
- 📱 Design responsivo
- ⚡ Animações suaves
- 🎨 Customizável via CSS Variables
- ♿ Acessível (ARIA, foco por teclado)
- 🌐 Suporta múltiplos idiomas

---

## 🔗 Links Úteis

- 📺 **[Ver Demo Online](https://SEU-USUARIO.github.io/NOME-DO-REPO/)** ← Clique aqui!
- 📦 **[Pacote WordPress/Elementor](../ELEMENTOR_TEMPLATE_PACKAGE/)** - Pronto para importar
- 📚 **[Documentação Completa](../wordpress-integration/)** - Guias de integração

---

## 🚀 Quick Start

### Opção 1: Ver Online (mais rápido)
👉 [Acesse a demo](https://SEU-USUARIO.github.io/NOME-DO-REPO/)

### Opção 2: Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# Entre na pasta docs
cd NOME-DO-REPO/docs

# Abra o index.html no navegador
open index.html
# ou
python -m http.server 8000
```

---

## 📂 Estrutura dos Arquivos

```
docs/
├── index.html                    ← Página demo (standalone)
├── nuclea-menu.css              ← Estilos do menu
├── nuclea-menu-vanilla.js       ← JavaScript principal
└── README.md                    ← Este arquivo
```

---

## 🎨 Customização

O menu usa **CSS Variables** para fácil personalização:

```css
:root {
  --nuclea-primary: #BA82FF;       /* Cor primária */
  --nuclea-primary-dark: #8311DA;  /* Cor primária escura */
  --nuclea-accent: #66FFCC;        /* Cor de destaque */
  --nuclea-hover-bg: #EFD3FF;      /* Background hover */
  --nuclea-border: #E3E3E3;        /* Cor das bordas */
}
```

**Exemplo de personalização:**

```css
/* Tema azul */
:root {
  --nuclea-primary: #3B82F6;
  --nuclea-primary-dark: #1E40AF;
  --nuclea-accent: #60A5FA;
  --nuclea-hover-bg: #DBEAFE;
}
```

---

## 🔧 Integração WordPress

Para usar este menu no WordPress/Elementor:

### 1️⃣ **Via Elementor Template (Recomendado)**

```bash
# 1. Baixe o pacote completo
cd ELEMENTOR_TEMPLATE_PACKAGE/

# 2. Siga as instruções do LEIA_PRIMEIRO.md
# 3. Importe o JSON no Elementor
# 4. Pronto! Menu funcionando em 15 minutos ⚡
```

📖 **[Guia completo de importação →](../ELEMENTOR_TEMPLATE_PACKAGE/LEIA_PRIMEIRO.md)**

### 2️⃣ **Via Shortcode**

```php
// functions.php
function nuclea_menu_enqueue() {
    wp_enqueue_style('nuclea-menu', get_template_directory_uri() . '/assets/nuclea-menu.css');
    wp_enqueue_script('nuclea-menu', get_template_directory_uri() . '/assets/nuclea-menu-vanilla.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'nuclea_menu_enqueue');

function nuclea_menu_shortcode() {
    ob_start();
    include get_template_directory() . '/templates/nuclea-menu.php';
    return ob_get_clean();
}
add_shortcode('nuclea_mega_menu', 'nuclea_menu_shortcode');
```

```html
<!-- Usar no Elementor -->
[nuclea_mega_menu]
```

---

## 📊 Estrutura dos Dados

O menu usa uma estrutura JSON hierárquica:

```javascript
window.nucleaMenuData = {
  "Soluções": {
    "Financeiro": {
      "Inteligência de Dados": {
        "Gestão de Crédito": [
          "Scores e Indicadores",
          "Relatório de Histórico"
        ]
      }
    }
  },
  "Documentos": {
    "Documentos de Soluções": [
      "Regulatório",
      "Matriz de Sistemas"
    ]
  }
};
```

**Níveis suportados:**
- Nível 1: Menu principal
- Nível 2: Categorias
- Nível 3: Subcategorias
- Nível 4: Itens finais

---

## 🧪 Como Testar

1. **Clique em qualquer item do menu** (Soluções, Documentos, etc.)
2. **Navegue pelos subitens** nas colunas
3. **Clique fora** para fechar o menu
4. **Observe as animações** e estados de hover
5. **Teste responsividade** redimensionando a janela

---

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variables
- **Vanilla JavaScript** - Sem frameworks ou libs
- **SVG** - Ícones vetoriais inline

**Compatibilidade:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 📝 Licença

MIT License - Livre para uso pessoal e comercial.

---

## 🤝 Contribuindo

Encontrou algum bug? Tem sugestões?

1. 🐛 [Abra uma issue](https://github.com/SEU-USUARIO/NOME-DO-REPO/issues)
2. 🔀 Faça um fork
3. ✨ Crie uma branch: `git checkout -b minha-feature`
4. 💾 Commit: `git commit -m 'Adiciona nova feature'`
5. 📤 Push: `git push origin minha-feature`
6. 🎉 Abra um Pull Request

---

## 📞 Suporte

- 📧 Email: contato@nuclea.com.br
- 🌐 Site: [nuclea.com.br](https://nuclea.com.br)
- 💬 Issues: [GitHub Issues](https://github.com/SEU-USUARIO/NOME-DO-REPO/issues)

---

## 🎯 Roadmap

- [ ] Modo escuro (dark mode)
- [ ] Menu mobile/hambúrguer
- [ ] Temas pré-definidos
- [ ] Animações customizáveis
- [ ] Suporte a ícones customizados
- [ ] Integração com outros page builders

---

## 📸 Screenshots

*Em breve...*

---

<div align="center">

**Desenvolvido com ❤️ pela equipe Nuclea**

[⬆ Voltar ao topo](#-nuclea-mega-menu---demo-online)

</div>
