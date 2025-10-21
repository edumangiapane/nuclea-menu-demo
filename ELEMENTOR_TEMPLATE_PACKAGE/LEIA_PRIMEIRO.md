# 🎯 NUCLEA MEGA MENU - Elementor Template Package

## 📦 O QUE É ESTE PACOTE?

Este é o **pacote pronto para importar** o Nuclea Mega Menu no Elementor.

**Tempo de implementação: 15-20 minutos** ⚡

---

## 📁 ARQUIVOS INCLUSOS

```
ELEMENTOR_TEMPLATE_PACKAGE/
├── 📄 elementor-template.json       ⭐ Template para importar no Elementor
├── 📄 nuclea-menu-vanilla.js        ⚙️ JavaScript principal (OBRIGATÓRIO)
├── 📖 LEIA_PRIMEIRO.md              🎯 Este arquivo - Comece aqui!
├── 📖 VISUAL_GUIDE.md               ⚡ Guia rápido (3 passos - 15 min)
└── 📖 ELEMENTOR_IMPORT_GUIDE.md     📚 Guia completo e detalhado
```

**Total: 5 arquivos** - Tudo que você precisa! ✅

---

## 🚀 COMEÇAR AGORA - 3 PASSOS

### **PASSO 1: Upload do JavaScript (2 min)**

Faça upload do arquivo `nuclea-menu-vanilla.js` para:

```
/wp-content/themes/seu-tema/assets/nuclea-menu-vanilla.js
```

✅ **Teste:** Acesse no navegador:
```
https://seusite.com/wp-content/themes/seu-tema/assets/nuclea-menu-vanilla.js
```
Deve mostrar o código (não erro 404)

---

### **PASSO 2: Importar Template (3 min)**

1. No WordPress, vá em **Templates → Saved Templates**
2. Clique em **"Import Templates"** (ícone de upload 📤)
3. Selecione o arquivo: `elementor-template.json`
4. Clique em **"Import Now"**
5. ✅ Aguarde confirmação de sucesso

---

### **PASSO 3: Inserir na Página (2 min)**

1. Edite sua página/header no Elementor
2. Clique no ícone de **pasta 📁** (Add Template)
3. Procure por **"Nuclea Mega Menu"**
4. Clique em **"Insert"**
5. Clique em **"Publish"**

---

### **PASSO 4: Configurar JavaScript (5 min) - OBRIGATÓRIO!**

**Opção A: Via Plugin WPCode (Recomendado)**

1. Instale plugin: **WPCode** (gratuito)
2. Vá em **Code Snippets → Add Snippet**
3. Escolha **"Add Your Custom Code (New Snippet)"**
4. Selecione tipo: **PHP Snippet**
5. Cole o código abaixo:

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

6. Título: "Nuclea Menu JS"
7. Clique em **"Save Snippet"** e **Ative** ✅

**Opção B: Via functions.php**

Adicione o código acima ao arquivo `functions.php` do seu tema child.

---

## ✅ PRONTO! TESTE O MENU

1. Abra seu site
2. Clique em "Soluções" no menu
3. Deve abrir o mega menu com colunas
4. Navegue pelos subitens
5. Clique fora para fechar

**Funciona? Parabéns! 🎉**

---

## 🎨 PERSONALIZAÇÃO RÁPIDA

### **Trocar Logo:**

1. No Elementor, edite o template "Nuclea Mega Menu"
2. Procure por: `<img src="/wp-content/themes/seu-tema/assets/images/logo-nuclea.png"`
3. Substitua pelo caminho do seu logo

### **Mudar Cores:**

1. No template, encontre o widget que contém o CSS
2. Edite as variáveis:

```css
:root {
  --nuclea-primary: #BA82FF;        /* Cor roxa principal */
  --nuclea-accent: #66FFCC;         /* Cor do botão verde */
  --nuclea-hover-bg: #EFD3FF;       /* Fundo do hover */
}
```

### **Editar Itens do Menu:**

1. No template, encontre o widget JavaScript
2. Edite o objeto `window.nucleaMenuData`:

```javascript
window.nucleaMenuData = {
  "Seu Menu": {
    "Categoria": ["Item 1", "Item 2"]
  }
};
```

---

## 📖 GUIAS DISPONÍVEIS

### **Para Começar Rápido:**
- ✅ **Este arquivo (LEIA_PRIMEIRO.md)** - Você está aqui!
- ✅ **VISUAL_GUIDE.md** - Guia visual com diagramas (15 min)

### **Para Detalhes Completos:**
- ✅ **ELEMENTOR_IMPORT_GUIDE.md** - Guia completo com troubleshooting

**Recomendação:** Leia este arquivo primeiro, depois consulte os outros se tiver dúvidas!

---

## 🐛 PROBLEMAS COMUNS

### **Menu não abre ao clicar:**

✅ Verifique se `nuclea-menu-vanilla.js` foi carregado:
- Abra Console (F12)
- Vá em "Network" → "JS"
- Procure por "nuclea-menu-vanilla.js"

✅ Se não encontrar:
- Verifique caminho no código PHP
- Certifique-se que o snippet WPCode está ativo

