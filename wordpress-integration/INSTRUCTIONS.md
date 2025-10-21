# 📖 Instruções de Instalação - Nuclea Mega Menu WordPress

## 🎯 Objetivo

Este guia irá ajudá-lo a integrar o Nuclea Mega Menu em um site WordPress com Elementor.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ WordPress 6.0 ou superior
- ✅ Elementor instalado e ativado (versão gratuita serve)
- ✅ Tema WordPress ativo (recomendado: tema child)
- ✅ Acesso FTP ou gerenciador de arquivos do cPanel
- ✅ Plugin WPCode ou Code Snippets (para adicionar código customizado)

---

## 📦 Estrutura de Arquivos

Faça upload dos seguintes arquivos para o seu servidor:

```
/wp-content/themes/seu-tema/
├── assets/
│   ├── menu-data.json           # Dados do menu
│   ├── nuclea-menu-vanilla.js   # JavaScript
│   ├── nuclea-menu.css          # Estilos (você criará este)
│   └── images/
│       └── logo-nuclea.png      # Logo (substitua pelo real)
```

---

## 🚀 Método 1: Usando Shortcode (RECOMENDADO)

### **Passo 1: Upload dos Arquivos**

1. Conecte-se via FTP ao seu site
2. Navegue até `/wp-content/themes/seu-tema/`
3. Crie a pasta `assets` se não existir
4. Faça upload de:
   - `menu-data.json`
   - `nuclea-menu-vanilla.js`

### **Passo 2: Adicionar Código ao functions.php**

**ATENÇÃO:** Sempre faça backup antes de editar `functions.php`!

1. Acesse **Aparência → Editor de Arquivos do Tema**
2. Selecione `functions.php` (se usar tema child, use o functions.php do child)
3. Abra o arquivo `functions-wordpress.php` deste pacote
4. **Copie TODO o conteúdo** (exceto a primeira linha `<?php`)
5. **Cole no FINAL** do seu `functions.php`
6. Clique em **Atualizar Arquivo**

### **Passo 3: Criar arquivo CSS**

1. Crie um novo arquivo chamado `nuclea-menu.css` na pasta `assets`
2. Adicione o seguinte conteúdo:

```css
/* NUCLEA MEGA MENU - ESTILOS */

.nuclea-mega-menu-wrapper {
  position: relative;
  font-family: 'ABC Favorit Variable', system-ui, sans-serif;
}

.nuclea-top-bar {
  width: 100%;
  background-color: #000;
}

.nuclea-header {
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #E3E3E3;
  z-index: 50;
}

/* Estilos dos botões do menu */
.menu-item-button {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.menu-item-button:hover,
.menu-item-button.active {
  color: #BA82FF;
}

/* Estilos das colunas do mega menu */
.nuclea-menu-column {
  width: 282px;
  flex-shrink: 0;
  background-color: #fff;
  border: 1px solid #E3E3E3;
  box-shadow: 3px 0px 4px 0px rgba(0, 0, 0, 0.16);
}

.nuclea-menu-item {
  cursor: pointer;
  transition: background-color 0.2s;
}

.nuclea-menu-item:hover:not(.active) {
  background-color: #f9fafb;
}

.nuclea-menu-item.active {
  background-color: #EFD3FF;
}

/* Responsividade */
@media (max-width: 768px) {
  .nuclea-header {
    display: none; /* Implementar menu mobile separadamente */
  }
}
```

3. Salve o arquivo

### **Passo 4: Usar no Elementor**

1. Edite a página onde quer o menu (geralmente Header/Topo)
2. Adicione um widget **Shortcode** do Elementor
3. Digite: `[nuclea_mega_menu]`
4. Publique a página

---

## 🎨 Método 2: Widget HTML do Elementor

### **Passo 1: Preparar o HTML**

1. Abra o arquivo `functions-wordpress.php`
2. Copie todo o HTML entre `ob_start();` e `return ob_get_clean();`

### **Passo 2: Adicionar no Elementor**

1. No Elementor, adicione um widget **HTML**
2. Cole o código HTML copiado
3. Salve

### **Passo 3: Adicionar CSS**

1. Vá em **Elementor → Custom CSS** (ou no Customizer do tema)
2. Cole o CSS fornecido acima

### **Passo 4: Adicionar JavaScript**

**Opção A: Via WPCode (Recomendado)**

1. Instale o plugin **WPCode**
2. Vá em **Code Snippets → Add Snippet**
3. Escolha **Add Your Custom Code**
4. Tipo: **JavaScript**
5. Cole o conteúdo de `nuclea-menu-vanilla.js`
6. Localização: **Site Wide Footer**
7. Ative o snippet

**Opção B: Via functions.php**

```php
function nuclea_add_inline_js() {
    ?>
    <script>
    // Cole aqui o conteúdo de nuclea-menu-vanilla.js
    </script>
    <?php
}
add_action('wp_footer', 'nuclea_add_inline_js');
```

---

## 🔧 Configuração dos Dados do Menu

### **Editar Itens do Menu**

1. Abra `menu-data.json`
2. Edite a estrutura conforme necessário
3. Formato:

```json
{
  "Nome do Menu": {
    "Categoria": {
      "Subcategoria": [
        "Item 1",
        "Item 2"
      ]
    }
  }
}
```

### **Adicionar Links**

Por padrão, os itens não têm links. Para adicionar:

1. Modifique o JavaScript (`nuclea-menu-vanilla.js`)
2. Na função `renderColumn`, onde está `<li>`, adicione:

