function Footer()
{
    let year = new Date().getFullYear();
    return (
        <footer>
            <h2 style={{backgroundColor:'red',color:'white'}}>&copy; {year} My Website.</h2>
        </footer>
    );
}
export default Footer;