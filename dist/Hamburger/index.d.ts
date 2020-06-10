import * as React from 'react';
import './styles.scss';
interface HamburgerProps {
    isToggled: boolean;
    shouldAnimate: boolean;
    onToggle: any;
}
declare const Hamburger: React.FC<HamburgerProps>;
export default Hamburger;
