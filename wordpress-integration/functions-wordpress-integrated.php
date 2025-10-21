<?php
/**
 * Nuclea Mega Menu - Integração WordPress
 * 
 * Adicione este código ao functions.php do seu tema
 * ou crie como plugin
 * 
 * @package NucleaMegaMenu
 * @version 1.0.0
 */

// Incluir Walker Class
require_once get_template_directory() . '/nuclea-menu-walker.php';

/**
 * Registrar Menu Location
 */
function nuclea_register_menus() {
    register_nav_menus(array(
        'nuclea-main-menu' => __('Nuclea Main Menu', 'nuclea'),
        'nuclea-secondary-menu' => __('Nuclea Secondary Menu', 'nuclea')
    ));
}
add_action('after_setup_theme', 'nuclea_register_menus');

/**
 * Enqueue CSS e JavaScript
 */
function nuclea_menu_enqueue_assets() {
    // CSS do menu
    wp_enqueue_style(
        'nuclea-menu-css',
        get_template_directory_uri() . '/assets/css/nuclea-menu.css',
        array(),
        '1.0.0',
        'all'
    );
    
    // JavaScript do menu
    wp_enqueue_script(
        'nuclea-menu-js',
        get_template_directory_uri() . '/assets/js/nuclea-menu-vanilla.js',
        array(),
        '1.0.0',
        true
    );
    
    // Passar dados do menu para JavaScript
    $menu_structure = nuclea_get_menu_structure('nuclea-main-menu');
    $menu_urls = nuclea_get_menu_urls('nuclea-main-menu');
    
    wp_localize_script('nuclea-menu-js', 'nucleaMenuData', array(
        'structure' => json_decode($menu_structure, true),
        'urls' => $menu_urls,
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('nuclea-menu-nonce')
    ));
}
add_action('wp_enqueue_scripts', 'nuclea_menu_enqueue_assets');

/**
 * Adicionar suporte a 4 níveis no admin de menus
 */
function nuclea_menu_depth_limit($hook) {
    if ($hook != 'nav-menus.php') {
        return;
    }
    
    ?>
    <style>
        /* Permitir 4 níveis visualmente */
        .menu-item-depth-3 { margin-left: 30px; }
        .menu-item-depth-4 { margin-left: 45px; }
    </style>
    <script>
        jQuery(document).ready(function($) {
            // Ajustar limite de profundidade para 4 níveis
            if (typeof wpNavMenu !== 'undefined') {
                wpNavMenu.options.globalMaxDepth = 4;
            }
        });
    </script>
    <?php
}
add_action('admin_head', 'nuclea_menu_depth_limit');

/**
 * Adicionar campos customizados aos itens do menu
 * (opcional - para futuras extensões)
 */
function nuclea_menu_custom_fields($item_id, $item) {
    $mega_menu_enabled = get_post_meta($item_id, '_nuclea_mega_menu_enabled', true);
    $icon_class = get_post_meta($item_id, '_nuclea_icon_class', true);
    $highlight = get_post_meta($item_id, '_nuclea_highlight', true);
    ?>
    
    <p class="field-nuclea-mega-menu description description-wide">
        <label for="edit-menu-item-nuclea-mega-<?php echo $item_id; ?>">
            <input 
                type="checkbox" 
                id="edit-menu-item-nuclea-mega-<?php echo $item_id; ?>" 
                name="menu-item-nuclea-mega[<?php echo $item_id; ?>]" 
                value="1" 
                <?php checked($mega_menu_enabled, '1'); ?>
            />
            <?php _e('Ativar Mega Menu', 'nuclea'); ?>
        </label>
    </p>
    
    <p class="field-nuclea-icon description description-wide">
        <label for="edit-menu-item-nuclea-icon-<?php echo $item_id; ?>">
            <?php _e('Classe do Ícone', 'nuclea'); ?><br />
            <input 
                type="text" 
                id="edit-menu-item-nuclea-icon-<?php echo $item_id; ?>" 
                class="widefat" 
                name="menu-item-nuclea-icon[<?php echo $item_id; ?>]" 
                value="<?php echo esc_attr($icon_class); ?>"
                placeholder="Ex: fa-home"
            />
        </label>
    </p>
    
    <p class="field-nuclea-highlight description description-wide">
        <label for="edit-menu-item-nuclea-highlight-<?php echo $item_id; ?>">
            <input 
                type="checkbox" 
                id="edit-menu-item-nuclea-highlight-<?php echo $item_id; ?>" 
                name="menu-item-nuclea-highlight[<?php echo $item_id; ?>]" 
                value="1" 
                <?php checked($highlight, '1'); ?>
            />
            <?php _e('Destacar item', 'nuclea'); ?>
        </label>
    </p>
    
    <?php
}
add_action('wp_nav_menu_item_custom_fields', 'nuclea_menu_custom_fields', 10, 2);

