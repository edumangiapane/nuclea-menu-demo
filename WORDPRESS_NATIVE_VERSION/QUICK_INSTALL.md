# ⚡ Instalação Rápida - 5 Minutos

## 📦 Passo 1: Upload dos Arquivos (2 min)

### Via FTP/cPanel:

Envie para `/wp-content/themes/seu-tema/`:

```
nuclea-menu-walker.php
nuclea-menu.css
nuclea-menu-vanilla.js
```

### Ou crie subpasta organizada:

```
/wp-content/themes/seu-tema/
├── nuclea-menu/
│   ├── nuclea-menu-walker.php
│   ├── nuclea-menu.css
│   └── nuclea-menu-vanilla.js
```

---

## ⚙️ Passo 2: Atualizar functions.php (1 min)

### Opção A: Adicionar ao final do functions.php

Abra `/wp-content/themes/seu-tema/functions.php` e adicione:

```php
/**
 * Nuclea Mega Menu - Native WordPress Integration
 */

// Incluir Walker Class
require_once get_template_directory() . '/nuclea-menu-walker.php';
// OU se criou subpasta:
// require_once get_template_directory() . '/nuclea-menu/nuclea-menu-walker.php';

// Registrar Menu Location
function nuclea_register_menus() {
    register_nav_menus(array(
        'nuclea-main-menu' => __('Nuclea Main Menu', 'nuclea')
    ));
}
add_action('after_setup_theme', 'nuclea_register_menus');

// Enqueue CSS e JavaScript
function nuclea_menu_enqueue_assets() {
    wp_enqueue_style(
        'nuclea-menu-css',
        get_template_directory_uri() . '/nuclea-menu.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_script(
        'nuclea-menu-js',
        get_template_directory_uri() . '/nuclea-menu-vanilla.js',
        array(),
        '1.0.0',
        true
    );
    
    // Passar dados do menu para JavaScript
    $menu_structure = nuclea_get_menu_structure('nuclea-main-menu');
    $menu_urls = nuclea_get_menu_urls('nuclea-main-menu');
    
    wp_localize_script('nuclea-menu-js', 'nucleaMenuData', array(
        'structure' => json_decode($menu_structure, true),
        'urls' => $menu_urls
    ));
}
add_action('wp_enqueue_scripts', 'nuclea_menu_enqueue_assets');

// Permitir 4 níveis no admin
function nuclea_menu_depth_limit($hook) {
    if ($hook != 'nav-menus.php') return;
    ?>
    <script>
        jQuery(document).ready(function($) {
            if (typeof wpNavMenu !== 'undefined') {
                wpNavMenu.options.globalMaxDepth = 4;
            }
        });
    </script>
    <?php
}
add_action('admin_head', 'nuclea_menu_depth_limit');

// Shortcode
function nuclea_mega_menu_shortcode($atts) {
    return '[HTML do menu aqui - ver template]';
}
add_shortcode('nuclea_mega_menu', 'nuclea_mega_menu_shortcode');
```

### Opção B: Usar WPCode (Plugin - Mais Seguro)

1. Instale plugin **WPCode** (gratuito)
2. WPCode → + Add Snippet
3. Cole o código acima
4. Location: Run Everywhere
5. Activate

---

## 🎨 Passo 3: Criar Menu (2 min)

### No WordPress Admin:

1. **Acessar:**
   ```
   Aparência → Menus
   ```

2. **Criar Novo Menu:**
   - Clique em "criar um novo menu"
   - Nome: `Main Menu`
   - Clique em "Criar Menu"

3. **Definir Localização:**
   - ☑️ Marcar: **Nuclea Main Menu**
   - Clique em "Salvar Menu"

4. **Adicionar Itens:**
   ```
   Páginas (coluna esquerda)
   ├── Marcar: Home, Sobre, Serviços, Contato
   └── Clicar "Adicionar ao Menu"
   ```

5. **Organizar Hierarquia:**
   ```
   Arrastar itens para criar níveis:
   - Arraste para DIREITA = nível abaixo
   - Arraste para ESQUERDA = nível acima
   ```

6. **Exemplo de Estrutura:**
   ```
   Serviços (nível 1)
   └── Consultoria (nível 2)
       └── Digital (nível 3)
           └── Marketing (nível 4)
   ```

7. **Salvar:**
   - Botão "Salvar Menu" no topo

---

## 🚀 Passo 4: Usar no Site

### Método 1: Shortcode (Mais Fácil)

Em qualquer página/post:
```
[nuclea_mega_menu]
```

### Método 2: Elementor

1. Adicionar **Widget HTML**
2. Inserir: `[nuclea_mega_menu]`
3. Atualizar

### Método 3: Código PHP

No template (header.php, etc.):
```php
<?php 
if (function_exists('nuclea_mega_menu')) {
    nuclea_mega_menu();
}
?>
```

---

## ✅ Checklist de Verificação

Antes de finalizar, verifique:

- [ ] ✅ Arquivos enviados para o tema
- [ ] ✅ functions.php atualizado
- [ ] ✅ Menu criado em Aparência → Menus
- [ ] ✅ Localização "Nuclea Main Menu" marcada
- [ ] ✅ Itens adicionados e organizados
- [ ] ✅ Menu salvo
- [ ] ✅ Shortcode adicionado à página
- [ ] ✅ Página visualizada no frontend
- [ ] ✅ Menu aparece e funciona
- [ ] ✅ Links funcionam corretamente

---

## 🐛 Problemas?

### Menu não aparece:
```bash
1. Verificar caminhos dos arquivos
2. Verificar console do navegador (F12)
3. Limpar cache (Ctrl+F5)
4. Verificar se menu tem itens
```

### Links não funcionam:
```bash
1. Verificar se páginas estão publicadas
2. Regenerar permalinks (Configurações → Permalinks → Salvar)
3. Verificar URLs dos links personalizados
```

### Erro PHP:
```bash
1. Verificar sintaxe do functions.php
2. Verificar caminho do require_once
3. Verificar se Walker Class foi incluída
4. Ver logs de erro do WordPress
```

---

## 📞 Precisa de Ajuda?

- 📖 [Documentação Completa](./WORDPRESS_NATIVE_MENU_GUIDE.md)
- 🐛 [Reportar Problema](https://github.com/edumangiapane/nuclea-menu-demo/issues)

---

## 🎉 Pronto!

Seu mega menu nativo está funcionando!

**Próximo passo:** Personalize cores e estilos no `nuclea-menu.css`

---

<div align="center">

**Tempo total: ~5 minutos** ⚡

[⬅ Voltar ao README](./README.md) | [📖 Guia Completo](./WORDPRESS_NATIVE_MENU_GUIDE.md)

</div>