```javascript
<a href="${getItemUrl(item)}">
  ${item}
</a>
```

3. Crie a função `getItemUrl`:

```javascript
function getItemUrl(item) {
  // Mapeamento de itens para URLs
  const urls = {
    "Scores e Indicadores": "/solucoes/scores-indicadores",
    "Blog": "/blog",
    // ... adicione mais conforme necessário
  };
  return urls[item] || '#';
}
```

---

## 🎨 Personalização

### **Alterar Cores**

No CSS, modifique as variáveis:

```css
:root {
  --nuclea-primary: #BA82FF;
  --nuclea-accent: #66FFCC;
  --nuclea-hover: #EFD3FF;
  --nuclea-border: #E3E3E3;
}
```

Use estas variáveis no código:

```css
.menu-item-button:hover {
  color: var(--nuclea-primary);
}
```

### **Alterar Fontes**

Se não tiver as fontes ABC Favorit:

1. Remova as referências no CSS
2. Use fontes do Google Fonts ou do sistema:

```css
font-family: 'Inter', 'Roboto', system-ui, sans-serif;
```

### **Ajustar Larguras**

No JavaScript, procure por `width: 282px` e altere conforme necessário.

---

## 📱 Responsividade (Mobile)

O menu atual é otimizado para desktop. Para mobile:

### **Opção 1: Ocultar no Mobile**

```css
@media (max-width: 768px) {
  .nuclea-mega-menu-wrapper {
    display: none;
  }
}
```

### **Opção 2: Menu Hambúrguer**

Você precisará criar um menu mobile separado ou usar o menu padrão do tema.

**Recomendação:** Use o Mobile Menu do Elementor ou um plugin como **WP Mobile Menu**.

---

## 🔍 Troubleshooting

### **Menu não aparece**

1. ✅ Verifique se o JavaScript está carregado (F12 → Console)
2. ✅ Certifique-se que `menu-data.json` está acessível
3. ✅ Verifique se há erros no console do navegador

### **Estilos não aplicados**

1. ✅ Limpe cache do navegador (Ctrl+F5)
2. ✅ Limpe cache do WordPress (se tiver plugin de cache)
3. ✅ Verifique se o CSS foi salvo corretamente

### **Dados do menu vazios**

1. ✅ Verifique o caminho do `menu-data.json` no `functions.php`
2. ✅ Certifique-se que o JSON é válido (use jsonlint.com)
3. ✅ Verifique permissões de arquivo (644)

### **Conflitos com outros plugins**

1. ✅ Desative outros plugins temporariamente para identificar conflito
2. ✅ Verifique se há conflitos de jQuery
3. ✅ Use prefixos únicos nas classes CSS

---

## 🌍 Multi-idioma

### **Com WPML**

1. Traduza `menu-data.json` para cada idioma:
   - `menu-data-en.json`
   - `menu-data-es.json`

2. Modifique o `functions.php`:

```php
$current_lang = apply_filters('wpml_current_language', null);
$menu_data_path = get_stylesheet_directory() . '/assets/menu-data-' . $current_lang . '.json';
```

### **Com Polylang**

Similar ao WPML, mas use:

```php
$current_lang = pll_current_language();
```

---

## ⚡ Otimização de Performance

### **1. Minificar JavaScript**

Use ferramentas como:
- https://javascript-minifier.com/
- https://www.minifier.org/

### **2. Lazy Loading**

Carregue o menu apenas quando necessário:

```javascript
// Carregar só quando hover no header
header.addEventListener('mouseenter', function() {
  loadNucleaMenu();
}, { once: true });
```

### **3. Cache**

Use plugins de cache como:
- WP Rocket
- W3 Total Cache
- Autoptimize

---

## 📚 Recursos Adicionais

### **Documentação**
- [Elementor Developers](https://developers.elementor.com/)
- [WordPress Codex](https://codex.wordpress.org/)

### **Ferramentas Úteis**
- [JSON Validator](https://jsonlint.com/)
- [CSS Minifier](https://cssminifier.com/)
- [Can I Use](https://caniuse.com/) - Verificar compatibilidade

---

## 🆘 Suporte

### **Checklist Final**

Antes de solicitar suporte, verifique:

- [ ] WordPress atualizado
- [ ] Tema child ativo
- [ ] Arquivos no caminho correto
- [ ] Permissões de arquivo corretas (644)
- [ ] Cache limpo
- [ ] Console sem erros JavaScript
- [ ] Shortcode correto

### **Informações para Suporte**

Ao pedir ajuda, forneça:

1. Versão do WordPress
2. Tema usado
3. Plugins ativos
4. Mensagem de erro (se houver)
5. Screenshot do problema
6. Link do site (se possível)

---

## 📝 Changelog

### **Versão 1.0.0** (21/10/2025)
- ✨ Lançamento inicial
- ✅ Suporte a WordPress 6.0+
- ✅ Integração com Elementor
- ✅ Menu hierárquico multi-nível
- ✅ Responsivo (desktop)

---

## 📄 Licença

Este código é fornecido "como está" sem garantias. Use por sua conta e risco.

---

## 👨‍💻 Créditos

**Desenvolvido por:** Nuclea  
**Conversão WordPress:** [Seu Nome]  
**Data:** 21 de outubro de 2025

---

**Boa sorte com a implementação! 🚀**

Para dúvidas adicionais, consulte o arquivo `GUIA_CONVERSAO_WORDPRESS.md` na raiz do projeto.
