import * as React from 'react';
import {colors} from "../../styles/colors";



const Footer: React.FC = () => {
    const footerStyle: React.CSSProperties = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '16px',
        bottom: 0,
        width: '100%',
        height: '120px'
    };

    const sectionStyle: React.CSSProperties = {
        fontSize: '14px', 
         
    };



    return (
        <footer style={footerStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={sectionStyle}>
                    <h3>Contact Us</h3>
                    <p>Email: Unity_Umbrella@email.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div style={sectionStyle}>
                   <a href=""><h3>Follow Us</h3></a>  
                   <a href="www.Twitter.com"><p>Twitter</p></a> 
                  <a href="www.Facebook.com"><p>Facebook</p></a>  
                   <a href="www.Instragram.com"><p>Instagram</p></a> 
                </div>
                <div style={sectionStyle}>
                    <h3>Links</h3>
                   <a href="/"><p>Home</p></a> 
                    <a href="about-us"><p>About Us</p></a>
                   <a href="contact-us"><p>Contact</p></a> 
                </div>
            </div>
            <div style={{ ...sectionStyle, marginTop: '20px' }}>
                <p>&copy; 2023 Unity_Umbrella. All rights reserved.</p>
            </div>
        </footer>
    );
};


export default Footer;
