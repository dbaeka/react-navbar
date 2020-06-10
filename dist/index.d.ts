import * as React from 'react';
import { ThemeProps as TProps } from './theme';
import './styles.scss';
interface ThemeProps extends TProps {
}
interface NavbarProps {
    brand: JSX.Element;
    leftLinks?: JSX.Element;
    rightLinks?: JSX.Element;
    className?: string;
    menuClassName?: string;
    theme?: ThemeProps;
    shouldHideOnScroll?: boolean;
    shouldAnimate?: boolean;
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
export { NavbarProps, ThemeProps };
