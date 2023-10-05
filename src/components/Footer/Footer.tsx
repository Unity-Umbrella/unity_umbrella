import * as React from 'react';
import {colors} from "../../styles/colors";

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: colors.primary, color: '#fff', padding: '10px' }}>
            <div>
                <p>Footer Content</p>
            </div>
        </footer>
    );
};

export default Footer;
