# 📥 Como Importar o Template do Menu no Elementor

## 🎯 Guia Rápido de Importação

Este guia explica como importar o template JSON do Nuclea Mega Menu diretamente no Elementor.

---

## 📋 Pré-requisitos

- ✅ WordPress instalado
- ✅ Elementor instalado (Free ou Pro)
- ✅ Arquivo `elementor-template.json` baixado
- ✅ Arquivo `nuclea-menu-vanilla.js` na pasta `/assets/`

---

## 🚀 Método 1: Importar Template no Elementor

### **Passo 1: Acessar Templates**

1. No admin do WordPress, vá em **Templates → Saved Templates**
2. Ou acesse: **Elementor → My Templates**

### **Passo 2: Importar Template**

1. Clique no botão **Import Templates** (ícone de upload)
2. Selecione o arquivo `elementor-template.json`
3. Clique em **Import Now**
4. Aguarde a confirmação de sucesso

### **Passo 3: Usar o Template**

1. Edite a página onde quer o menu (ex: Header)
2. Clique no ícone de **pasta** (Add Template)
3. Encontre o template **"Nuclea Mega Menu"**
4. Clique em **Insert**

---

## 🔧 Método 2: Copiar e Colar (Alternativo)

Se a importação JSON não funcionar, use este método:

### **Passo 1: Criar Seção no Elementor**

1. No editor Elementor, adicione uma nova **Section**
2. Estrutura: **1 coluna** (100%)

### **Passo 2: Adicionar Widgets HTML**

Adicione **3 widgets HTML** na seguinte ordem:

#### **Widget 1: HTML do Menu**
```
Título: Nuclea Mega Menu
```
Cole o HTML completo (está no arquivo `elementor-template.json` dentro do campo "html" do primeiro widget)

#### **Widget 2: CSS**
```
Título: Nuclea Menu CSS
```
Cole o CSS completo (do segundo widget no JSON)

#### **Widget 3: JavaScript + Dados**
```
Título: Nuclea Menu Data
```
Cole o JavaScript + JSON de dados (do terceiro widget)

---

## ⚙️ Configuração Adicional

### **IMPORTANTE: Carregar JavaScript Principal**

O template inclui referência ao arquivo `nuclea-menu-vanilla.js`. Você DEVE:

**Opção A: Via WPCode (Recomendado)**

1. Instale plugin **WPCode**
2. Vá em **Code Snippets → Add Snippet**
3. Escolha **Add Your Custom Code**
4. Tipo: **PHP Snippet**
5. Cole:

```php
function nuclea_enqueue_menu_js() {
    wp_enqueue_script(
        'nuclea-menu-js',
        get_stylesheet_directory_uri() . '/assets/nuclea-menu-vanilla.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'nuclea_enqueue_menu_js');
```

6. Ative o snippet

**Opção B: Via functions.php**

Adicione ao `functions.php` do seu tema:

```php
function nuclea_enqueue_menu_js() {
    wp_enqueue_script(
        'nuclea-menu-js',
        get_stylesheet_directory_uri() . '/assets/nuclea-menu-vanilla.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'nuclea_enqueue_menu_js');
```

---

## 🎨 Personalização Após Importação

### **1. Trocar Logo**

No Widget HTML do menu, localize:

```html
<img src="/wp-content/themes/seu-tema/assets/images/logo-nuclea.png" alt="Núclea">
```

Troque pelo caminho do seu logo.

### **2. Ajustar Cores**

No Widget CSS, edite as variáveis:

```css
:root {
  --nuclea-primary: #BA82FF;        /* Cor roxa principal */
  --nuclea-primary-dark: #8311DA;   /* Roxo escuro */
  --nuclea-accent: #66FFCC;         /* Verde água (CTA) */
  --nuclea-hover-bg: #EFD3FF;       /* Fundo do hover */
  --nuclea-border: #E3E3E3;         /* Cor das bordas */
}
```

### **3. Editar Itens do Menu**

No Widget JavaScript, edite o objeto `window.nucleaMenuData`:

```javascript
window.nucleaMenuData = {
  "Seu Menu": {
    "Categoria": [
      "Item 1",
      "Item 2"
    ]
  }
};
```

---

## 📂 Estrutura de Arquivos Necessária

