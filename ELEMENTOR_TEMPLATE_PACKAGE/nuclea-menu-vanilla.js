/**
 * NUCLEA MEGA MENU - Vanilla JavaScript Version
 * Versão convertida do React para WordPress/Elementor
 * 
 * Dependências: menu-data.json
 */

(function() {
  'use strict';

  // Variáveis de estado
  let activeMenu = null;
  let path = [];
  let menuData = {};

  // Referências aos elementos
  const menuRef = document.querySelector('#nuclea-mega-menu');
  const megaMenuContainer = document.querySelector('#nuclea-mega-menu-dropdown');
  const menuButtons = document.querySelectorAll('[data-menu-item]');

  /**
   * Inicializar o menu
   */
  function init() {
    // Carregar dados do menu
    loadMenuData();
    
    // Event listeners para os botões do menu
    menuButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const menuName = this.getAttribute('data-menu-item');
        handleMenuClick(menuName);
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('mousedown', handleClickOutside);
  }

  /**
   * Carregar dados do menu (pode ser via AJAX ou inline)
   */
  function loadMenuData() {
    // Opção 1: Dados inline (window.nucleaMenuData)
    if (typeof window.nucleaMenuData !== 'undefined') {
      menuData = window.nucleaMenuData;
      return;
    }

    // Opção 2: Carregar via AJAX
    fetch('/wp-content/themes/seu-tema/assets/menu-data.json')
      .then(response => response.json())
      .then(data => {
        menuData = data;
      })
      .catch(error => {
        console.error('Erro ao carregar dados do menu:', error);
      });
  }

  /**
   * Manipular clique no menu principal
   */
  function handleMenuClick(menuName) {
    if (menuName === "Fale com especialista") {
      window.location.href = "#fale-com-especialista";
      return;
    }
    
    if (activeMenu === menuName) {
      resetMenu();
    } else {
      activeMenu = menuName;
      path = [];
      updateActiveButton(menuName);
      renderMegaMenu();
    }
  }

  /**
   * Manipular clique em item do mega menu
   */
  function handleItemClick(item, level) {
    const newPath = [...path.slice(0, level), item];
    path = newPath;
    renderMegaMenu();
  }

  /**
   * Resetar menu
   */
  function resetMenu() {
    activeMenu = null;
    path = [];
    updateActiveButton(null);
    if (megaMenuContainer) {
      megaMenuContainer.style.display = 'none';
      megaMenuContainer.innerHTML = '';
    }
  }

  /**
   * Atualizar botão ativo
   */
  function updateActiveButton(menuName) {
    menuButtons.forEach(button => {
      const itemName = button.getAttribute('data-menu-item');
      const icon = button.querySelector('.menu-icon');
      
      if (itemName === menuName) {
        button.classList.add('active');
        if (icon) icon.innerHTML = getChevronUpSVG();
      } else {
        button.classList.remove('active');
        if (icon) icon.innerHTML = getChevronDownSVG();
      }
    });
  }

  /**
   * Fechar menu ao clicar fora
   */
  function handleClickOutside(event) {
    if (!activeMenu) return;
    
    if (menuRef && !menuRef.contains(event.target)) {
      resetMenu();
    }
  }

  /**
   * Navegar na hierarquia baseado no path
   */
  function getDataAtPath(currentPath) {
    if (!activeMenu) return null;
    
    let data = menuData[activeMenu];
    
    for (const key of currentPath) {
      if (data && typeof data === 'object') {
        data = data[key];
      } else {
        return null;
      }
    }
    
    return data;
  }

  /**
   * Verificar se tem filhos
   */
  function hasChildren(value) {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    if (typeof value === 'object' && value !== null) {
      return Object.keys(value).length > 0;
    }
    return false;
  }

  /**
   * Obter itens para uma coluna específica
   */
  function getItemsForColumn(columnIndex) {
    const currentPath = path.slice(0, columnIndex);
    const data = getDataAtPath(currentPath);
    
    if (!data) return [];
    
    if (Array.isArray(data)) {
      return typeof data[0] === 'string' ? data : [];
    }
    
    if (typeof data === 'object') {
      return Object.keys(data);
    }
    
    return [];
  }

  /**
   * Obter título para uma coluna
   */
  function getTitleForColumn(columnIndex) {
    if (columnIndex === 0) return activeMenu || '';
    return path[columnIndex - 1] || '';
  }

  /**
   * Verificar quantas colunas devem ser exibidas
   */
  function getColumnCount() {
    if (!activeMenu) return 0;
    
    let count = 1;
    
    for (let i = 0; i <= path.length; i++) {
      const items = getItemsForColumn(i);
      if (items.length > 0) {
        count = Math.max(count, i + 1);
      }
    }
    
    return count;
  }

  /**
   * Renderizar uma coluna
   */
  function renderColumn(columnIndex) {
    const items = getItemsForColumn(columnIndex);
    const title = getTitleForColumn(columnIndex);
    const selectedItem = path[columnIndex];
    
    if (items.length === 0 && columnIndex > 0) return '';
    
    const isLastColumn = items.length > 0 && items.every(item => {
      const nextPath = [...path.slice(0, columnIndex), item];
      const nextData = getDataAtPath(nextPath);
      return !hasChildren(nextData);
    });
    
    const isFirstColumn = columnIndex === 0;
    const fontSize = isFirstColumn ? '16px' : '13px';
    const zIndex = 40 - (columnIndex * 10);

    // Construir HTML da coluna
    let columnHTML = `
      <div class="nuclea-menu-column" style="width: 282px; flex-shrink: 0; position: relative; border-left: 1px solid #E3E3E3; border-right: 1px solid #E3E3E3; border-bottom: 1px solid #E3E3E3; display: flex; flex-direction: column; box-shadow: 3px 0px 4px 0px rgba(0, 0, 0, 0.16); z-index: ${zIndex}; background-color: #FFFFFF;">
        
        <!-- Header -->
        <div style="display: flex; flex-direction: column; justify-content: flex-end; padding: 25px 25px 32px; height: 125px; min-height: 125px;">
          <h3 style="font-size: 24px; font-weight: 300; line-height: 28px; font-family: ABC Favorit Variable, system-ui, sans-serif; text-wrap: balance;">
            ${title}
          </h3>
        </div>

        <!-- Items -->
        <ul style="margin: 0; padding: 0; list-style: none; flex-grow: 1;">
          ${items.map(item => {
            const nextPath = [...path.slice(0, columnIndex), item];
            const nextData = getDataAtPath(nextPath);
            const itemHasChildren = hasChildren(nextData);
            const isSelected = selectedItem === item;
            
            return `
              <li class="nuclea-menu-item ${isSelected ? 'active' : ''}" 
                  data-item="${item}" 
                  data-level="${columnIndex}"
                  style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; font-size: ${fontSize}; font-weight: 500; font-family: ABC Favorit Variable, system-ui, sans-serif; height: 44px; min-height: 44px; padding: 0 25px; background-color: ${isSelected ? '#EFD3FF' : 'transparent'}; transition: background-color 0.2s;">
                <span class="item-text" style="line-height: 1.2; text-wrap: balance; flex: 1; color: ${isSelected ? '#8311DA' : '#000'}; transition: color 0.2s;">
                  ${item}
                </span>
                ${itemHasChildren ? `
                  <span class="item-icon" style="opacity: ${isSelected ? '1' : '0'}; color: ${isSelected ? '#8311DA' : '#000'}; transition: opacity 0.2s, color 0.2s;">
                    ${getChevronRightSVG()}
                  </span>
                ` : ''}
              </li>
            `;
          }).join('')}
        </ul>

        <!-- Footer -->
        ${getColumnFooter(isFirstColumn, isLastColumn)}
      </div>
    `;

    return columnHTML;
  }

  /**
   * Obter footer da coluna
   */
  function getColumnFooter(isFirstColumn, isLastColumn) {
    if (isFirstColumn && activeMenu === "Soluções") {
      return `
        <div style="margin-top: auto;">
          <div style="padding: 0 25px;">
            <div style="border-top: 1px solid #E3E3E3; padding: 24px 0;">
              <div style="margin-bottom: 12px;">
                <h4 style="font-family: ABC Favorit Mono, monospace; font-size: 16px; font-weight: 500; color: #000000; margin-bottom: 4px; text-transform: uppercase;">
                  Documentos
                </h4>
                <p style="font-family: ABC Favorit Variable, system-ui, sans-serif; font-size: 13px; font-weight: 400; color: #666666; line-height: 1.4;">
                  Acesse regulatórios, normas, auditorias e estatísticas
                </p>
              </div>
              <a href="#" class="footer-link" style="display: inline-flex; align-items: center; gap: 8px; font-family: ABC Favorit Variable, system-ui, sans-serif; font-size: 14px; font-weight: 700; color: #000000; text-decoration: none; transition: color 0.2s;">
                <span>Acessar documentos</span>
                ${getArrowUpRightSVG()}
              </a>
            </div>
          </div>
        </div>
      `;
    }

    if (isFirstColumn && activeMenu === "Documentos") {
      return `
        <div style="margin-top: auto;">
          <div style="padding: 0 25px;">
            <div style="border-top: 1px solid #E3E3E3; padding: 24px 0;">
              <div style="margin-bottom: 12px;">
                <h4 style="font-family: ABC Favorit Mono, monospace; font-size: 16px; font-weight: 500; color: #000000; margin-bottom: 4px; text-transform: uppercase;">
                  Documentos
                </h4>
                <p style="font-family: ABC Favorit Variable, system-ui, sans-serif; font-size: 13px; font-weight: 400; color: #666666; line-height: 1.4;">
                  Acesse regulatórios, normas, auditorias e estatísticas
                </p>
              </div>
              <a href="#" class="footer-link" style="display: inline-flex; align-items: center; gap: 8px; font-family: ABC Favorit Variable, system-ui, sans-serif; font-size: 14px; font-weight: 700; color: #000000; text-decoration: none; transition: color 0.2s;">
                <span>Acessar documentos</span>
                ${getArrowUpRightSVG()}
              </a>
            </div>
          </div>
        </div>
      `;
    }

    if (isLastColumn && activeMenu === "Soluções") {
      return `
        <div style="margin-top: auto; padding: 24px 25px;">
          <a href="#" class="footer-link" style="display: inline-flex; align-items: center; gap: 8px; font-family: ABC Favorit Variable, system-ui, sans-serif; font-size: 14px; font-weight: 700; color: #000000; text-decoration: none; transition: color 0.2s;">
            <span>Todas as Soluções</span>
            ${getArrowUpRightSVG()}
          </a>
        </div>
      `;
    }

    return '';
  }

  /**
   * Renderizar mega menu completo
   */
  function renderMegaMenu() {
    if (!megaMenuContainer) return;

    const columnCount = getColumnCount();
    
    if (columnCount === 0 || !activeMenu) {
      megaMenuContainer.style.display = 'none';
      return;
    }

    // Gerar HTML das colunas
    let columnsHTML = '';
    for (let i = 0; i < columnCount; i++) {
      columnsHTML += renderColumn(i);
    }

    // Renderizar estrutura completa
    megaMenuContainer.innerHTML = `
      <div class="backdrop-blur" style="position: absolute; left: 0; right: 0; height: 504px; backdrop-filter: blur(4px); background-color: rgba(255, 255, 255, 0.5); z-index: 1;"></div>
      <div class="blur-left" style="position: absolute; left: 0; height: 504px; backdrop-filter: blur(4px); width: calc(50% - 564px + 282px); z-index: 39; background-color: rgba(255, 255, 255, 0.5);"></div>
      <div class="menu-columns-container" style="max-width: 1128px; margin: 0 auto; display: flex; gap: 0; height: 504px; font-family: ABC Favorit Variable, system-ui, sans-serif;">
        ${columnsHTML}
      </div>
    `;

    megaMenuContainer.style.display = 'block';

    // Adicionar event listeners aos itens
    const menuItems = megaMenuContainer.querySelectorAll('.nuclea-menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const level = parseInt(this.getAttribute('data-level'));
        handleItemClick(itemName, level);
      });

      // Hover effects
      item.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
          this.style.backgroundColor = '#f9fafb';
          const icon = this.querySelector('.item-icon');
          if (icon) icon.style.opacity = '1';
          const text = this.querySelector('.item-text');
          if (text) text.style.color = '#8311DA';
        }
      });

      item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
          this.style.backgroundColor = 'transparent';
          const icon = this.querySelector('.item-icon');
          if (icon) icon.style.opacity = '0';
          const text = this.querySelector('.item-text');
          if (text) text.style.color = '#000';
        }
      });
    });

    // Hover effects para links do footer
    const footerLinks = megaMenuContainer.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.color = '#8311DA';
      });
      link.addEventListener('mouseleave', function() {
        this.style.color = '#000000';
      });
    });
  }

  // ============================================
  // SVG ICONS
  // ============================================

  function getChevronDownSVG() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  }

  function getChevronUpSVG() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
  }

  function getChevronRightSVG() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
  }

  function getArrowUpRightSVG() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>';
  }

  // ============================================
  // INICIALIZAR
  // ============================================

  // Aguardar DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
