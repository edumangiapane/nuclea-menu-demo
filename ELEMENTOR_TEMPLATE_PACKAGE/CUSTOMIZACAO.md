# 🎨 GUIA DE CUSTOMIZAÇÃO RÁPIDA

## ⚡ Personalizações Mais Comuns

Este guia mostra como fazer as customizações mais frequentes no menu.

---

## 1️⃣ TROCAR O LOGO

### **Onde editar:**
No Elementor, edite o template "Nuclea Mega Menu" → Widget HTML (primeiro)

### **Procure por:**
```html
<img src="/wp-content/themes/seu-tema/assets/images/logo-nuclea.png" alt="Núclea">
```

### **Substitua por:**
```html
<img src="/wp-content/uploads/2025/10/meu-logo.png" alt="Minha Empresa">
```

### **Ajustar tamanho (se necessário):**
```html
<img src="URL_DO_SEU_LOGO" alt="Minha Empresa" style="width: 154px; height: 44px; object-fit: contain;">
```

---

## 2️⃣ MUDAR CORES

### **Onde editar:**
No Elementor, edite o template "Nuclea Mega Menu" → Widget CSS (segundo widget)

### **Variáveis disponíveis:**

```css
:root {
  --nuclea-primary: #BA82FF;        /* Cor roxa ao hover */
  --nuclea-primary-dark: #8311DA;   /* Roxo escuro (texto ativo) */
  --nuclea-accent: #66FFCC;         /* Verde do botão CTA */
  --nuclea-hover-bg: #EFD3FF;       /* Fundo roxo claro ao hover */
  --nuclea-border: #E3E3E3;         /* Cor das bordas */
}
```

### **Exemplo - Trocar para azul:**

```css
:root {
  --nuclea-primary: #4A90E2;        /* Azul claro */
  --nuclea-primary-dark: #2E5C8A;   /* Azul escuro */
  --nuclea-accent: #FFD166;         /* Amarelo (CTA) */
  --nuclea-hover-bg: #E3F2FD;       /* Fundo azul claro */
  --nuclea-border: #E3E3E3;         /* Bordas (manter) */
}
```

---

## 3️⃣ EDITAR ITENS DO MENU

### **Onde editar:**
No Elementor, edite o template "Nuclea Mega Menu" → Widget JavaScript (terceiro)

### **Procure por:**
```javascript
window.nucleaMenuData = {
  "Soluções": { ... },
  "Documentos": { ... },
  ...
};
```

### **Estrutura do JSON:**

```javascript
window.nucleaMenuData = {
  "Item Principal": {
    "Categoria": {
      "Subcategoria": [
        "Item Final 1",
        "Item Final 2"
      ]
    }
  }
};
```

### **Exemplo - Adicionar novo menu:**

```javascript
window.nucleaMenuData = {
  "Produtos": {
    "Categoria A": [
      "Produto 1",
      "Produto 2"
    ],
    "Categoria B": [
      "Produto 3",
      "Produto 4"
    ]
  },
  "Serviços": [
    "Consultoria",
    "Suporte",
    "Treinamento"
  ]
};
```

### **Níveis permitidos:**

- ✅ **Nível 1:** Item principal (ex: "Soluções")
- ✅ **Nível 2:** Categoria (ex: "Financeiro")
- ✅ **Nível 3:** Subcategoria (ex: "Inteligência de Dados")
- ✅ **Nível 4:** Itens finais (array de strings)

**Máximo:** 4 níveis

---

## 4️⃣ MUDAR TEXTO DO BOTÃO CTA

### **Onde editar:**
Template "Nuclea Mega Menu" → Widget HTML (primeiro)

### **Procure por:**
```html
<a href="#fale-com-especialista" ...>
  Fale com um Especialista
</a>
```

### **Substitua por:**
```html
<a href="#contato" ...>
  Entre em Contato
</a>
```

### **Mudar cor do botão:**
No CSS (segundo widget), procure:
```css
--nuclea-accent: #66FFCC;  /* Cor do botão */
```

---

## 5️⃣ ALTERAR IDIOMAS DISPONÍVEIS

### **Onde editar:**
Template "Nuclea Mega Menu" → Widget HTML (primeiro)

### **Adicionar Português:**

```html
<button class="lang-button">
  <span>PT</span>
  <div style="width: 18px; height: 12px;">
    <svg width="25" height="17" viewBox="0 0 25 17" fill="none">
      <rect width="25" height="17" fill="#009739"/>
      <rect x="8" width="9" height="17" fill="#FCD116"/>
      <circle cx="8" cy="8.5" r="3" fill="#012169"/>
    </svg>
  </div>
</button>
```

### **Remover idiomas:**
Simplesmente delete o botão correspondente no HTML.

---

## 6️⃣ AJUSTAR FONTES

### **Fontes atuais:**
- Fonte principal: `system-ui, -apple-system, sans-serif`
- Fallback automático para fonte do sistema

### **Usar Google Fonts:**

**Passo 1:** Adicione no CSS (segundo widget):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

