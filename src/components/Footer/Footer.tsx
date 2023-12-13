import * as React from 'react';
import {colors} from "../../styles/colors";



const Footer: React.FC = () => {
    const footerStyle: React.CSSProperties = {
        backgroundColor: colors.black,
        color: '#fff',
        padding: '16px',
        bottom: 0,
        width: '100%',
        height: '120px'
    };

    const sectionStyle: React.CSSProperties = {
        fontSize: '18px', 
        margin:"20px"         
    };



    return (
        <footer style={footerStyle} >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={sectionStyle}>
                   <a href="/"><p>Home</p></a> 
                    <a href="about-us"><p>About Us</p></a>
                   <a href="contact-us"><p>Contact</p></a> 
                </div>
                <div style={{ ...sectionStyle, marginTop: '20px' }}>
                    <p>All Rights Reserved &copy; 2023 Unity_Umbrella.</p>
                </div>
                <div style={sectionStyle}>
                    {/* <h3>Contact Us</h3> */}
                    <p>Email: Unity_Umbrella@email.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                
            </div>
            
        </footer>
    );
};


export default Footer;
