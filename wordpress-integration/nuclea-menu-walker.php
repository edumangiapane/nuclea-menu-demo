<?php
/**
 * Nuclea Mega Menu Walker
 * 
 * Converte menus nativos do WordPress em estrutura JSON hierárquica
 * para o Nuclea Mega Menu (suporta até 4 níveis)
 * 
 * @package NucleaMegaMenu
 * @version 1.0.0
 */

if (!class_exists('Nuclea_Menu_Walker')) {
    
    class Nuclea_Menu_Walker extends Walker_Nav_Menu {
        
        /**
         * Armazena a estrutura do menu em formato hierárquico
         */
        private $menu_structure = array();
        
        /**
         * Rastreia o path atual no menu
         */
        private $current_path = array();
        
        /**
         * Converte o menu em estrutura hierárquica JSON
         * 
         * @param array $items Menu items do WordPress
         * @return string JSON string da estrutura do menu
         */
        public function build_menu_structure($items) {
            $menu_tree = array();
            $parent_map = array();
            
            // Organizar items por parent ID
            foreach ($items as $item) {
                $parent_map[$item->menu_item_parent][] = $item;
            }
            
            // Construir árvore recursivamente
            $menu_tree = $this->build_tree($parent_map, 0);
            
            return json_encode($menu_tree, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        }
        
        /**
         * Constrói a árvore recursivamente
         * 
         * @param array $parent_map Mapa de items por parent
         * @param int $parent_id ID do parent atual
         * @param int $depth Profundidade atual
         * @return array Árvore de menu
         */
        private function build_tree($parent_map, $parent_id = 0, $depth = 0) {
            $branch = array();
            
            if (!isset($parent_map[$parent_id])) {
                return $branch;
            }
            
            foreach ($parent_map[$parent_id] as $item) {
                $children = $this->build_tree($parent_map, $item->ID, $depth + 1);
                
                if (!empty($children)) {
                    // Tem filhos - criar como objeto
                    $branch[$item->title] = $children;
                } else {
                    // Sem filhos - adicionar como string
                    $branch[] = array(
                        'title' => $item->title,
                        'url' => $item->url,
                        'target' => $item->target ?: '_self'
                    );
                }
            }
            
            return $branch;
        }
        
        /**
         * Simplifica a estrutura para o formato do Nuclea Menu
         * Remove informações de URL dos níveis intermediários
         */
        private function simplify_structure($items) {
            $simplified = array();
            
            foreach ($items as $key => $value) {
                if (is_array($value)) {
                    if (isset($value['title'])) {
                        // É um item final com URL
                        $simplified[] = $value['title'];
                    } else {
                        // É um nível intermediário
                        $simplified[$key] = $this->simplify_structure($value);
                    }
                } else {
                    $simplified[] = $value;
                }
            }
            
            return $simplified;
        }
        
        /**
         * Obtém URLs para todos os itens do menu
         * Retorna array associativo [título => url]
         */
        public function get_menu_urls($items) {
            $urls = array();
            
            foreach ($items as $item) {
                $urls[$item->title] = array(
                    'url' => $item->url,
                    'target' => $item->target ?: '_self',
                    'classes' => implode(' ', $item->classes)
                );
            }
            
            return $urls;
        }
    }
}

/**
 * Função helper para obter estrutura do menu
 * 
 * @param string $menu_location Menu location registrada
 * @return string JSON string da estrutura
 */
function nuclea_get_menu_structure($menu_location = 'nuclea-main-menu') {
    $locations = get_nav_menu_locations();
    
    if (!isset($locations[$menu_location])) {
        return json_encode(array());
    }
    
    $menu_id = $locations[$menu_location];
    $menu_items = wp_get_nav_menu_items($menu_id);
    
    if (!$menu_items) {
        return json_encode(array());
    }
    
    $walker = new Nuclea_Menu_Walker();
    return $walker->build_menu_structure($menu_items);
}

/**
 * Função helper para obter URLs do menu
 * 
 * @param string $menu_location Menu location registrada
 * @return array Array associativo de URLs
 */
function nuclea_get_menu_urls($menu_location = 'nuclea-main-menu') {
    $locations = get_nav_menu_locations();
    
    if (!isset($locations[$menu_location])) {
        return array();
    }
    
    $menu_id = $locations[$menu_location];
    $menu_items = wp_get_nav_menu_items($menu_id);
    
    if (!$menu_items) {
        return array();
    }
    
    $walker = new Nuclea_Menu_Walker();
    return $walker->get_menu_urls($menu_items);
}

/**
 * Shortcode para exibir o menu
 * 
 * Uso: [nuclea_mega_menu location="nuclea-main-menu"]
 */
function nuclea_mega_menu_shortcode($atts) {
    $atts = shortcode_atts(array(
        'location' => 'nuclea-main-menu',
        'logo' => '',
        'cta_text' => 'Fale com um Especialista',
        'cta_url' => '#contato'
    ), $atts);
    
    ob_start();
    include(locate_template('nuclea-menu-template.php'));
    return ob_get_clean();
}
add_shortcode('nuclea_mega_menu', 'nuclea_mega_menu_shortcode');
