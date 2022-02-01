const Footer = () => {
    return (
        <footer className="page-footer indigo">
            <div className="footer-copyright">
                <div className="container">
                    © { new Date().getFullYear() } Andrey Shevelev
                    <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