/**
 * Salvar campos customizados
 */
function nuclea_menu_save_custom_fields($menu_id, $menu_item_db_id) {
    if (isset($_POST['menu-item-nuclea-mega'][$menu_item_db_id])) {
        update_post_meta($menu_item_db_id, '_nuclea_mega_menu_enabled', '1');
    } else {
        delete_post_meta($menu_item_db_id, '_nuclea_mega_menu_enabled');
    }
    
    if (isset($_POST['menu-item-nuclea-icon'][$menu_item_db_id])) {
        update_post_meta(
            $menu_item_db_id, 
            '_nuclea_icon_class', 
            sanitize_text_field($_POST['menu-item-nuclea-icon'][$menu_item_db_id])
        );
    }
    
    if (isset($_POST['menu-item-nuclea-highlight'][$menu_item_db_id])) {
        update_post_meta($menu_item_db_id, '_nuclea_highlight', '1');
    } else {
        delete_post_meta($menu_item_db_id, '_nuclea_highlight');
    }
}
add_action('wp_update_nav_menu_item', 'nuclea_menu_save_custom_fields', 10, 2);

/**
 * AJAX handler para atualizar menu dinamicamente
 * (útil para cache e performance)
 */
function nuclea_ajax_get_menu() {
    check_ajax_referer('nuclea-menu-nonce', 'nonce');
    
    $menu_location = isset($_POST['location']) ? sanitize_text_field($_POST['location']) : 'nuclea-main-menu';
    
    $response = array(
        'structure' => json_decode(nuclea_get_menu_structure($menu_location), true),
        'urls' => nuclea_get_menu_urls($menu_location)
    );
    
    wp_send_json_success($response);
}
add_action('wp_ajax_nuclea_get_menu', 'nuclea_ajax_get_menu');
add_action('wp_ajax_nopriv_nuclea_get_menu', 'nuclea_ajax_get_menu');

/**
 * Adicionar mensagem de instrução no admin
 */
function nuclea_menu_admin_notice() {
    $screen = get_current_screen();
    
    if ($screen->id !== 'nav-menus') {
        return;
    }
    ?>
    <div class="notice notice-info">
        <p>
            <strong><?php _e('Nuclea Mega Menu:', 'nuclea'); ?></strong>
            <?php _e('Este menu suporta até 4 níveis de profundidade. Organize os itens usando drag & drop.', 'nuclea'); ?>
        </p>
        <p>
            <?php _e('Para usar o menu, adicione o shortcode', 'nuclea'); ?>
            <code>[nuclea_mega_menu]</code>
            <?php _e('ou use no Elementor.', 'nuclea'); ?>
        </p>
    </div>
    <?php
}
add_action('admin_notices', 'nuclea_menu_admin_notice');

/**
 * Limpar cache do menu quando atualizado
 */
function nuclea_clear_menu_cache($menu_id) {
    delete_transient('nuclea_menu_structure_' . $menu_id);
    delete_transient('nuclea_menu_urls_' . $menu_id);
}
add_action('wp_update_nav_menu', 'nuclea_clear_menu_cache');

/**
 * Template tag para usar no tema
 * 
 * Uso: <?php nuclea_mega_menu(); ?>
 */
function nuclea_mega_menu($args = array()) {
    $defaults = array(
        'location' => 'nuclea-main-menu',
        'logo_url' => get_template_directory_uri() . '/assets/images/logo.svg',
        'cta_text' => 'Fale com um Especialista',
        'cta_url' => '#contato'
    );
    
    $args = wp_parse_args($args, $defaults);
    
    include(locate_template('nuclea-menu-template.php'));
}
