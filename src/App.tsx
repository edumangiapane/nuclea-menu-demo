import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, ChevronUp, Search, ArrowUpRight } from 'lucide-react';
import Frame from './imports/Frame';
import UsFlag from './imports/UsFlag';
import svgPaths from './imports/svg-1qab4u2kxe';
import bgImage from 'figma:asset/bf903664c8e13ca984200ea2ddb6950381817155.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Componente para bandeira da Espanha
function EsFlag() {
  return (
    <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="25" height="17" fill="#AA151B"/>
      <rect y="4.25" width="25" height="8.5" fill="#F1BF00"/>
    </svg>
  );
}

// Estrutura de dados completa do menu
const menuData = {
  "Soluções": {
    "Financeiro": {
      "Inteligência de Dados": {
        "Gestão de Crédito e Cobrança": [
          "Scores e Indicadores",
          "Relatório de Histórico de Recebíveis de Cartões"
        ],
        "Monitoramento de Subcredenciadoras": [
          "Relatório de Subcredenciadoras"
        ],
        "Antifraude": [
          "Indicadores de Fraude",
          "Motor de Decisão",
          "Plataforma de Recuperação de Valores"
        ],
        "Inteligência de Mercado": [
          "Relatório Panorama e Performance"
        ]
      },
      "Registro": {
        "Recebíveis": [
          "Recebíveis de Cartões",
          "Duplicatas"
        ],
        "Crédito": [
          "Cessão de Crédito"
        ],
        "Balcão": [
          "Renda Fixa",
          "Derivativos"
        ]
      },
      "Depositária": [
        "Depósito Centralizado"
      ],
      "Liquidação": {
        "Boletos": [
          "Plataforma Centralizada de Recebíveis (PCR)",
          "Consulta de Status de Boletos"
        ],
        "Cartões": [
          "Liquidação de Cartões (SLC)",
          "Liquidação de Antecipação de Recebíveis (PIX)"
        ],
        "Outras Operações": [
          "Liquidação de Operações de Crédito (SILOC)",
          "Liquidação de TED (SITRAF)",
          "Pix Automático"
        ]
      },
      "Portabilidade": [
        "Portabilidade de Crédito",
        "Portabilidade de Salário"
      ],
      "Outras Infraestruturas": [
        "Monitoramento do Correspondente Bancário",
        "Serviço de Registro de Crédito Consignado",
        "Plataforma do Cadastro Positivo",
        "Sistema de Transferência de Dados - FUNDEB",
        "Cheque Legal"
      ]
    },
    "Seguros": {
      "Registro": [
        "Operações de Seguros - SRO"
      ],
      "Inteligência de Dados": [
        "Indicadores de Seguros"
      ],
      "Conectividade": [
        "SUTHUB - Plataforma de Distribuição Digital de Seguros"
      ]
    },
    "Imobiliário": {
      "Certificações": [
        "Certificação de Renda Familiar HIS & HMP"
      ],
      "Inteligência de Dados": [
        "Monitoramento de Recebíveis",
        "Núclea by Liquid"
      ]
    },
    "Tokenização": [
      "Núclea Chain",
      "BaaS",
      "Plataforma de Negociação de Cotas (N-COTAS)"
    ],
    "Novidades": []
  },
  "Documentos": {
    "Documentos de Soluções": [
      "Regulatório, Normas e Auditorias",
      "Matriz de Sistemas",
      "Estatísticas Diárias"
    ]
  },
  "Área do Cliente": {
    "Suporte ao Cliente": [
      "Form para Suporte",
      "FAQ"
    ],
    "Portal do Cliente": [
      "Núclea Conecta"
    ]
  },
  "Núclea": {
    "Institucional": [
      "Sobre Nós",
      "Núclea Associação",
      "Governança Corporativa",
      "Imprensa",
      "Parcerias",
      "Fornecedores"
    ],
    "Cultura e Pessoas": {
      "Carreiras": [
        "Programas de Entrada"
      ],
      "ESG": [],
      "Ética e Conduta": []
    },
    "Segurança e Conformidade": [
      "Relatório de Vulnerabilidades",
      "CSIRT",
      "Segurança e LGPD"
    ]
  },
  "Conteúdos": [
    "Blog",
    "Núclea Academy",
    "Podcast",
    "Newsletter"
  ]
};

