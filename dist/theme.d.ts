import * as React from 'react';
export interface ThemeProps {
    backgroundColor?: string;
    mainColor?: string;
    menuBgColor?: string;
    height?: string;
    sliderWidth?: string;
}
export declare const themeMapping: ThemeProps;
export declare const defaultTheme: ThemeProps;
export declare const useTheme: (navRef: React.RefObject<HTMLElement>, theme: ThemeProps) => void;
