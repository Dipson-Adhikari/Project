function Footer()
{
    let year = new Date().getFullYear();
    return (
        <footer>
            <h2 style={{backgroundColor:'#212529',color:'white'}}>&copy; {year} My Website.</h2>
        </footer>
    );
}
export default Footer;