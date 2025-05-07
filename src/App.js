import React, { useState } from 'react';
import './App.css'; // Assuming App.css will be created or modified for styles

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.fullName || !formData.email) {
      alert('Por favor, preencha o nome completo e o e-mail.');
      return;
    }
    console.log('Formulário de pré-cadastro enviado:', formData);
    alert('Pré-cadastro enviado com sucesso! Entraremos em contato em breve.');
    // Here you would typically send the data to a backend or email service
    setFormData({ fullName: '', email: '', phone: '', cityState: '' });
  };

  return (
    <div className="App">
      <header className="hero-section" style={{ backgroundImage: 'url(/placeholder-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1>Ecolote: A Nova Era da Sua Independência Energética Chegou!</h1>
        <p>Descubra como gerar sua própria energia limpa e acessível, mesmo sem espaço em casa. O Ecolote é a revolução sustentável que você esperava, transformando a energia solar em uma realidade para todos os perfis, de apartamentos a empresas.</p>
        <a href="#pre-cadastro" className="cta-button" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Quero Saber Mais e Garantir Meu Lugar ao Sol!</a>
      </header>

      <section id="o-que-e" style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Ecolote: Energia Solar Inteligente, Sustentável e Sua de Verdade.</h2>
        <p>Bem-vindo ao Ecolote, o primeiro bairro rural solar sustentável do Brasil! Pensado para quem busca autonomia energética e um futuro mais verde, o Ecolote oferece uma solução inovadora e acessível. Se você mora em apartamento, tem um imóvel alugado, não possui espaço físico para painéis solares ou representa uma empresa consciente, o Ecolote foi feito para você.</p>
        <p>O funcionamento é simples e transparente: você adquire um lote de terra privativo, onde uma usina solar individual já estará instalada e regularizada em seu nome. Toda a energia gerada é convertida em créditos que abatem diretamente o valor da sua conta de luz, onde quer que você esteja dentro do estado. É a sua energia, do seu jeito, contribuindo para um planeta mais limpo.</p>
      </section>

      <section id="vantagens" style={{ padding: '50px 20px', backgroundColor: '#f4f4f4' }}>
        <h2 style={{ textAlign: 'center' }}>Descubra os Benefícios que Só o Ecolote Oferece.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <div className="vantagem-card" style={{ width: '300px', margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>Sua Terra, Sua Energia, Sua Liberdade</h3>
            <p>Diferente das fazendas solares tradicionais, no Ecolote o lote e a usina são 100% seus. Um patrimônio real, que você pode vender, herdar ou transferir.</p>
          </div>
          <div className="vantagem-card" style={{ width: '300px', margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>Economia que Faz a Diferença, Planeta que Agradece</h3>
            <p>Reduza drasticamente ou até elimine sua conta de luz todos os meses e contribua para a preservação do meio ambiente.</p>
          </div>
          <div className="vantagem-card" style={{ width: '300px', margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>Energia Solar Sem Barreiras, Para Todos os Lares</h3>
            <p>Mesmo sem telhado disponível ou espaço físico, você alcança a tão sonhada independência energética.</p>
          </div>
          <div className="vantagem-card" style={{ width: '300px', margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>Seus Créditos de Energia, Onde Você Precisar</h3>
            <p>Utilize os créditos para abater a conta de luz de qualquer imóvel em seu nome dentro do mesmo estado.</p>
          </div>
           <div className="vantagem-card" style={{ width: '300px', margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>Energia de Sobra? Futuro Garantido!</h3>
            <p>Saldo de créditos armazenado em seu CPF por até 5 anos.</p>
          </div>
           <div className="vantagem-card" style={{ width: '300px', margin: '15px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>Um Bairro que Respira Sustentabilidade</h3>
            <p>Mini reserva ambiental, trilhas ecológicas e espaços para educação ambiental.</p>
          </div>
        </div>
      </section>

      <section id="inovacao" style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Ecolote: A Vanguarda da Energia Solar no Brasil.</h2>
        <p>Somos pioneiros ao unir a posse de um lote de terra rural com uma usina solar individual e a praticidade de utilizar os créditos de energia em centros urbanos. Uma solução para quem antes não tinha essa possibilidade.</p>
        <p>O Ecolote foi planejado para ser surpreendentemente acessível, com parcelamento facilitado, tornando-se um investimento inteligente no seu futuro e no do planeta.</p>
      </section>

      <section id="seguranca" style={{ padding: '50px 20px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <h2>Invista no Ecolote com Total Tranquilidade e Segurança.</h2>
        <p>Seu lote e usina regularizados em seu nome, garantia de 10 anos para equipamentos, garantia de geração de até 25 anos, seguro contra furto/roubo e transparência nos custos futuros.</p>
      </section>

      <section id="vantagem-financeira" style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Ecolote: O Investimento Inteligente que Substitui Sua Conta de Luz.</h2>
        <p>Transforme o gasto mensal com a conta de luz em um investimento no seu futuro. Parcelas planejadas para serem iguais ou menores que sua conta atual, com prazo para acabar!</p>
        <p>Instalação em apenas 30 dias e valorização do seu patrimônio.</p>
      </section>

      <section id="pre-cadastro" style={{ padding: '50px 20px', backgroundColor: '#e9e9e9', textAlign: 'center' }}>
        <h2>O Futuro da Energia é Solar. O Futuro é Ecolote. Faça Parte!</h2>
        <p>Não perca a oportunidade de ser um dos pioneiros! Faça seu pré-cadastro agora mesmo, sem compromisso, e tenha prioridade para receber informações exclusivas.</p>
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="fullName" style={{ display: 'block', marginBottom: '5px' }}>Nome Completo:</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Seu Melhor E-mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Telefone/WhatsApp (Opcional):</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="cityState" style={{ display: 'block', marginBottom: '5px' }}>Cidade/Estado:</label>
            <input type="text" id="cityState" name="cityState" value={formData.cityState} onChange={handleInputChange} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <button type="submit" className="cta-button" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Quero Ser um Ecoloteiro Pioneiro!</button>
        </form>
        <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Ao se pré-cadastrar, você não assume nenhum compromisso de compra. Seus dados estão seguros conosco.</p>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
        <p>© 2025 Ecolote. Todos os direitos reservados.</p>
        <p>contato@ecolote.com.br (exemplo)</p>
      </footer>
    </div>
  );
}

export default App;

