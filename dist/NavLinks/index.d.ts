import * as React from 'react';
import './styles.scss';
interface NavLinksProps {
    customClassName: string;
    isOpen: boolean;
    shouldAnimate: boolean;
    leftLinks?: JSX.Element;
    rightLinks?: JSX.Element;
}
declare const NavLinks: React.FC<NavLinksProps>;
export default NavLinks;
