# 📦 Pacote de Integração WordPress/Elementor

## 📁 Conteúdo deste Diretório

Este diretório contém todos os arquivos necessários para integrar o Menu Nuclea em um site WordPress com Elementor.

### Arquivos Incluídos:

1. **`elementor-template.json`** - ⭐ Template para importar direto no Elementor
2. **`menu-data.json`** - Estrutura completa de dados do menu
3. **`nuclea-menu-vanilla.js`** - JavaScript puro (sem React)
4. **`nuclea-menu.css`** - Estilos completos
5. **`functions-wordpress.php`** - Código para functions.php do tema
6. **`ELEMENTOR_IMPORT_GUIDE.md`** - 📖 Guia de importação no Elementor
7. **`INSTRUCTIONS.md`** - Instruções passo a passo detalhadas
8. **`demo-standalone.html`** - Demo para testar antes de integrar

---

## 🚀 Como Usar

### **Opção A: Importar Template JSON no Elementor (MAIS RÁPIDO!)** ⭐

1. No WordPress, vá em **Templates → Saved Templates**
2. Clique em **Import Templates**
3. Selecione `elementor-template.json`
4. Importe e use na sua página!

📖 **Leia:** `ELEMENTOR_IMPORT_GUIDE.md` para detalhes completos

### **Opção B: Widget HTML do Elementor (Mais Simples)**

1. No Elementor, adicione widgets **HTML**
2. Cole HTML, CSS e JavaScript dos arquivos
3. Adicione `nuclea-menu-vanilla.js` via WPCode

### **Opção C: Shortcode WordPress (Mais Profissional)**

1. Adicione o código de `functions-wordpress.php` ao `functions.php` do seu tema
2. Use o shortcode `[nuclea_mega_menu]` onde desejar
3. O CSS e JS serão carregados automaticamente

---

## 📋 Checklist de Instalação

- [ ] WordPress 6.0+ instalado
- [ ] Elementor instalado e ativado
- [ ] Plugin WPCode ou Code Snippets instalado
- [ ] Tema child ativo (recomendado)
- [ ] Arquivos deste diretório baixados

---

## 🆘 Suporte

Para dúvidas técnicas:
1. Consulte `GUIA_CONVERSAO_WORDPRESS.md` na raiz do projeto
2. Verifique `instructions.md` neste diretório
3. Entre em contato com o desenvolvedor original

---

**Versão:** 1.0  
**Compatibilidade:** WordPress 6.0+, Elementor 3.0+  
**Última atualização:** 21 de outubro de 2025
