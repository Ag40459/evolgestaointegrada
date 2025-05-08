import React, { useState, useEffect } from 'react';
import './App.css';

// Componente de Navegação
const Navbar = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{
      backgroundColor: 'var(--navbar-bg)',
      padding: '1rem 2rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--navbar-text)',
      boxSizing: 'border-box',
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Ecolote
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button 
          onClick={toggleTheme} 
          style={{
            background: 'var(--cta-button-bg)',
            border: 'none',
            color: 'var(--cta-button-text)',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            marginRight: '15px',
            fontSize: '0.9rem'
          }}
        >
          {currentTheme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
        </button>
        <div className="menu-icon" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer' }}>
          <span style={{ fontSize: '2rem' }}>☰</span>
        </div>
      </div>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
        flexDirection: 'row', 
      }}
      className={`nav-links ${isOpen ? "open" : ""}`}
      >
        {[
          {label: 'O que é', href: '#o-que-e'},
          {label: 'Vantagens', href: '#vantagens'},
          {label: 'Inovação', href: '#inovacao'},
          {label: 'Segurança', href: '#seguranca'},
          {label: 'Financeiro', href: '#vantagem-financeira'},
          {label: 'Pré-cadastro', href: '#pre-cadastro'}
        ].map((item) => (
          <li key={item.label} style={{ padding: '0 1rem' }}>
            <a href={item.href} 
               onClick={() => setIsOpen(false)} 
               style={{ color: 'var(--navbar-text)', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <style>{`
        body.dark-theme {
          --main-bg: #1a1a1a;
          --text-color: #e4e6eb;
          --heading-color: #ffffff;
          --section-bg-light: #242526;
          --section-bg-darker: #121212;
          --card-bg: #303030;
          --card-shadow: 0 4px 8px rgba(0,0,0,0.3);
          --navbar-bg: rgba(20, 20, 20, 0.95);
          --navbar-text: #f5f5f5;
          --navbar-bg-mobile-menu: rgba(20, 20, 20, 0.98);
          --input-bg: #3a3b3c;
          --input-border: #555;
          --input-text: #e4e6eb;
          --footer-bg: #121212;
          --footer-text: #b0b3b8;
          --cta-button-bg: #00aaff;
          --cta-button-text: white;
          --link-color: #00aaff;
        }
        body.light-theme {
          --main-bg: #f0f2f5;
          --text-color: #1c1e21;
          --heading-color: #000000;
          --section-bg-light: #ffffff;
          --section-bg-darker: #e9ebee;
          --card-bg: #ffffff;
          --card-shadow: 0 4px 8px rgba(0,0,0,0.1);
          --navbar-bg: rgba(51, 51, 51, 0.95);
          --navbar-text: white;
          --navbar-bg-mobile-menu: rgba(51, 51, 51, 0.98);
          --input-bg: #ffffff;
          --input-border: #ccd0d5;
          --input-text: #1c1e21;
          --footer-bg: #333333;
          --footer-text: #f5f5f5;
          --cta-button-bg: #4CAF50;
          --cta-button-text: white;
          --link-color: #4CAF50;
        }

        body.light-theme .hero-section h1,
        body.light-theme .hero-section p {
          color: #111111 !important;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .App {
            background-color: var(--main-bg);
            color: var(--text-color);
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        h1, h2, h3, h4, h5, h6 {
          color: var(--heading-color);
          margin-top: 0;
        }
        a {
          color: var(--link-color);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        section {
            padding: 60px 20px;
            padding-top: 100px;
            text-align: center;
        }
        .hero-section {
            padding-top: 140px;
            padding-bottom: 80px;
            background-color: var(--section-bg-darker) !important; 
            color: var(--navbar-text);
        }
        .hero-section h1 {
            font-size: 2.8rem;
            margin-bottom: 20px;
            color: var(--navbar-text);
        }
        .hero-section p {
            font-size: 1.2rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30px;
            color: var(--navbar-text);
        }
        section#vantagens {
            background-color: var(--section-bg-light);
        }
        section#pre-cadastro {
            background-color: var(--section-bg-darker);
        }
        .vantagens-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
        }
        .vantagem-card {
            background-color: var(--card-bg);
            box-shadow: var(--card-shadow);
            border-radius: 10px;
            padding: 25px;
            width: 100%;
            max-width: 320px;
            text-align: center;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .vantagem-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        .vantagem-card img {
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
        }
        .vantagem-card h3 {
            color: var(--cta-button-bg);
            font-size: 1.4rem;
            margin-bottom: 10px;
        }
        form {
            background-color: var(--card-bg) !important;
            box-shadow: var(--card-shadow) !important;
            border-radius: 8px;
            padding: 30px !important;
            max-width: 550px !important;
            margin: 30px auto !important;
        }
        form label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            text-align: left;
        }
        input[type="text"], input[type="email"], input[type="tel"] {
            background-color: var(--input-bg);
            border: 1px solid var(--input-border);
            color: var(--input-text);
            width: 100%;
            padding: 12px;
            border-radius: 5px;
            margin-bottom: 20px;
            box-sizing: border-box;
            font-size: 1rem;
        }
        .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 25px;
            background-color: var(--cta-button-bg) !important;
            color: var(--cta-button-text) !important;
            text-decoration: none !important;
            border-radius: 5px;
            font-weight: bold;
            font-size: 1.1rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .cta-button:hover {
            transform: scale(1.05);
            text-decoration: none !important;
        }
        footer {
            padding: 40px 20px !important;
            text-align: center !important;
            background-color: var(--footer-bg) !important;
            color: var(--footer-text) !important;
        }
        footer p {
            margin: 5px 0;
        }
        @media (max-width: 992px) {
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column !important;
            width: 100% !important;
            position: absolute !important;
            top: 70px;
            left: 0 !important;
            background-color: var(--navbar-bg-mobile-menu) !important;
            padding: 1rem 0 !important;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          .nav-links.open {
            display: flex !important;
          }
          .menu-icon {
            display: block !important;
            color: var(--navbar-text);
          }
          nav ul {
            flex-direction: column !important;
            align-items: center !important;
          }
          nav ul li {
            padding: 12px 0 !important;
            width: 100% !important;
            text-align: center !important;
          }
          nav ul li a:hover {
            background-color: rgba(255,255,255,0.1);
            width: 100%;
            display: block;
          }
        }
        @media (min-width: 993px) {
            .nav-links {
                display: flex !important;
            }
            .menu-icon {
                display: none !important;
            }
        }
      `}</style>
    </nav>
  );
};

// Componente Botão Flutuante do WhatsApp
const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s ease'
      }}
      aria-label="Fale conosco pelo WhatsApp"
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
      </svg>
    </a>
  );
};

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
  });

  const [theme, setTheme] = useState('dark');  useEffect(() => {
    const savedTheme = localStorage.getItem('ecoloteTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Define o tema escuro como padrão se não houver tema salvo
      setTheme('dark'); 
    }
  }, []);useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('ecoloteTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Por favor, preencha o nome completo e o e-mail.');
      return;
    }

    try {
      // Substitua '/api/preregister' pela URL real da sua API quando estiver pronta
      const response = await fetch('/api/preregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // const result = await response.json(); // Se a API retornar dados, você pode usá-los
        alert('Pré-cadastro enviado com sucesso! Entraremos em contato em breve.');
        setFormData({ fullName: '', email: '', phone: '', cityState: '' });
      } else {
        // Tratar erros de resposta da API (ex: response.status)
        alert('Houve um problema ao enviar seu pré-cadastro. Tente novamente mais tarde.');
        console.error('Erro ao enviar formulário:', response.statusText);
      }
    } catch (error) {
      alert('Houve um erro de conexão ao enviar seu pré-cadastro. Verifique sua internet e tente novamente.');
      console.error('Erro de rede ao enviar formulário:', error);
    }
  };

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <header className="hero-section">
        <img src="/images/banner_hero_placeholder.svg" alt="Banner Ecolote" style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', marginBottom: '30px', borderRadius: '0 0 20px 20px' }} />
        <h1>Ecolote: A Nova Era da Sua Independência Energética Chegou!</h1>
        <p>Descubra como gerar sua própria energia limpa e acessível, mesmo sem espaço em casa. O Ecolote é a revolução sustentável que você esperava, transformando a energia solar em uma realidade para todos os perfis, de apartamentos a empresas.</p>
        <a href="#pre-cadastro" className="cta-button">Quero Saber Mais e Garantir Meu Lugar ao Sol!</a>
      </header>

      <section id="o-que-e">
        <h2>Ecolote: Energia Solar Inteligente, Sustentável e Sua de Verdade.</h2>
        <img src="/images/ilustracao_o_que_e.svg" alt="Ilustração O que é Ecolote" style={{ maxWidth: '450px', width: '90%', margin: '30px auto', display: 'block' }} />
        <p style={{maxWidth: '800px', margin: '0 auto 20px auto'}}>Bem-vindo ao Ecolote, o primeiro bairro rural solar sustentável do Brasil! Pensado para quem busca autonomia energética e um futuro mais verde, o Ecolote oferece uma solução inovadora e acessível. Se você mora em apartamento, tem um imóvel alugado, não possui espaço físico para painéis solares ou representa uma empresa consciente, o Ecolote foi feito para você.</p>
        <p style={{maxWidth: '800px', margin: '0 auto'}}>O funcionamento é simples e transparente: você adquire um lote de terra privativo, onde uma usina solar individual já estará instalada e regularizada em seu nome. Toda a energia gerada é convertida em créditos que abatem diretamente o valor da sua conta de luz, onde quer que você esteja dentro do estado. É a sua energia, do seu jeito, contribuindo para um planeta mais limpo.</p>
      </section>

      <section id="vantagens">
        <h2 style={{ marginBottom: '50px' }}>Descubra os Benefícios que Só o Ecolote Oferece.</h2>
        <div className="vantagens-grid">
          <div className="vantagem-card">
            <img src="/images/icon_propriedade.svg" alt="Ícone Propriedade" />
            <h3>Sua Terra, Sua Energia, Sua Liberdade</h3>
            <p>Diferente das fazendas solares tradicionais, no Ecolote o lote e a usina são 100% seus. Um patrimônio real, que você pode vender, herdar ou transferir.</p>
          </div>
          <div className="vantagem-card">
            <img src="/images/icon_economia_sustentavel.svg" alt="Ícone Economia Sustentável" />
            <h3>Economia que Faz a Diferença, Planeta que Agradece</h3>
            <p>Reduza drasticamente ou até elimine sua conta de luz todos os meses e contribua para a preservação do meio ambiente.</p>
          </div>
          <div className="vantagem-card">
            <img src="/images/icon_energia_sem_barreiras.svg" alt="Ícone Energia Sem Barreiras" />
            <h3>Energia Solar Sem Barreiras, Para Todos os Lares</h3>
            <p>Mesmo sem telhado disponível ou espaço físico, você alcança a tão sonhada independência energética.</p>
          </div>
          <div className="vantagem-card">
            <img src="/images/icon_creditos_flexiveis.svg" alt="Ícone Créditos Flexíveis" />
            <h3>Seus Créditos de Energia, Onde Você Precisar</h3>
            <p>Utilize os créditos para abater a conta de luz de qualquer imóvel em seu nome dentro do mesmo estado.</p>
          </div>
          <div className="vantagem-card">
            <img src="/images/icon_energia_sobra.svg" alt="Ícone Energia de Sobra" />
            <h3>Energia de Sobra? Futuro Garantido!</h3>
            <p>Saldo de créditos armazenado em seu CPF por até 5 anos.</p>
          </div>
          <div className="vantagem-card">
            <img src="/images/icon_bairro_sustentavel.svg" alt="Ícone Bairro Sustentável" />
            <h3>Um Bairro que Respira Sustentabilidade</h3>
            <p>Mini reserva ambiental, trilhas ecológicas e espaços para educação ambiental.</p>
          </div>
        </div>
      </section>

      <section id="inovacao">
        <h2>Ecolote: A Vanguarda da Energia Solar no Brasil.</h2>
        <img src="/images/ilustracao_inovacao.svg" alt="Ilustração Inovação Ecolote" style={{ maxWidth: '450px', width: '90%', margin: '30px auto', display: 'block' }} />
        <p style={{maxWidth: '800px', margin: '0 auto 20px auto'}}>Somos pioneiros ao unir a posse de um lote de terra rural com uma usina solar individual e a praticidade de utilizar os créditos de energia em centros urbanos. Uma solução para quem antes não tinha essa possibilidade.</p>
        <p style={{maxWidth: '800px', margin: '0 auto'}}>O Ecolote foi planejado para ser surpreendentemente acessível, com parcelamento facilitado, tornando-se um investimento inteligente no seu futuro e no do planeta.</p>
      </section>

      <section id="seguranca" style={{backgroundColor: 'var(--section-bg-light)'}}>
        <h2>Invista no Ecolote com Total Tranquilidade e Segurança.</h2>
        <p style={{maxWidth: '800px', margin: '20px auto'}}>Seu lote e usina regularizados em seu nome, garantia de 10 anos para equipamentos, garantia de geração de até 25 anos, seguro contra furto/roubo e transparência nos custos futuros.</p>
      </section>

      <section id="vantagem-financeira">
        <h2>Ecolote: O Investimento Inteligente que Substitui Sua Conta de Luz.</h2>
        <p style={{maxWidth: '800px', margin: '20px auto 20px auto'}}>Transforme o gasto mensal com a conta de luz em um investimento no seu futuro. Parcelas planejadas para serem iguais ou menores que sua conta atual, com prazo para acabar!</p>
        <p style={{maxWidth: '800px', margin: '0 auto'}}>Instalação em apenas 30 dias e valorização do seu patrimônio.</p>
      </section>

      <section id="pre-cadastro">
        <h2>O Futuro da Energia é Solar. O Futuro é Ecolote. Faça Parte!</h2>
        <p style={{maxWidth: '700px', margin: '20px auto 30px auto'}}>Não perca a oportunidade de ser um dos pioneiros! Faça seu pré-cadastro agora mesmo, sem compromisso, e tenha prioridade para receber informações exclusivas.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Nome Completo:</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="email">Seu Melhor E-mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="phone">Telefone/WhatsApp (Opcional):</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="cityState">Cidade/Estado:</label>
            <input type="text" id="cityState" name="cityState" value={formData.cityState} onChange={handleInputChange} />
          </div>
          <button type="submit" className="cta-button">Quero Ser um Ecoloteiro Pioneiro!</button>
        </form>
        <p style={{ marginTop: '25px', fontSize: '0.9em' }}>Ao se pré-cadastrar, você não assume nenhum compromisso de compra. Seus dados estão seguros conosco.</p>
      </section>

      <footer>
        <p>© 2025 Ecolote. Todos os direitos reservados.</p>
        <p>contato@ecolote.com.br (exemplo)</p>
      </footer>
      <WhatsAppButton phoneNumber="5511999999999" message="Olá! Gostaria de saber mais sobre o Ecolote." />
    </div>
  );
}

export default App;

