import React from 'react';
import './App.css';
import fotoPerfil from './assets/foto_perfil_karen.jpeg';

export default function App() {
  return (
    <div className="app-container">
     {/* NAV */}
<nav>
  <span className="nav-logo">Karen Schneider</span>
  <ul className="nav-links"> {/* <-- Corrigido aqui para className */}
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#pilares">Atuação</a></li>
    <li><a href="#ia">Agentes IA</a></li>
    <li><a href="#maps">Maps & Presença</a></li>
    <li><a href="#trajetoria">Trajetória</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>

      {/* HERO */}
      <section className="hero" style={{ paddingTop: 0 }}>
        <div className="hero-bg"></div>
        <div className="hero-grid-wrapper">
          <div className="hero-content">
            <p className="hero-eyebrow">Business Strategist &nbsp;·&nbsp; São Paulo &amp; Global</p>
            <h1>Estratégia que<br /><em>conecta mercados,</em><br />tecnologia e marcas.</h1>
            <p className="hero-sub">
              Mais de 20 anos construindo pontes entre negócios, culturas e resultados — 
              da ONU em Viena ao golfe feminino no Brasil, da inteligência artificial 
              ao posicionamento de marcas no Google Maps.
            </p>
            <div className="hero-tags">
              <span className="tag">Comunicação Estratégica</span>
              <span className="tag">Agentes de IA para Negócios</span>
              <span className="tag">Google Maps &amp; Presença Digital</span>
              <span className="tag">Branding Internacional</span>
              <span className="tag">Relações Institucionais</span>
              <span className="tag">4 Idiomas</span>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="profile-image-frame">
              <img 
                src={fotoPerfil} 
                alt="Karen Schneider" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre">
        <div className="section-label">Perfil Profissional</div>
        <div className="bio-grid">
          <div>
            <h2>Uma estrategista formada<br />em <em>múltiplos mundos.</em></h2>
            <p className="lead">
              Jornalista de formação, diplomata por vocação, estrategista por experiência. 
              Karen Schneider construiu uma trajetória singular: das rádios Gaúcha e CBN 
              às conferências da ONU em Viena; das ruas de Madri às arenas de inovação 
              global do Horasis em São Paulo.
            </p>
            <p className="lead">
              Hoje, atua na interseção entre comunicação de alto nível, tecnologia de 
              inteligência artificial e as novas fronteiras de visibilidade digital — 
              ajudando empresas, marcas e líderes a ocuparem espaços estratégicos no 
              mercado com autoridade e consistência.
            </p>
          </div>
          <div>
            <div className="stats-row">
              <div className="bio-stat">
                <div className="number">20+</div>
                <div className="stat-label">Anos de atuação<br />em comunicação estratégica</div>
              </div>
              <div className="bio-stat">
                <div className="number">10</div>
                <div className="stat-label">Anos na Europa<br />Espanha &amp; Áustria</div>
              </div>
              <div className="bio-stat">
                <div className="number">4</div>
                <div className="stat-label">Idiomas fluentes<br />PT · ES · EN · DE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES DE ATUAÇÃO */}
      <section id="pilares" className="services">
        <div className="section-label">Pilares de Atuação</div>
        <h2>O que Karen<br /><em>entrega.</em></h2>
        <div className="pillars-grid">
          <div className="pillar">
            <span className="pillar-icon">◈</span>
            <span className="pillar-num">01</span>
            <h3>Estratégia de Negócios</h3>
            <p>Diagnóstico de posicionamento, mapeamento de oportunidades e construção de planos de crescimento que integram marca, mercado e tecnologia em uma direção coerente.</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">◈</span>
            <span className="pillar-num">02</span>
            <h3>Agentes de IA para Negócios</h3>
            <p>Treinamento e implementação de Agentes de Inteligência Artificial customizados para comunicação estratégica, atendimento e eficiência operacional de empresas de qualquer porte.</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">◈</span>
            <span className="pillar-num">03</span>
            <h3>Presença Digital &amp; Google Maps</h3>
            <p>Posicionamento estratégico de negócios no Google Maps e nas buscas por IA — a nova vitrine do consumidor moderno. Da otimização de perfil à estratégia de reputação local e global.</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">◈</span>
            <span className="pillar-num">04</span>
            <h3>Branding &amp; Posicionamento</h3>
            <p>Construção e reposicionamento de marcas com profundidade estratégica: identidade, narrativa, canais e consistência de comunicação para que a marca ocupe o lugar que merece.</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">◈</span>
            <span className="pillar-num">05</span>
            <h3>Relações Institucionais</h3>
            <p>Articulação com stakeholders nacionais e internacionais, governos, organismos multilaterais e lideranças empresariais — com o protocolo e a sensibilidade de quem viveu esse universo.</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">◈</span>
            <span className="pillar-num">06</span>
            <h3>Marketing Internacional</h3>
            <p>Estratégias para mercados da América do Norte, Europa e América Latina — campanhas, influenciadores, parcerias com varejistas premium e expansão de marcas brasileiras ao exterior.</p>
          </div>
        </div>
      </section>

      {/* IA SECTION */}
      <section id="ia" className="ia-section">
        <div className="section-label">Inteligência Artificial</div>
        <div className="ia-block">
          <div>
            <h2>Negócios que falam<br />a língua da <em>IA.</em></h2>
            <p className="lead">
              A inteligência artificial não é mais uma tendência — é infraestrutura. 
              Karen Schneider atua no treinamento de Agentes de IA customizados para 
              que empresas se comuniquem com mais eficiência, consistência e escala.
            </p>
            <p className="lead">
              Cada agente é treinado com a identidade, o tom e os objetivos estratégicos 
              do negócio, transformando a comunicação em um ativo operacional real.
            </p>
          </div>
          <div className="ia-visual">
            <div className="ia-row"><span className="dot"></span> Diagnóstico da comunicação atual do negócio</div>
            <div className="ia-row"><span className="dot"></span> Definição de personalidade e tom do Agente</div>
            <div className="ia-row"><span className="dot"></span> Treinamento com base em objetivos estratégicos</div>
            <div className="ia-row"><span className="dot"></span> Integração com canais de atendimento e vendas</div>
            <div className="ia-row"><span className="dot"></span> Monitoramento e refinamento contínuo</div>
            <div className="ia-row"><span className="dot"></span> Capacitação da equipe interna para gestão do Agente</div>
          </div>
        </div>
      </section>

      {/* MAPS SECTION */}
      <section id="maps">
        <div className="section-label">Google Maps &amp; Presença Digital</div>
        <div className="maps-intro">
          <h2>Ser encontrado<br />é a nova <em>estratégia.</em></h2>
          <p className="lead">
            O Google Maps deixou de ser apenas um guia de rotas. Hoje, é o primeiro 
            ponto de contato entre o consumidor e o negócio — e as buscas por IA 
            amplificaram ainda mais esse papel. Estar presente não basta: é preciso 
            estar posicionado estrategicamente.
          </p>
          <p className="lead">
            Karen Schneider oferece uma metodologia completa para que pequenos e grandes 
            negócios ocupem com autoridade esse novo espaço de visibilidade, 
            em parceria com especialistas em comunicação digital.
          </p>
        </div>
        <div className="maps-cards">
          <div className="card">
            <h4>Otimização de Perfil</h4>
            <p>Auditoria e reestruturação completa do perfil no Google Maps: categorias, fotos, horários, atributos e descrições que geram relevância real nas buscas locais e por IA.</p>
          </div>
          <div className="card">
            <h4>Estratégia de Reputação</h4>
            <p>Gestão de avaliações, construção de autoridade local e posicionamento consistente que transforma a opinião do cliente em ativo estratégico para o negócio.</p>
          </div>
          <div className="card">
            <h4>Visibilidade para IA</h4>
            <p>Com o crescimento das buscas por inteligência artificial, garantir que o negócio seja "compreendido" pelas IAs é tão importante quanto aparecer no Google — e Karen conecta essas duas frentes.</p>
          </div>
          <div className="card">
            <h4>Integração de Marca</h4>
            <p>A presença digital não existe isolada: ela precisa dialogar com o branding, a comunicação e os objetivos estratégicos do negócio para gerar resultados sustentáveis.</p>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section id="trajetoria">
        <div className="section-label">Trajetória</div>
        <h2>Uma carreira construída<br /><em>em movimento.</em></h2>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-year">2023–2027</div>
            <div>
              <div className="tl-role">Embaixadora para a Alemanha</div>
              <div className="tl-org">IBREI – Instituto Brasileiro de Relações Empresariais Internacionais</div>
              <div className="tl-desc">Representação institucional do Brasil junto à Alemanha. Organização do primeiro evento IBREI em Frankfurt com o Secretário de Estado de Hessen. Atuação nas celebrações do Bicentenário da Imigração Alemã no RS.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-year">Abr–Nov 2025</div>
            <div>
              <div className="tl-role">Coordenadora Executiva &amp; Relações Institucionais</div>
              <div className="tl-org">Horasis Global Summit – São Paulo</div>
              <div className="tl-desc">Colaboração direta com Dr. Frank-Jürgen Richter (ex-diretor do Fórum Econômico Mundial) na organização do Summit com CEOs, diplomatas e líderes globais.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-year">2022–2026</div>
            <div>
              <div className="tl-role">Co-fundadora &amp; Diretora de Comunicação Estratégica</div>
              <div className="tl-org">Mulheres &amp; Golfe – Instituto Chaves</div>
              <div className="tl-desc">Construiu o maior grupo de mulheres golfistas iniciantes do Brasil em 2 anos. O programa foi adotado como modelo de referência pela Confederação Brasileira de Golfe.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-year">2019–2020</div>
            <div>
              <div className="tl-role">Diretora de Marketing Internacional</div>
              <div className="tl-org">Surya Brasil (EUA, Europa, América do Sul)</div>
              <div className="tl-desc">Estratégias de marketing para Whole Foods Market, Natural Grocers e Sprouts. Gestão de influenciadoras americanas e campanhas patrocinadas no varejo premium dos EUA.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-year">2007–2010</div>
            <div>
              <div className="tl-role">Consultora de Comunicação Estratégica</div>
              <div className="tl-org">Bwin Entertainment AG – Viena, Áustria</div>
              <div className="tl-desc">Atuação em uma das maiores empresas de entretenimento online da Europa. Participação no processo de aquisição da PokerRoom e desenvolvimento de novos produtos.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-year">2005–2006</div>
            <div>
              <div className="tl-role">Supervisora – Reuniões e Conferências Internacionais</div>
              <div className="tl-org">ONU – Agência Internacional de Energia Atômica (AIEA) – Viena</div>
              <div className="tl-desc">Supervisão de conferências multilaterais, protocolos diplomáticos e gestão de documentação em um dos mais relevantes organismos internacionais do mundo.</div>
            </div>
          </div>
        </div>
      </section>

      {/* IDIOMAS */}
      <section className="skills-dark">
        <div className="section-label">Idiomas &amp; Competências</div>
        <h2>Fluente em<br /><em>quatro línguas.</em><br />Estratégica em todas.</h2>
        <div className="lang-grid">
          <div className="lang-block">
            <div className="lang-name">Português</div>
            <div className="lang-level">Nativo</div>
          </div>
          <div className="lang-block">
            <div className="lang-name">Español</div>
            <div className="lang-level">Fluente</div>
          </div>
          <div className="lang-block">
            <div className="lang-name">English</div>
            <div className="lang-level">Fluente</div>
          </div>
          <div className="lang-block">
            <div className="lang-name">Deutsch</div>
            <div className="lang-level">Fluente – fala e escrita</div>
          </div>
        </div>
        <div className="skills-tags">
          <span className="tag">Relações Institucionais</span>
          <span className="tag">Diplomacia de Negócios</span>
          <span className="tag">Comunicação Estratégica</span>
          <span className="tag">Gestão de Eventos Internacionais</span>
          <span className="tag">Branding &amp; Posicionamento</span>
          <span className="tag">Marketing Internacional</span>
          <span className="tag">Agentes de IA</span>
          <span className="tag">Google Maps Strategy</span>
          <span className="tag">Captação de Patrocínios</span>
          <span className="tag">Liderança Multicultural</span>
          <span className="tag">Curadoria Institucional</span>
          <span className="tag">Stakeholder Management</span>
        </div>
      </section>

      {/* CONTATO */}
      <div id="contato" className="contact-band">
        <h2>Vamos conversar sobre<br /><em>o seu negócio?</em></h2>
        <div className="contact-info">
          <a href="https://wa.me/5511976869042" target="_blank" rel="noreferrer">📱 (11) 97686-9042 · WhatsApp</a>
          <a href="mailto:karenpadma@hotmail.com">karenpadma@hotmail.com</a>
          <a href="https://linkedin.com/in/karen-schneider-12b64929" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="contact-city">São Paulo – SP</span>
        </div>
      </div>

      <footer>
        <p>© 2026 Karen Schneider &nbsp;·&nbsp; Business Strategist</p>
        <p style={{ letterSpacing: '.1em', textTransform: 'uppercase' }}>IA · Branding · Google Maps · Relações Internacionais</p>
      </footer>
    </div>
  );
}