.nuclea-mega-menu-wrapper {
  font-family: 'Inter', system-ui, sans-serif !important;
}
```

**Passo 2:** Atualize botões e elementos:

```css
.menu-item-button,
.nuclea-menu-item {
  font-family: 'Inter', system-ui, sans-serif !important;
}
```

---

## 7️⃣ ALTERAR LARGURA MÁXIMA

### **Onde editar:**
Template "Nuclea Mega Menu" → Widget HTML

### **Procure por:**
```html
style="max-width: 1128px; margin: 0 auto;"
```

### **Substitua por:**
```html
style="max-width: 1200px; margin: 0 auto;"
```

**Aplique em todos os lugares onde aparecer `1128px`**

---

## 8️⃣ MUDAR ALTURA DO HEADER

### **Onde editar:**
Widget HTML → Procure por:

```html
style="... height: 92px;"
```

### **Substitua por:**
```html
style="... height: 100px;"
```

**Também ajuste:**
```html
style="... top: 130px;"  <!-- Posição do dropdown -->
```
Para: `top: 138px;` (92 + 38 da faixa superior = 130, se aumentar para 100 = 138)

---

## 9️⃣ DESABILITAR SELETOR DE IDIOMAS

### **Onde editar:**
Widget HTML → Procure por:

```html
<!-- Faixa preta superior -->
<div class="nuclea-top-bar" style="width: 100%; background-color: #000; height: 38px;">
  ...
</div>
```

### **Opção 1 - Ocultar:**
Adicione `display: none;` no estilo:
```html
<div class="nuclea-top-bar" style="width: 100%; background-color: #000; height: 38px; display: none;">
```

### **Opção 2 - Remover:**
Delete todo o bloco da faixa preta superior.

**⚠️ ATENÇÃO:** Se remover, ajuste a posição do dropdown de `top: 130px` para `top: 92px`

---

## 🔟 ADICIONAR ÍCONE DE BUSCA FUNCIONAL

### **Onde editar:**
Widget HTML → Procure por:

```html
<button class="nuclea-search-button" style="...">
  <svg width="20" height="20" ...>...</svg>
</button>
```

### **Substitua por:**
```html
<a href="/pesquisa" class="nuclea-search-button" style="...">
  <svg width="20" height="20" ...>...</svg>
</a>
```

**Ou adicione onclick:**
```html
<button class="nuclea-search-button" onclick="abrirBusca()" style="...">
  <svg width="20" height="20" ...>...</svg>
</button>

<script>
function abrirBusca() {
  // Adicione sua lógica de busca aqui
  window.location.href = '/pesquisa';
}
</script>
```

---

## 🎨 TEMPLATES DE CORES PRONTOS

### **Template 1: Azul Corporativo**
```css
:root {
  --nuclea-primary: #2E86DE;
  --nuclea-primary-dark: #1B4F72;
  --nuclea-accent: #54A0FF;
  --nuclea-hover-bg: #D6EAF8;
  --nuclea-border: #E3E3E3;
}
```

### **Template 2: Verde Moderno**
```css
:root {
  --nuclea-primary: #10AC84;
  --nuclea-primary-dark: #0C7D5E;
  --nuclea-accent: #FFD93D;
  --nuclea-hover-bg: #D5F4E6;
  --nuclea-border: #E3E3E3;
}
```

### **Template 3: Laranja Vibrante**
```css
:root {
  --nuclea-primary: #FF6348;
  --nuclea-primary-dark: #C23616;
  --nuclea-accent: #FFA502;
  --nuclea-hover-bg: #FFEBE7;
  --nuclea-border: #E3E3E3;
}
```

### **Template 4: Roxo Original (padrão)**
```css
:root {
  --nuclea-primary: #BA82FF;
  --nuclea-primary-dark: #8311DA;
  --nuclea-accent: #66FFCC;
  --nuclea-hover-bg: #EFD3FF;
  --nuclea-border: #E3E3E3;
}
```

---

## ✅ CHECKLIST DE CUSTOMIZAÇÃO

Após customizar, verifique:

- [ ] Logo aparece corretamente
- [ ] Cores aplicadas em todos os elementos
- [ ] Itens do menu corretos
- [ ] Botão CTA com texto/link correto
- [ ] Fontes carregando
- [ ] Sem quebras de layout
- [ ] Teste em diferentes navegadores
- [ ] Teste responsivo (mobile)

---

## 💾 SALVANDO ALTERAÇÕES

1. Após editar no Elementor, clique em **"Update"**
2. Limpe o cache (Ctrl+F5)
3. Teste as mudanças
4. Se necessário, ajuste novamente

---

## 🆘 DICA IMPORTANTE

**Antes de fazer grandes mudanças:**
1. Exporte o template atual (backup)
2. Teste em ambiente de staging
3. Só então aplique em produção

**Para exportar:**
Templates → Saved Templates → Nuclea Mega Menu → Export

---

## 📝 VALIDAÇÃO DE JSON

Ao editar `window.nucleaMenuData`, sempre valide o JSON:

1. Copie o objeto JavaScript
2. Acesse: https://jsonlint.com/
3. Cole e valide
4. Se tiver erros, corrija antes de salvar

---

**Customizações feitas? Teste tudo antes de publicar! ✅**

---

*Precisa de mais customizações? Consulte ELEMENTOR_IMPORT_GUIDE.md para detalhes avançados.*