---

### **Menu sem estilo:**

✅ Limpe o cache:
- Ctrl+F5 no navegador
- Limpe cache do WordPress
- Limpe cache do CDN (se houver)

---

### **Template não importa:**

✅ Verifique versão do Elementor:
- Precisa Elementor 3.0 ou superior
- Funciona com Free ou Pro

✅ Alternativa:
- Use método manual (consulte ELEMENTOR_IMPORT_GUIDE.md)

---

## ⚙️ REQUISITOS

- ✅ WordPress 6.0+
- ✅ Elementor 3.0+ (Free ou Pro)
- ✅ PHP 7.4+
- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)

---

## 📊 O QUE VOCÊ TERÁ

Após implementar este template, seu site terá:

✅ **Menu mega hierárquico** com até 4 níveis  
✅ **5 itens principais** (Soluções, Documentos, Área Cliente, Núclea, Conteúdos)  
✅ **Navegação intuitiva** com hover states  
✅ **Animações suaves**  
✅ **Seletor de idiomas** (EN/ES)  
✅ **Botão CTA** "Fale com um Especialista"  
✅ **Design responsivo** (desktop)  

---

## ⏱️ CRONOGRAMA

| Tarefa | Tempo |
|--------|-------|
| Leitura deste guia | 5 min |
| Upload do JavaScript | 2 min |
| Importar template | 3 min |
| Inserir na página | 2 min |
| Configurar JS via WPCode | 5 min |
| Teste e verificação | 3 min |
| **TOTAL** | **20 min** |

---

## 🎯 CHECKLIST DE IMPLEMENTAÇÃO

- [ ] ✅ Li este arquivo (LEIA_PRIMEIRO.md)
- [ ] ✅ Upload de `nuclea-menu-vanilla.js` para `/assets/`
- [ ] ✅ Importei `elementor-template.json` no Elementor
- [ ] ✅ Inseri template "Nuclea Mega Menu" na página
- [ ] ✅ Configurei JavaScript via WPCode ou functions.php
- [ ] ✅ Testei o menu no site
- [ ] ✅ Menu abre e fecha corretamente
- [ ] ✅ Navegação entre colunas funciona
- [ ] ✅ Sem erros no Console (F12)
- [ ] ✅ Personalizei logo (opcional)
- [ ] ✅ Ajustei cores (opcional)

---

## 🆘 PRECISA DE AJUDA?

### **Consulte os guias:**
1. **VISUAL_GUIDE.md** - Guia com diagramas visuais
2. **ELEMENTOR_IMPORT_GUIDE.md** - Guia completo e detalhado

### **Troubleshooting:**
- Todos os guias incluem seção de resolução de problemas
- Console do navegador (F12) mostra erros JavaScript
- Verifique sempre se os caminhos dos arquivos estão corretos

---

## 💡 DICAS PRO

### **Dica 1: Ambiente de Teste**
Sempre teste primeiro em:
- Site de staging (se tiver)
- Ou em página não publicada

### **Dica 2: Backup**
Antes de começar:
- Backup do site WordPress
- Backup do banco de dados

### **Dica 3: Cache**
Após qualquer mudança:
- Limpe cache do navegador
- Limpe cache do WordPress
- Teste em janela anônima

---

## 🎁 INCLUSOS NESTE PACOTE

✅ **Template Elementor** completo e pronto  
✅ **JavaScript** otimizado (zero dependências)  
✅ **3 Guias** diferentes (rápido, visual, detalhado)  
✅ **Código comentado** para fácil entendimento  
✅ **Troubleshooting** para problemas comuns  

---

## 📝 PRÓXIMOS PASSOS

Após implementação bem-sucedida:

1. **Personalizar:**
   - Trocar logo
   - Ajustar cores
   - Editar itens do menu

2. **Adicionar Links:**
   - Criar mapeamento de URLs
   - Modificar JavaScript para adicionar links

3. **Mobile (Opcional):**
   - Implementar menu hambúrguer
   - Ou ocultar e usar menu do tema

4. **Multi-idioma (Opcional):**
   - Integrar com WPML/Polylang
   - Criar versões dos dados em outros idiomas

---

## ✨ RESULTADO FINAL

Ao completar este guia, você terá um **menu mega profissional** funcionando perfeitamente no Elementor!

**Menu funcionando = Missão cumprida! 🎉**

---

## 📞 INFORMAÇÕES TÉCNICAS

**Criado em:** 21 de outubro de 2025  
**Versão:** 1.0.0  
**Compatibilidade:** Elementor Free & Pro  
**Tamanho do JS:** ~15KB (não minificado)  
**Dependências:** Zero! (JavaScript puro)  

---

## 🚀 VAMOS LÁ!

**Está pronto para começar?**

1. 📖 Você já leu este arquivo ✅
2. ⚡ Agora siga os **3 Passos** acima
3. 🎉 Em 20 minutos terá o menu funcionando!

**BOA SORTE!** 🍀

---

*Tem dúvidas? Consulte os outros guias inclusos no pacote!*
