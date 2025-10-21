# 🎯 Nuclea Mega Menu - Integração com WordPress Menus Nativos

## 📋 Visão Geral

Esta versão do Nuclea Mega Menu se integra **100% com o sistema nativo de menus do WordPress**, permitindo que você gerencie todo o conteúdo visualmente através de **Aparência → Menus**.

---

## ✨ Vantagens desta Abordagem

- ✅ **Interface Visual do WordPress** - Zero código manual
- ✅ **Drag & Drop** - Organize hierarquia facilmente
- ✅ **Links Automáticos** - URLs de páginas/posts automáticas
- ✅ **4 Níveis de Profundidade** - Suportado nativamente
- ✅ **Editável no Admin** - Qualquer pessoa pode atualizar
- ✅ **Mesma Interface Visual** - Mantém o design do mega menu

---

## 🚀 Instalação (3 Passos)

### **Passo 1: Upload dos Arquivos**

Envie para seu tema WordPress:

```
/wp-content/themes/seu-tema/
├── nuclea-menu-walker.php              ← Nova classe Walker
├── functions-wordpress-integrated.php   ← Novo functions.php
├── assets/
│   ├── css/
│   │   └── nuclea-menu.css            ← CSS do menu
│   └── js/
│       └── nuclea-menu-vanilla.js      ← JavaScript do menu
```

### **Passo 2: Adicionar ao functions.php**

Abra o arquivo `functions.php` do seu tema e adicione:

```php
// Nuclea Mega Menu Integration
require_once get_template_directory() . '/functions-wordpress-integrated.php';
```

**OU** substitua todo o conteúdo de `functions.php` pelo arquivo `functions-wordpress-integrated.php`.

### **Passo 3: Ativar**

Salve e acesse: **WordPress Admin → Aparência → Menus**

Você verá a nova área de menu "Nuclea Main Menu" disponível! ✅

---

## 📝 Como Criar o Menu (Interface Visual)

### **1. Acessar Menus:**
```
WordPress Admin → Aparência → Menus
```

### **2. Criar Novo Menu:**
- Clique em "Criar um novo menu"
- Nome: **"Main Menu"** (ou qualquer nome)
- Clique em "Criar Menu"

### **3. Definir Localização:**
- ☑️ Marque: **"Nuclea Main Menu"**
- Clique em "Salvar Menu"

### **4. Adicionar Itens:**

**Opções disponíveis:**
- 📄 **Páginas** - Adicionar páginas existentes
- 📝 **Posts** - Adicionar posts
- 🔗 **Links Personalizados** - URLs externas
- 📂 **Categorias** - Adicionar categorias
- 🏷️ **Tags** - Adicionar tags

**Como adicionar:**
1. Selecione o tipo (Páginas, Posts, etc.)
2. Marque os itens desejados
3. Clique em "Adicionar ao Menu"

### **5. Organizar Hierarquia (Drag & Drop):**

```
🎯 Nível 1 - Menu Principal
   ├── 📁 Nível 2 - Categoria
   │   ├── 📂 Nível 3 - Subcategoria
   │   │   ├── 📄 Nível 4 - Item Final
   │   │   └── 📄 Nível 4 - Item Final
   │   └── 📂 Nível 3 - Subcategoria
   └── 📁 Nível 2 - Categoria
```

**Para criar níveis:**
1. Arraste o item **ligeiramente para a direita** = vai um nível abaixo
2. Arraste o item **para a esquerda** = volta um nível acima
3. Arraste **para cima/baixo** = reordena

### **6. Salvar:**
- Clique em "Salvar Menu" no topo da página

---

## 🎨 Exemplo de Estrutura

### **Estrutura Visual no Admin:**

```
Soluções
├── Financeiro
│   ├── Inteligência de Dados
│   │   ├── Gestão de Crédito e Cobrança
│   │   │   ├── Scores e Indicadores
│   │   │   └── Relatório de Histórico
│   │   └── Antifraude
│   │       ├── Indicadores de Fraude
│   │       └── Motor de Decisão
│   └── Registro
│       └── Recebíveis
│           ├── Recebíveis de Cartões
│           └── Duplicatas
└── Seguros
    └── Registro
        └── Operações de Seguros - SRO

Documentos
└── Documentos de Soluções
    ├── Regulatório, Normas e Auditorias
    └── Matriz de Sistemas

Área do Cliente
└── Suporte ao Cliente
    ├── Form para Suporte
    └── FAQ

Núclea
└── Institucional
    ├── Sobre Nós
    ├── Governança Corporativa
    └── Imprensa

Conteúdos
├── Blog
├── Núclea Academy
├── Podcast
└── Newsletter
```

---

## 🔧 Configurações Avançadas

### **Campos Customizados por Item:**

Ao clicar em um item do menu, você verá:

#### **1. Ativar Mega Menu**
- ☑️ Marque para ativar o mega menu neste item
- Apenas itens de nível 1 devem ter isso marcado

#### **2. Classe do Ícone**
- Adicione classes CSS de ícones (Font Awesome, etc.)
- Exemplo: `fa-home`, `icon-dashboard`

#### **3. Destacar Item**
- ☑️ Marque para destacar visualmente o item
- Útil para promoções ou itens importantes

### **Atributos Padrão do WordPress:**

Também funcionam normalmente:
- **Rótulo de Navegação** - Texto exibido no menu
- **Atributo de Título** - Tooltip ao passar o mouse
- **Abrir em nova aba** - Target \_blank
- **Classes CSS** - Classes customizadas
- **Relacionamento de Link (XFN)** - Para SEO
- **Descrição** - Texto adicional (opcional)