// Helper para verificar se é um array de strings
const isStringArray = (value: any): boolean => {
  return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'string');
};

// Helper para verificar se tem filhos (objeto ou array não vazio)
const hasChildren = (value: any): boolean => {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length > 0;
  }
  return false;
};

export default function App() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        resetMenu();
      }
    };

    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);

  const resetMenu = () => {
    setActiveMenu(null);
    setPath([]);
  };

  const handleMenuClick = (menuName: string) => {
    if (menuName === "Fale com especialista") {
      window.location.href = "#fale-com-especialista";
      return;
    }
    
    if (activeMenu === menuName) {
      resetMenu();
    } else {
      setActiveMenu(menuName);
      setPath([]);
    }
  };

  const handleItemClick = (item: string, level: number) => {
    const newPath = [...path.slice(0, level), item];
    setPath(newPath);
  };

  // Navegar na hierarquia baseado no path
  const getDataAtPath = (currentPath: string[]): any => {
    if (!activeMenu) return null;
    
    let data: any = menuData[activeMenu as keyof typeof menuData];
    
    for (const key of currentPath) {
      if (data && typeof data === 'object') {
        data = data[key];
      } else {
        return null;
      }
    }
    
    return data;
  };

  // Obter itens para uma coluna específica
  const getItemsForColumn = (columnIndex: number): string[] => {
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
  };

  // Obter título para uma coluna
  const getTitleForColumn = (columnIndex: number): string => {
    if (columnIndex === 0) return activeMenu || '';
    return path[columnIndex - 1] || '';
  };

  // Verificar quantas colunas devem ser exibidas
  const getColumnCount = (): number => {
    if (!activeMenu) return 0;
    
    // Coluna 0 sempre existe
    let count = 1;
    
    // Para cada item no path, adiciona uma coluna se houver dados
    for (let i = 0; i <= path.length; i++) {
      const items = getItemsForColumn(i);
      if (items.length > 0) {
        count = Math.max(count, i + 1);
      }
    }
    
    return count;
  };

  const renderColumn = (columnIndex: number) => {
    const items = getItemsForColumn(columnIndex);
    const title = getTitleForColumn(columnIndex);
    const selectedItem = path[columnIndex];
    
    if (items.length === 0 && columnIndex > 0) return null;
    
    // Verificar se é a última coluna (itens finais sem filhos)
    const isLastColumn = items.length > 0 && items.every(item => {
      const nextPath = [...path.slice(0, columnIndex), item];
      const nextData = getDataAtPath(nextPath);
      return !hasChildren(nextData);
    });
    
    const isFirstColumn = columnIndex === 0;
    const fontSize = isFirstColumn ? '16px' : '13px';
    const zIndex = 40 - (columnIndex * 10);

    return (
      <div 
        key={columnIndex}
        className="w-[282px] flex-shrink-0 relative border-l border-r border-b border-[#E3E3E3] flex flex-col" 
        style={{ boxShadow: '3px 0px 4px 0px rgba(0, 0, 0, 0.16)', zIndex, backgroundColor: '#FFFFFF' }}
      >
        {/* Header */}
        <div className="flex flex-col justify-end" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '25px', paddingBottom: '32px', height: '125px', minHeight: '125px' }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '300', 
            lineHeight: '28px', 
            fontFamily: 'ABC Favorit Variable, system-ui, sans-serif',
            textWrap: 'balance'
          }}>
            {title}
          </h3>
        </div>

        {/* Items */}
        <ul className="space-y-0 flex-grow" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {items.map((item) => {
            const nextPath = [...path.slice(0, columnIndex), item];
            const nextData = getDataAtPath(nextPath);
            const itemHasChildren = hasChildren(nextData);
            const isSelected = selectedItem === item;
            
            return (
              <li 
                key={item}
                className={`cursor-pointer flex items-center justify-between group transition-colors ${
                  isSelected ? 'bg-[#EFD3FF]' : 'hover:bg-gray-50'
                }`}
                onClick={() => handleItemClick(item, columnIndex)}
                style={{ 
                  fontSize, 
                  fontWeight: '500', 
                  fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', 
                  height: '44px',
                  minHeight: '44px',
                  paddingLeft: '25px', 
                  paddingRight: '25px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <span className={`transition-colors flex-1 ${isSelected ? 'text-[#8311DA]' : 'group-hover:text-[#8311DA]'}`} style={{ lineHeight: '1.2', textWrap: 'balance' }}>
                  {item}
                </span>
                {itemHasChildren && (
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-opacity ${
                    isSelected ? 'opacity-100 text-[#8311DA]' : 'opacity-0 group-hover:opacity-100 group-hover:text-[#8311DA]'
                  }`} />
                )}
              </li>
            );
          })}
        </ul>

        {/* Footer - apenas na primeira coluna se for Soluções ou Documentos ou na última coluna */}
        {(isFirstColumn && activeMenu === "Soluções") && (
          <div className="mt-auto">
            <div style={{ paddingLeft: '25px', paddingRight: '25px' }}>
              <div style={{ borderTop: '1px solid #E3E3E3', paddingTop: '24px', paddingBottom: '24px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <h4 style={{ fontFamily: 'ABC Favorit Mono, monospace', fontSize: '16px', fontWeight: '500', color: '#000000', marginBottom: '4px', textTransform: 'uppercase' }}>
                    Documentos
                  </h4>
                  <p style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', fontSize: '13px', fontWeight: '400', color: '#666666', lineHeight: '1.4' }}>
                    Acesse regulatórios, normas, auditorias e estatísticas
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 hover:text-[#8311DA] transition-colors" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: '700', color: '#000000' }}>
                  <span>Acessar documentos</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        )}

        {(isFirstColumn && activeMenu === "Documentos") && (
          <div className="mt-auto">
            <div style={{ paddingLeft: '25px', paddingRight: '25px' }}>
              <div style={{ borderTop: '1px solid #E3E3E3', paddingTop: '24px', paddingBottom: '24px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <h4 style={{ fontFamily: 'ABC Favorit Mono, monospace', fontSize: '16px', fontWeight: '500', color: '#000000', marginBottom: '4px', textTransform: 'uppercase' }}>
                    Documentos
                  </h4>
                  <p style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', fontSize: '13px', fontWeight: '400', color: '#666666', lineHeight: '1.4' }}>
                    Acesse regulatórios, normas, auditorias e estatísticas
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 hover:text-[#8311DA] transition-colors" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: '700', color: '#000000' }}>
                  <span>Acessar documentos</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        )}

        {isLastColumn && activeMenu === "Soluções" && (
          <div className="mt-auto" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '24px', paddingBottom: '24px' }}>
            <a href="#" className="inline-flex items-center gap-2 hover:text-[#8311DA] transition-colors" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: '700', color: '#000000' }}>
              <span>Todas as Soluções</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        )}
      </div>
    );
  };

  const columnCount = getColumnCount();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif' }}>
      {/* Wrapper com ref para incluir header + mega menu */}
      <div ref={menuRef}>
      {/* Faixa preta superior com idiomas */}
      <div className="w-full bg-black" style={{ height: '38px' }}>
        <div className="max-w-[1128px] mx-auto flex items-center justify-end h-full">
          <div className="flex items-center" style={{ gap: '8px' }}>
            <button className="text-white/60 hover:text-[#66FFCC] transition-colors flex items-center" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', fontSize: '11px', gap: '6px' }}>
              <span>EN</span>
              <div style={{ width: '18px', height: '12px', display: 'flex', alignItems: 'center' }}>
                <UsFlag />
              </div>
            </button>
            <span className="text-white/30">|</span>
            <button className="text-white/60 hover:text-[#66FFCC] transition-colors flex items-center" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', fontSize: '11px', gap: '6px' }}>
              <span>ES</span>
              <div style={{ width: '18px', height: '12px', display: 'flex', alignItems: 'center' }}>
                <EsFlag />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <header className="relative bg-white" style={{ borderBottom: '1px solid #E3E3E3', zIndex: 50, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)' }}>
        <div className="max-w-[1128px] mx-auto flex items-center justify-between" style={{ paddingTop: '24px', paddingBottom: '24px', height: '92px' }}>
          {/* Logo */}
          <div style={{ width: '154px', height: '44px' }}>
            <Frame />
          </div>

          {/* Menu principal */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center" style={{ gap: '28px' }}>
              <li>
                <button
                  onClick={() => handleMenuClick("Soluções")}
                  className={`flex items-center transition-colors ${
                    activeMenu === "Soluções" ? 'text-[#BA82FF]' : 'text-black hover:text-[#BA82FF]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', gap: '4px' }}
                >
                  Soluções
                  {activeMenu === "Soluções" ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick("Documentos")}
                  className={`flex items-center transition-colors ${
                    activeMenu === "Documentos" ? 'text-[#BA82FF]' : 'text-black hover:text-[#BA82FF]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', gap: '4px' }}
                >
                  Documentos
                  {activeMenu === "Documentos" ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick("Área do Cliente")}
                  className={`flex items-center transition-colors ${
                    activeMenu === "Área do Cliente" ? 'text-[#BA82FF]' : 'text-black hover:text-[#BA82FF]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', gap: '4px' }}
                >
                  Área do Cliente
                  {activeMenu === "Área do Cliente" ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick("Núclea")}
                  className={`flex items-center transition-colors ${
                    activeMenu === "Núclea" ? 'text-[#BA82FF]' : 'text-black hover:text-[#BA82FF]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', gap: '4px' }}
                >
                  Núclea
                  {activeMenu === "Núclea" ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick("Conteúdos")}
                  className={`flex items-center transition-colors ${
                    activeMenu === "Conteúdos" ? 'text-[#BA82FF]' : 'text-black hover:text-[#BA82FF]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'ABC Favorit Variable, system-ui, sans-serif', gap: '4px' }}
                >
                  Conteúdos
                  {activeMenu === "Conteúdos" ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
              </li>
            </ul>
          </nav>

          {/* Busca e CTA */}
          <div className="flex items-center" style={{ gap: '16px' }}>
            <button className="flex items-center text-black hover:text-[#BA82FF] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleMenuClick("Fale com especialista")}
              style={{ 
                backgroundColor: '#66FFCC',
                color: '#000000',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'ABC Favorit Variable, system-ui, sans-serif',
                height: '36px',
                paddingLeft: '20px',
                paddingRight: '20px',
                whiteSpace: 'nowrap',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Fale com um Especialista
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {activeMenu && (
        <div className="absolute left-0 right-0 z-20" style={{ top: '130px', marginTop: '0px' }}>
          {/* Backdrop desfocado */}
          <div className="absolute left-0 right-0 h-[504px] backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', zIndex: 1 }} />
          
          {/* Fundo desfocado esquerdo */}
          <div className="absolute left-0 h-[504px] backdrop-blur-sm" style={{ width: 'calc(50% - 564px + 282px)', zIndex: 39, backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />
          
          <div className="max-w-[1128px] mx-auto flex gap-0 h-[504px]" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif' }}>
            {Array.from({ length: columnCount }, (_, i) => renderColumn(i))}
          </div>
        </div>
      )}
      </div>

      {/* Conteúdo principal */}
      <main className="relative" style={{ height: 'calc(100vh - 130px)' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="mb-4" style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif' }}>
              Navegue pelo menu completo
            </h1>
            <p style={{ fontFamily: 'ABC Favorit Variable, system-ui, sans-serif' }}>
              Experimente todos os menus com hierarquia dinâmica
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