```
/wp-content/themes/seu-tema/
└── assets/
    ├── nuclea-menu-vanilla.js    # JavaScript principal (OBRIGATÓRIO)
    └── images/
        └── logo-nuclea.png       # Seu logo
```

---

## ✅ Checklist Pós-Importação

- [ ] Template importado com sucesso
- [ ] Menu aparece na página
- [ ] JavaScript `nuclea-menu-vanilla.js` carregado
- [ ] Logo substituído pelo real
- [ ] Cores personalizadas (opcional)
- [ ] Itens do menu editados (opcional)
- [ ] Menu abre ao clicar
- [ ] Navegação entre colunas funciona
- [ ] Sem erros no console (F12)

---

## 🐛 Troubleshooting

### **Menu não aparece**
✅ Verifique se importou o template corretamente  
✅ Certifique-se que a seção está visível (não oculta)

### **Menu abre mas não funciona**
✅ Verifique se `nuclea-menu-vanilla.js` está carregado  
✅ Abra Console (F12) e veja se há erros JavaScript

### **Estilos quebrados**
✅ Limpe cache do navegador (Ctrl+F5)  
✅ Limpe cache do WordPress  
✅ Verifique se o CSS está no widget

### **Dados do menu vazios**
✅ Verifique se o objeto `window.nucleaMenuData` está definido  
✅ Valide o JSON em jsonlint.com

---

## 🎯 Vantagens do Template JSON

- ✅ Importação rápida (1 clique)
- ✅ Todos os widgets já configurados
- ✅ HTML, CSS e JS inclusos
- ✅ Estrutura correta garantida
- ✅ Reutilizável em múltiplas páginas

---

## 📝 Notas Importantes

### **Sobre o Template:**
- Template criado para Elementor Free (compatível com Pro)
- Usa 3 widgets HTML nativos do Elementor
- Não requer plugins adicionais (exceto WPCode recomendado)

### **Limitações:**
- Menu mobile não incluído (desktop only)
- Links precisam ser adicionados manualmente
- Fontes ABC Favorit precisam ser instaladas à parte

### **Alternativa ao Template:**
Se preferir não usar o template JSON, você pode usar o **shortcode**:
```
[nuclea_mega_menu]
```
(Requer código no functions.php - veja INSTRUCTIONS.md)

---

## 🔄 Atualizações

### **Para atualizar o menu:**

1. **Dados (itens do menu):**
   - Edite o Widget JavaScript no Elementor
   - Modifique `window.nucleaMenuData`
   - Salve a página

2. **Estilos:**
   - Edite o Widget CSS no Elementor
   - Modifique as variáveis ou regras CSS
   - Salve a página

3. **Estrutura HTML:**
   - Edite o Widget HTML no Elementor
   - Modifique conforme necessário
   - Salve a página

---

## 🆘 Suporte

### **Recursos:**
- `INSTRUCTIONS.md` - Guia detalhado
- `QUICK_START.md` - Resumo rápido
- `CHECKLIST.md` - Lista de verificação

### **Arquivos do Pacote:**
- `elementor-template.json` - Este template
- `nuclea-menu-vanilla.js` - JavaScript (OBRIGATÓRIO)
- `menu-data.json` - Dados alternativos (se usar método PHP)
- `nuclea-menu.css` - CSS alternativo (se usar método PHP)

---

## 📊 Comparação de Métodos

| Método | Dificuldade | Tempo | Flexibilidade |
|--------|-------------|-------|---------------|
| **Import Template JSON** | ⭐ Fácil | 5 min | ⭐⭐ Média |
| **Shortcode (functions.php)** | ⭐⭐ Média | 15 min | ⭐⭐⭐ Alta |
| **Widget HTML Manual** | ⭐⭐⭐ Difícil | 30 min | ⭐⭐⭐ Alta |

**Recomendação:** Use o **Import Template JSON** para começar rápido!

---

## ✨ Próximos Passos

1. ✅ Importe o template
2. ✅ Carregue o JavaScript
3. ✅ Personalize cores e logo
4. ✅ Teste o menu
5. ✅ Publique!

---

**Criado em:** 21 de outubro de 2025  
**Versão:** 1.0.0  
**Compatível com:** Elementor Free & Pro

---

**Boa sorte com a importação! 🚀**

Se tiver dúvidas, consulte os outros arquivos de documentação ou entre em contato com o desenvolvedor.