---

## 📦 Usando o Menu

### **Método 1: Shortcode**

Em qualquer página, post ou widget:

```
[nuclea_mega_menu]
```

**Com parâmetros:**

```
[nuclea_mega_menu location="nuclea-main-menu" cta_text="Contato" cta_url="/contato"]
```

### **Método 2: Elementor**

1. Adicione um **Widget HTML**
2. Insira: `[nuclea_mega_menu]`
3. Pronto!

### **Método 3: Código PHP no Tema**

Em `header.php` ou qualquer template:

```php
<?php 
if (function_exists('nuclea_mega_menu')) {
    nuclea_mega_menu(array(
        'location' => 'nuclea-main-menu',
        'logo_url' => get_template_directory_uri() . '/assets/images/logo.svg',
        'cta_text' => 'Fale com um Especialista',
        'cta_url' => '/contato'
    ));
}
?>
```

---

## 🎯 Como Atualizar o Menu

### **Adicionar Novo Item:**
1. Vá em **Aparência → Menus**
2. Selecione o item na coluna esquerda
3. Clique em "Adicionar ao Menu"
4. Arraste para a posição desejada
5. Salvar Menu

### **Editar Item Existente:**
1. Clique na **seta** do item para expandir
2. Edite o texto, URL, etc.
3. Salvar Menu

### **Remover Item:**
1. Clique na **seta** do item
2. Clique em "Remover"
3. Salvar Menu

### **Reordenar:**
1. Arraste e solte os itens
2. Salvar Menu

**✨ Atualizações são instantâneas!** Não precisa limpar cache.

---

## ⚙️ Configurações do Tema

### **Registrar Múltiplos Menus:**

No `functions.php`:

```php
function my_register_menus() {
    register_nav_menus(array(
        'nuclea-main-menu' => 'Menu Principal',
        'nuclea-footer-menu' => 'Menu do Rodapé',
        'nuclea-mobile-menu' => 'Menu Mobile'
    ));
}
add_action('after_setup_theme', 'my_register_menus');
```

### **Customizar Profundidade Máxima:**

Por padrão, suporta 4 níveis. Para alterar:

```php
// No functions.php, altere:
wpNavMenu.options.globalMaxDepth = 5; // Para 5 níveis
```

### **Adicionar Logo Dinamicamente:**

```php
nuclea_mega_menu(array(
    'logo_url' => get_theme_mod('custom_logo') 
        ? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full') 
        : get_template_directory_uri() . '/assets/images/logo.svg'
));
```

---

## 🐛 Troubleshooting

### **Menu não aparece:**
- ✅ Verificar se o menu está atribuído à localização "Nuclea Main Menu"
- ✅ Verificar se tem itens no menu
- ✅ Verificar se o shortcode está correto

### **Links não funcionam:**
- ✅ Verificar se as páginas estão publicadas
- ✅ Verificar URLs dos links personalizados
- ✅ Limpar cache do site (se houver)

### **Hierarquia quebrada:**
- ✅ Máximo de 4 níveis suportados
- ✅ Verificar se os itens estão corretamente indentados
- ✅ Salvar o menu novamente

### **CSS/JS não carrega:**
- ✅ Verificar caminhos dos arquivos
- ✅ Verificar permissões dos arquivos
- ✅ Limpar cache do navegador (Ctrl+F5)

---

## 📊 Comparação: Antes vs Depois

### **❌ ANTES (JSON Hardcoded):**
```javascript
// Editar manualmente no código:
window.nucleaMenuData = {
  "Soluções": {
    "Financeiro": { ... }
  }
}
```

### **✅ DEPOIS (WordPress Native):**
```
WordPress Admin → Aparência → Menus
[Interface Visual - Drag & Drop]
```

---

## 🎓 Vídeo Tutorial (Futuro)

*Em breve: vídeo mostrando passo a passo como criar e configurar o menu*

---

## 💡 Dicas Pro

### **1. Organização:**
- Use nomes descritivos para os itens
- Agrupe itens relacionados
- Mantenha hierarquia consistente

### **2. Performance:**
- Evite menus muito grandes (> 100 itens)
- Use cache de página se possível
- Considere lazy loading para sub-menus

### **3. SEO:**
- Use URLs amigáveis
- Adicione títulos descritivos
- Mantenha estrutura lógica

### **4. Acessibilidade:**
- Use textos claros
- Evite siglas sem explicação
- Teste navegação por teclado

---

## 🆘 Suporte

**Problemas ou dúvidas?**
- 📧 Email: suporte@nuclea.com.br
- 📖 Documentação completa: [Ver docs](../README.md)
- 🐛 Reportar bug: [GitHub Issues](https://github.com/edumangiapane/nuclea-menu-demo/issues)

---

## 📦 Arquivos Necessários

```
✅ nuclea-menu-walker.php              (Walker Class)
✅ functions-wordpress-integrated.php  (Integração)
✅ nuclea-menu.css                     (Estilos)
✅ nuclea-menu-vanilla.js              (JavaScript)
```

Todos disponíveis em: `/wordpress-integration/`

---

<div align="center">

**Agora seu menu é 100% gerenciável via WordPress! 🎉**

Qualquer pessoa pode atualizar sem tocar em código.

[⬆ Voltar ao topo](#-nuclea-mega-menu---integração-com-wordpress-menus-nativos)

</div>
