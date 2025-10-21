# 🎯 GUIA VISUAL RÁPIDO - Importação Elementor

## ⚡ 3 Passos para Ter o Menu Funcionando

---

## PASSO 1️⃣: Preparar Arquivos (5 minutos)

### **Upload via FTP/cPanel:**

```
📁 /wp-content/themes/seu-tema/assets/
    └── 📄 nuclea-menu-vanilla.js    ← COPIAR ESTE ARQUIVO
```

✅ **Verificação:** Acesse no navegador:
```
https://seusite.com/wp-content/themes/seu-tema/assets/nuclea-menu-vanilla.js
```
Deve mostrar o código JavaScript (não erro 404)

---

## PASSO 2️⃣: Importar Template (2 minutos)

### **No WordPress Admin:**

```
1. Templates → Saved Templates
   │
2. Clique em "Import Templates" 📤
   │
3. Escolha: elementor-template.json
   │
4. Clique "Import Now"
   │
5. ✅ Sucesso!
```

### **Resultado Esperado:**
- Mensagem: "Template imported successfully"
- Novo template na lista: **"Nuclea Mega Menu"**

---

## PASSO 3️⃣: Inserir na Página (3 minutos)

### **No Editor Elementor:**

```
1. Edite sua página/header
   │
2. Clique no ícone de pasta 📁 (Add Template)
   │
3. Encontre "Nuclea Mega Menu"
   │
4. Clique "Insert"
   │
5. Clique "Publish"
   │
6. ✅ Pronto!
```

---

## ⚙️ CONFIGURAÇÃO FINAL (Obrigatória!)

### **Carregar JavaScript Principal:**

**Via WPCode (Recomendado):**

```
WordPress Admin
└── Code Snippets
    └── Add Snippet
        └── Add Your Custom Code (PHP)
            └── Cole o código abaixo ⬇️
```

**Código para WPCode:**
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

Ative o snippet ✅

---

## 🎨 PERSONALIZAÇÃO RÁPIDA

### **Trocar Logo:**

No template importado, edite o Widget HTML:

```html
ANTES:
<img src="/wp-content/themes/seu-tema/assets/images/logo-nuclea.png">

DEPOIS:
<img src="/wp-content/uploads/2025/10/meu-logo.png">
```

### **Mudar Cores:**

No template importado, edite o Widget CSS:

```css
:root {
  --nuclea-primary: #SUA_COR_PRINCIPAL;
  --nuclea-accent: #SUA_COR_CTA;
}
```

### **Editar Itens do Menu:**

No template importado, edite o Widget JavaScript:

```javascript
window.nucleaMenuData = {
  "Seu Menu": {
    "Categoria": ["Item 1", "Item 2"]
  }
};
```

---

## ✅ CHECKLIST DE VERIFICAÇÃO

Após importar, verifique:

- [ ] ✅ Menu aparece na página
- [ ] ✅ Ao clicar em "Soluções", abre dropdown
- [ ] ✅ Navegação entre colunas funciona
- [ ] ✅ Clique fora fecha o menu
- [ ] ✅ Sem erros no Console (F12)
- [ ] ✅ Logo correto aparece
- [ ] ✅ Cores conforme desejado

---

## 🐛 SE ALGO NÃO FUNCIONAR

### **Menu não abre ao clicar:**
```
1. Abra Console do navegador (F12)
2. Veja se há erro relacionado a "nuclea"
3. Verifique se nuclea-menu-vanilla.js carregou:
   - Vá em Network → JS
   - Procure por "nuclea-menu-vanilla.js"
```

### **Solução:**
- Certifique-se que o script está enfileirado (Passo 3)
- Verifique caminho do arquivo no código PHP

---

### **Menu aparece mas sem estilo:**
```
1. Ctrl+F5 para limpar cache
2. Limpe cache do WordPress (se tiver plugin)
3. Verifique se o Widget CSS está no template
```

---

### **Template não importa:**
```
Alternativa: Método Manual
1. Crie nova seção no Elementor
2. Adicione 3 widgets HTML
3. Copie conteúdo de elementor-template.json:
   - Widget 1: HTML do menu
   - Widget 2: CSS
   - Widget 3: JavaScript
```

---

## 📊 FLUXO VISUAL

```
📥 PREPARAÇÃO
│
├── Upload: nuclea-menu-vanilla.js → /assets/
│
▼
📦 IMPORTAÇÃO
│
├── Import: elementor-template.json
├── Template salvo no Elementor
│
▼
🎨 INSERÇÃO
│
├── Editar página
├── Add Template → "Nuclea Mega Menu"
├── Publish
│
▼
⚙️ CONFIGURAÇÃO
│
├── WPCode → Enfileirar JS
├── Ativar snippet
│
▼
✅ TESTE
│
├── Abrir site
├── Clicar no menu
├── Verificar funcionamento
│
▼
🎉 PRONTO!
```

---

## ⏱️ TEMPO TOTAL ESTIMADO

| Etapa | Tempo |
|-------|-------|
| Upload de arquivo | 2 min |
| Importar template | 2 min |
| Inserir na página | 3 min |
| Configurar JavaScript | 5 min |
| Testar | 3 min |
| **TOTAL** | **15 min** ⚡ |

---

## 🎯 RESULTADO ESPERADO

Ao finalizar, você terá:

✅ Menu mega hierárquico funcional  
✅ 5 itens principais (Soluções, Documentos, etc.)  
✅ Até 4 colunas de navegação  
✅ Animações suaves  
✅ Hover states  
✅ Seletor de idiomas  
✅ Botão CTA "Fale com Especialista"  

---

## 📞 PRÓXIMOS PASSOS

Após importação bem-sucedida:

1. ✅ Personalize cores
2. ✅ Troque logo
3. ✅ Edite itens do menu
4. ✅ Adicione links (opcional)
5. ✅ Configure menu mobile (opcional)

---

## 📚 DOCUMENTAÇÃO COMPLETA

Para detalhes completos, consulte:

- **`ELEMENTOR_IMPORT_GUIDE.md`** - Guia detalhado de importação
- **`INSTRUCTIONS.md`** - Instruções completas
- **`QUICK_START.md`** - Visão geral do pacote
- **`CHECKLIST.md`** - Checklist fase por fase

---

## 💡 DICAS PRO

### **Dica 1: Teste Primeiro**
Antes de importar no site real:
- Teste em ambiente staging
- Use `demo-standalone.html` para ver funcionamento

### **Dica 2: Backup**
Sempre faça backup antes:
- Backup do site WordPress
- Backup do banco de dados

### **Dica 3: Cache**
Após mudanças, sempre limpe:
- Cache do navegador (Ctrl+F5)
- Cache do WordPress
- Cache do servidor/CDN

---

**Criado em:** 21 de outubro de 2025  
**Versão:** 1.0.0  

---

**🚀 BOA SORTE COM A IMPORTAÇÃO!**

*Este é o caminho mais rápido - em 15 minutos você tem o menu funcionando!*
