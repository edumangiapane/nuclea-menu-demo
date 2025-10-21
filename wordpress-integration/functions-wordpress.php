<?php
/**
 * NUCLEA MEGA MENU - Integração WordPress
 * 
 * INSTRUÇÕES:
 * 1. Adicione este código ao functions.php do seu tema (preferencialmente tema child)
 * 2. Faça upload dos arquivos menu-data.json e nuclea-menu-vanilla.js para:
 *    /wp-content/themes/seu-tema/assets/
 * 3. Use o shortcode [nuclea_mega_menu] onde desejar exibir o menu
 * 
 * @package NucleaMegaMenu
 * @version 1.0.0
 */

// Evitar acesso direto
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enfileirar scripts e estilos do Nuclea Menu
 */
function nuclea_menu_enqueue_scripts() {
    // Apenas carregar se o shortcode estiver presente
    global $post;
    if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'nuclea_mega_menu')) {
        
        // CSS do menu
        wp_enqueue_style(
            'nuclea-menu-css',
            get_stylesheet_directory_uri() . '/assets/nuclea-menu.css',
            array(),
            '1.0.0'
        );
        
        // JavaScript do menu
        wp_enqueue_script(
            'nuclea-menu-js',
            get_stylesheet_directory_uri() . '/assets/nuclea-menu-vanilla.js',
            array(),
            '1.0.0',
            true // Carregar no footer
        );
        
        // Carregar dados do menu e passar para JavaScript
        $menu_data_path = get_stylesheet_directory() . '/assets/menu-data.json';
        
        if (file_exists($menu_data_path)) {
            $menu_data = file_get_contents($menu_data_path);
            $menu_data_decoded = json_decode($menu_data, true);
            
            // Passar dados para JavaScript via wp_localize_script
            wp_localize_script(
                'nuclea-menu-js',
                'nucleaMenuData',
                $menu_data_decoded
            );
        }
    }
}
add_action('wp_enqueue_scripts', 'nuclea_menu_enqueue_scripts');

/**
 * Shortcode para renderizar o Nuclea Mega Menu
 * 
 * Uso: [nuclea_mega_menu]
 */
