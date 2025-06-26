import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Marcus Vidal</h1>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#hero" aria-label="Ir para a seção Início">Início</a>
          <a href="#about" aria-label="Ir para a seção Sobre">Sobre</a>
          <a href="#skills" aria-label="Ir para a seção Habilidades">Skills</a>
          <a href="#projects" aria-label="Ir para a seção Projetos">Projetos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;