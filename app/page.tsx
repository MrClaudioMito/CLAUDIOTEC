
const services = [
  {
    number: "01",
    title: "Manutenção de computadores",
    description:
      "Diagnóstico, reparos e manutenção preventiva para manter seu equipamento funcionando.",
    icon: "▣",
  },
  {
    number: "02",
    title: "Notebooks",
    description:
      "Reparos, troca de componentes, telas, teclados e soluções para problemas de hardware.",
    icon: "▱",
  },
  {
    number: "03",
    title: "Upgrades",
    description:
      "Mais velocidade e desempenho com SSD, memória RAM e melhorias de hardware.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Formatação e software",
    description:
      "Instalação de sistema, configuração, programas e suporte para problemas de software.",
    icon: "</>",
  },
  {
    number: "05",
    title: "Limpeza técnica",
    description:
      "Limpeza interna e manutenção para ajudar a controlar a temperatura do equipamento.",
    icon: "✳",
  },
  {
    number: "06",
    title: "Montagem de PCs",
    description:
      "Montagem, instalação de componentes e orientação para escolher as peças adequadas.",
    icon: "⌘",
  },
];

const products = [
  {
    category: "COMPUTADOR",
    name: "Computadores seminovos",
    description: "Opções para estudar, trabalhar e usar no dia a dia.",
    price: "Consulte disponibilidade",
    icon: "▣",
  },
  {
    category: "NOTEBOOK",
    name: "Notebooks seminovos",
    description: "Equipamentos selecionados conforme a disponibilidade.",
    price: "Consulte disponibilidade",
    icon: "▱",
  },
  {
    category: "COMPONENTES",
    name: "Peças e upgrades",
    description: "Componentes e soluções para melhorar seu equipamento.",
    price: "Consulte disponibilidade",
    icon: "◈",
  },
];