function nuclea_mega_menu_shortcode($atts) {
    // Atributos do shortcode (para futuras customizações)
    $atts = shortcode_atts(array(
        'theme' => 'default',
    ), $atts, 'nuclea_mega_menu');
    
    // Buffer de saída
    ob_start();
    ?>
    
    <div id="nuclea-mega-menu" class="nuclea-mega-menu-wrapper">
        
        <!-- Faixa preta superior com idiomas -->
        <div class="nuclea-top-bar" style="width: 100%; background-color: #000; height: 38px;">
            <div style="max-width: 1128px; margin: 0 auto; display: flex; align-items: center; justify-content: flex-end; height: 100%;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button class="lang-button" style="color: rgba(255,255,255,0.6); background: none; border: none; cursor: pointer; display: flex; align-items: center; font-family: ABC Favorit Variable, system-ui, sans-serif; font-size: 11px; gap: 6px; transition: color 0.2s;">
                        <span>EN</span>
                        <div style="width: 18px; height: 12px; display: flex; align-items: center;">
                            <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="17" fill="#B22234"/>
                                <path fill="#fff" d="M0 2.125h25M0 5.313h25M0 8.5h25M0 11.688h25M0 14.875h25"/>
                                <rect width="10" height="7.438" fill="#3C3B6E"/>
                                <path fill="#fff" d="M1.562.531l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm2.5 0l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm2.5 0l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm-3.75 1.563l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm2.5 0l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm2.5 0l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm-5 1.563l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm2.5 0l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469zm2.5 0l.156.469h.5l-.406.281.156.469-.406-.281-.406.281.156-.469-.406-.281h.5l.156-.469z"/>
                            </svg>
                        </div>
                    </button>
                    <span style="color: rgba(255,255,255,0.3);">|</span>
                    <button class="lang-button" style="color: rgba(255,255,255,0.6); background: none; border: none; cursor: pointer; display: flex; align-items: center; font-family: ABC Favorit Variable, system-ui, sans-serif; font-size: 11px; gap: 6px; transition: color 0.2s;">
                        <span>ES</span>
                        <div style="width: 18px; height: 12px; display: flex; align-items: center;">
                            <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="17" fill="#AA151B"/>
                                <rect y="4.25" width="25" height="8.5" fill="#F1BF00"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Header principal -->
        <header class="nuclea-header" style="position: relative; background-color: #fff; border-bottom: 1px solid #E3E3E3; z-index: 50; box-shadow: 0 2px 4px rgba(0,0,0,0.08);">
            <div style="max-width: 1128px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 24px 0; height: 92px;">
                
                <!-- Logo (substituir pela imagem real do logo) -->
                <div style="width: 154px; height: 44px;">
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo-nuclea.png" alt="Núclea" style="width: 100%; height: 100%; object-fit: contain;">
                    </a>
                </div>

                <!-- Menu principal -->
                <nav style="flex: 1; display: flex; justify-content: center;">
                    <ul style="display: flex; align-items: center; gap: 28px; margin: 0; padding: 0; list-style: none;">
                        <li>
                            <button data-menu-item="Soluções" class="menu-item-button" style="display: flex; align-items: center; font-size: 14px; font-weight: 500; font-family: ABC Favorit Variable, system-ui, sans-serif; gap: 4px; background: none; border: none; cursor: pointer; color: #000; transition: color 0.2s;">
                                Soluções
                                <span class="menu-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button data-menu-item="Documentos" class="menu-item-button" style="display: flex; align-items: center; font-size: 14px; font-weight: 500; font-family: ABC Favorit Variable, system-ui, sans-serif; gap: 4px; background: none; border: none; cursor: pointer; color: #000; transition: color 0.2s;">
                                Documentos
                                <span class="menu-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button data-menu-item="Área do Cliente" class="menu-item-button" style="display: flex; align-items: center; font-size: 14px; font-weight: 500; font-family: ABC Favorit Variable, system-ui, sans-serif; gap: 4px; background: none; border: none; cursor: pointer; color: #000; transition: color 0.2s;">
                                Área do Cliente
                                <span class="menu-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button data-menu-item="Núclea" class="menu-item-button" style="display: flex; align-items: center; font-size: 14px; font-weight: 500; font-family: ABC Favorit Variable, system-ui, sans-serif; gap: 4px; background: none; border: none; cursor: pointer; color: #000; transition: color 0.2s;">
                                Núclea
                                <span class="menu-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button data-menu-item="Conteúdos" class="menu-item-button" style="display: flex; align-items: center; font-size: 14px; font-weight: 500; font-family: ABC Favorit Variable, system-ui, sans-serif; gap: 4px; background: none; border: none; cursor: pointer; color: #000; transition: color 0.2s;">
                                Conteúdos
                                <span class="menu-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>

                <!-- Busca e CTA -->
                <div style="display: flex; align-items: center; gap: 16px;">
                    <button style="display: flex; align-items: center; background: none; border: none; cursor: pointer; color: #000; transition: color 0.2s;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </button>
                    <a href="#fale-com-especialista" style="background-color: #66FFCC; color: #000; font-size: 13px; font-weight: 500; font-family: ABC Favorit Variable, system-ui, sans-serif; height: 36px; padding: 0 20px; white-space: nowrap; border-radius: 10px; border: none; cursor: pointer; transition: opacity 0.2s; display: flex; align-items: center; text-decoration: none;">
                        Fale com um Especialista
                    </a>
                </div>
            </div>
        </header>

        <!-- Container do Mega Menu (será preenchido via JavaScript) -->
        <div id="nuclea-mega-menu-dropdown" style="position: absolute; left: 0; right: 0; z-index: 20; top: 130px; display: none;"></div>
    </div>

    <style>
        /* Estilos adicionais inline para garantir funcionamento */
        .menu-item-button:hover,
        .menu-item-button.active {
            color: #BA82FF !important;
        }
        
        .lang-button:hover {
            color: #66FFCC !important;
        }
    </style>
    
    <?php
    return ob_get_clean();
}
add_shortcode('nuclea_mega_menu', 'nuclea_mega_menu_shortcode');

/**
 * Widget Elementor (opcional - requer Elementor Pro)
 * 
 * Descomentar se quiser criar um widget Elementor customizado
 */
/*
function register_nuclea_menu_widget($widgets_manager) {
    require_once(__DIR__ . '/widgets/nuclea-mega-menu-widget.php');
    $widgets_manager->register(new \Nuclea_Mega_Menu_Widget());
}
add_action('elementor/widgets/register', 'register_nuclea_menu_widget');
*/

/**
 * Adicionar fontes customizadas (ABC Favorit)
 * 
 * NOTA: Você precisará fazer upload das fontes para o servidor
 * e ajustar os caminhos abaixo
 */
function nuclea_add_custom_fonts() {
    ?>
    <style>
        @font-face {
            font-family: 'ABC Favorit Variable';
            src: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/fonts/ABCFavorit-Variable.woff2') format('woff2');
            font-weight: 100 900;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'ABC Favorit Mono';
            src: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/fonts/ABCFavoritMono-Regular.woff2') format('woff2');
            font-weight: 400;
            font-display: swap;
        }
    </style>
    <?php
}
add_action('wp_head', 'nuclea_add_custom_fonts');

/**
 * Adicionar suporte a Elementor para o shortcode
 */
function nuclea_elementor_shortcode_support() {
    // Registrar o shortcode como dinâmico para Elementor
    if (did_action('elementor/loaded')) {
        \Elementor\Plugin::instance()->widgets_manager->register_widget_type(
            new \Elementor\Widget_Shortcode()
        );
    }
}
add_action('init', 'nuclea_elementor_shortcode_support');

?>
