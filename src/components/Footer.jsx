import "./Footer.css";

function Footer(props){

    return(

        <footer id="footer" className="footer">

            <h2>{props.company}</h2>

            <p>Email : demo@gmail.com</p>

            <p>Phone : +91 9876543210</p>

        </footer>

    )

}

export default Footer;