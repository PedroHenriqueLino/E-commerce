import './Footer.css';

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-section">
                    <h3>Compre Já</h3>
                    <p>Encontre tudo o que você precisa em um só lugar.</p>
                </div>

                <div className="footer-section">
                    <h4>Sobre nós</h4>
                    <a href="#">Quem somos</a>
                    <a href="#">Contato</a>
                    <a href="#">Termos de uso</a>
                </div>

                <div className="footer-section">
                    <h4>Atendimento</h4>
                    <a href="#">Central de ajuda</a>
                    <a href="#">Formas de pagamento</a>
                    <a href="#">Política de privacidade</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Compre Já. Todos os direitos reservados.</p>
            </div>

        </footer>
    )
}

export default Footer