const whatsappUrl =
  "https://wa.me/?text=" +
  encodeURIComponent(
    "Olá! Conheci a CLAUDIOTEC pelo site e gostaria de solicitar um orçamento."
  );

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="CLAUDIOTEC - início">
          <span className="brand-icon">C<span>.</span></span>
          <span>
            <strong>CLAUDIO<span>TEC</span></strong>
            <small>TECNOLOGIA E MANUTENÇÃO</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#parcerias">Parcerias</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar orçamento ↗
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            ASSISTÊNCIA TÉCNICA EM SALVADOR — BA
          </div>

          <h1>
            Tecnologia funcionando.
            <br />
            <span>Problemas resolvidos.</span>
          </h1>

          <p className="hero-description">
            Manutenção, reparos e upgrades para computadores e notebooks.
            Atendimento profissional com foco em diagnóstico e soluções
            para cada necessidade.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar orçamento <span>↗</span>
            </a>
            <a className="button button-secondary" href="#servicos">
              Conhecer serviços ↓
            </a>
          </div>

          <div className="hero-note">
            <span className="note-icon">✓</span>
            Atendimento mediante agendamento
            <span className="note-separator">·</span>
            Salvador, Bahia
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustração de computador e tecnologia">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="tech-window">
            <div className="window-top">
              <span /><span /><span />
              <small>CLAUDIOTEC / SYSTEM</small>
            </div>
            <div className="window-content">
              <div className="device-screen">
                <div className="screen-logo">C<span>.</span></div>
                <div className="screen-line line-one" />
                <div className="screen-line line-two" />
                <div className="screen-line line-three" />
                <div className="screen-check">✓</div>
              </div>
              <div className="device-base" />
            </div>
            <div className="window-caption">
              <span>DIAGNÓSTICO</span>
              <strong>Soluções em tecnologia<span>.</span></strong>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <span>↗</span>
            <div><small>DESEMPENHO</small><strong>Upgrade & reparo</strong></div>
          </div>
          <div className="floating-chip chip-bottom">
            <span>✓</span>
            <div><small>ATENDIMENTO</small><strong>Foco na solução</strong></div>
          </div>
          <div className="visual-grid" />
        </div>
      </section>

      <div className="trust-strip">
        <div><span>01</span> Diagnóstico técnico</div>
        <div><span>02</span> Manutenção e reparos</div>
        <div><span>03</span> Upgrades de desempenho</div>
        <div><span>04</span> Atendimento personalizado</div>
      </div>

      <section className="section services-section" id="servicos">
        <div className="section-heading">
          <div>
            <div className="eyebrow">COMO POSSO AJUDAR</div>
            <h2>Soluções para sua <span>tecnologia.</span></h2>
          </div>
          <p>
            Do diagnóstico à melhoria de desempenho, encontre o serviço
            adequado para o seu computador ou notebook.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Consultar serviço <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-visual">
          <div className="about-monogram">C<span>.</span></div>
          <div className="about-caption">
            <span>CLAUDIOTEC</span>
            <strong>Tecnologia com propósito.</strong>
          </div>
          <div className="about-decoration">CT / 01</div>
        </div>

        <div className="about-content">
          <div className="eyebrow">QUEM ESTÁ POR TRÁS DA CLAUDIOTEC</div>
          <h2>Conhecimento técnico. <span>Experiência prática.</span></h2>
          <p>
            Sou Cláudio, profissional de tecnologia e formado em Ciência
            da Computação. Uno minha formação acadêmica à experiência prática
            com manutenção, diagnóstico e reparo de computadores e notebooks.
          </p>
          <p>
            Meu objetivo é oferecer soluções adequadas para cada equipamento,
            com comunicação clara e atenção às necessidades de cada cliente.
          </p>
          <div className="about-credential">
            <span className="credential-icon">⌘</span>
            <div>
              <strong>Ciência da Computação</strong>
              <small>Formação acadêmica</small>
            </div>
          </div>
          <a className="text-link" href="#contato">
            Vamos conversar <span>↗</span>
          </a>
        </div>
      </section>

      <section className="section equipment-section" id="equipamentos">
        <div className="section-heading">
          <div>
            <div className="eyebrow">LOJA CLAUDIOTEC</div>
            <h2>Tecnologia que cabe <span>na sua necessidade.</span></h2>
          </div>
          <p>
            Confira as categorias de equipamentos e componentes usados.
            Consulte os itens disponíveis e suas condições.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-visual">
                <span className="product-category">{product.category}</span>
                <div className="product-symbol">{product.icon}</div>
                <span className="product-status">Sob consulta</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name}`}>↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="catalog-note">
          Os cards acima são categorias demonstrativas. Os anúncios reais,
          com fotos, preços e especificações, serão cadastrados na próxima etapa.
        </p>
      </section>

      <section className="partnership-section" id="parcerias">
        <div>
          <div className="eyebrow">PARA EMPRESAS E PROFISSIONAIS</div>
          <h2>Vamos construir uma <span>boa parceria?</span></h2>
          <p>
            Precisa de apoio técnico para sua empresa ou busca um parceiro
            para serviços de informática? Vamos conversar sobre sua necessidade.
          </p>
        </div>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
          Conversar sobre parcerias ↗
        </a>
      </section>

      <section className="contact-section" id="contato">
        <div>
          <div className="eyebrow">FALE COM A CLAUDIOTEC</div>
          <h2>Seu próximo passo começa <span>aqui.</span></h2>
          <p>
            Conte um pouco sobre o seu equipamento ou sua necessidade.
            Vamos avaliar a melhor forma de ajudar.
          </p>
        </div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar atendimento ↗
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-icon">C<span>.</span></span>
          <span>
            <strong>CLAUDIO<span>TEC</span></strong>
            <small>TECNOLOGIA E MANUTENÇÃO</small>
          </span>
        </a>
        <p>Assistência técnica e soluções em tecnologia · Salvador, BA</p>
        <span className="copyright">© {new Date().getFullYear()} CLAUDIOTEC</span>
      </footer>
    </main>
  );
}
