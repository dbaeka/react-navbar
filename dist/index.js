

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

___$insertStyle(".burger {\n  display: none;\n  background-color: transparent;\n  width: 25px;\n  height: 22px;\n  border: none;\n  padding: 0;\n  position: relative;\n  z-index: 300;\n  cursor: pointer;\n}\n@media (max-width: 943px) {\n  .burger {\n    display: block;\n  }\n}\n.burger .patty-static-position:nth-child(1), .burger .patty:nth-child(1) {\n  top: 0;\n}\n.burger .patty-static-position:nth-child(2), .burger .patty:nth-child(2) {\n  top: 9px;\n}\n.burger .patty-static-position:nth-child(3), .burger .patty:nth-child(3) {\n  top: 18px;\n}\n.burger .patty-active-position:nth-child(1), .burger .patty.active:nth-child(1) {\n  transform: rotate(45deg);\n  left: 3.5px;\n}\n.burger .patty-active-position:nth-child(2), .burger .patty.active:nth-child(2) {\n  width: 0%;\n  opacity: 0;\n}\n.burger .patty-active-position:nth-child(3), .burger .patty.active:nth-child(3) {\n  transform: rotate(-45deg);\n  left: 3.5px;\n}\n.burger .patty {\n  display: block;\n  position: absolute;\n  height: 3px;\n  width: 25px;\n  background-color: var(--main-color);\n  border-radius: 12px;\n  opacity: 1;\n  left: 0;\n  transform-origin: left center;\n  pointer-events: none;\n}\n.burger .patty.active {\n  opacity: 0.6;\n}\n.burger .patty.animate {\n  transition: 300ms ease-in-out;\n}\n.burger .patty.animate.active {\n  transition: 300ms ease-in-out;\n}");

var Hamburger = function (_a) {
    var isToggled = _a.isToggled, shouldAnimate = _a.shouldAnimate, onToggle = _a.onToggle;
    var otherClassNames = [];
    if (shouldAnimate) {
        !!isToggled
            ? otherClassNames.push('animate active')
            : otherClassNames.push('animate');
    }
    else {
        !!isToggled && otherClassNames.push('active');
    }
    var pattyClassName = ("patty " + otherClassNames).trim();
    return (React.createElement("button", { className: "burger", type: "button", onClick: onToggle },
        React.createElement("span", { className: pattyClassName }),
        React.createElement("span", { className: pattyClassName }),
        React.createElement("span", { className: pattyClassName })));
};
//# sourceMappingURL=index.js.map

var useScrollSlide = function (height, shouldScroll) {
    if (height === void 0) { height = '55px'; }
    var pos = typeof window !== 'undefined' ? window.pageYOffset : 0;
    var _a = React.useState(false), isHidden = _a[0], setHidden = _a[1];
    var _b = React.useState(pos), prevPos = _b[0], setPrevPos = _b[1];
    var navHeight = getNumber(height);
    React.useEffect(function () {
        if (shouldScroll === false)
            return;
        var handleScroll = function () {
            var curPos = window.pageYOffset;
            var posDifference = prevPos - curPos;
            if (curPos <= navHeight)
                return setHidden(false);
            posDifference > navHeight && isHidden && setHidden(false);
            posDifference < -navHeight && !isHidden && setHidden(true);
            if (Math.abs(posDifference) > navHeight)
                setPrevPos(curPos);
        };
        window && window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, [isHidden, navHeight, setHidden, setPrevPos, shouldScroll, prevPos]);
    return isHidden;
};
var useNoScroll = function (shouldScroll) {
    return React.useEffect(function () {
        if (shouldScroll)
            document.documentElement.style.overflow = 'hidden';
        else
            document.documentElement.style.overflow = 'auto';
    }, [shouldScroll]);
};
var getNumber = function (str) {
    var number = '';
    Array.from(str).forEach(function (char) {
        if (Number.isInteger(+char))
            number += char;
    });
    return +number;
};
//# sourceMappingURL=utils.js.map

___$insertStyle(".nav-links {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 1fr;\n  width: 100%;\n}\n.nav-links__group {\n  display: flex;\n  margin: 0;\n  padding: 0.5rem;\n  width: 100%;\n}\n.nav-links__group a {\n  text-decoration: none;\n  color: var(--link-color);\n  margin: 0 0.5em;\n  transition: opacity 100ms ease-in;\n}\n.nav-links__group a:hover {\n  opacity: 0.6;\n}\n.nav-links__group.left {\n  max-width: 600px;\n}\n.nav-links__group.right {\n  max-width: 400px;\n  justify-content: flex-end;\n}\n\n@media (max-width: 943px) {\n  .nav-links--show, .nav-links.animate.show, .nav-links {\n    width: var(--slider-width, 100%);\n    height: calc(100vh - var(--height));\n  }\n\n  .nav-links {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: var(--height);\n    right: 0;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    padding: 0 2em;\n    background-color: var(--menu-bg-color);\n    overflow: hidden;\n  }\n  .nav-links.animate {\n    transition: height 200ms ease-in, width 200ms ease-in, border-radius ease-in 200ms;\n    border-bottom-left-radius: 150%;\n  }\n  .nav-links.animate.show {\n    border-bottom-left-radius: 0;\n    transition: height 300ms ease-out, width 300ms ease-out, border-radius ease-out 300ms;\n  }\n  .nav-links__group {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n  .nav-links__group a {\n    font-size: 1.1em;\n    margin: 0.5em 0;\n  }\n  .nav-links__group.left, .nav-links__group.right {\n    max-width: unset;\n  }\n}");

var NavLinks = function (_a) {
    var customClassName = _a.customClassName, isOpen = _a.isOpen, shouldAnimate = _a.shouldAnimate, leftLinks = _a.leftLinks, rightLinks = _a.rightLinks;
    var otherClassNames = [];
    if (shouldAnimate) {
        !!isOpen
            ? otherClassNames.push('animate show')
            : otherClassNames.push('animate');
    }
    else {
        !!isOpen && otherClassNames.push('nav-links--show');
    }
    useNoScroll(isOpen);
    return (React.createElement("div", { className: ("nav-links " + otherClassNames + " " + customClassName).trim() },
        React.createElement("span", { className: "nav-links__group left" }, leftLinks),
        React.createElement("span", { className: "nav-links__group right" }, rightLinks)));
};
//# sourceMappingURL=index.js.map

var themeMapping = {
    mainColor: '--main-color',
    backgroundColor: '--background-color',
    menuBgColor: '--menu-bg-color',
    height: '--height',
    sliderWidth: '--slider-width'
};
var defaultTheme = {
    mainColor: '#333333',
    backgroundColor: '#ffffff',
    menuBgColor: '#f2f2f2',
    height: '55px',
    sliderWidth: '100%'
};
var useTheme = function (navRef, theme) {
    return React.useEffect(function () {
        var nav = navRef.current;
        if (nav) {
            Object.keys(theme).forEach(function (prop) {
                nav.style.setProperty(themeMapping[prop], theme[prop]);
            });
        }
    }, [navRef, theme]);
};
//# sourceMappingURL=theme.js.map

___$insertStyle(".nav {\n  --main-color: #333333;\n  --background-color: #ffffff;\n  --menu-bg-color: #f9f9f9;\n  --height: 55px;\n  --slider-width: 100%;\n  display: grid;\n  grid-template-columns: minmax(min-content, max-content) auto;\n  align-items: center;\n  background-color: var(--background-color);\n  font-family: inherit;\n  height: var(--height);\n  padding: 0 2em;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);\n  box-sizing: border-box;\n  z-index: 9999;\n}\n.nav * {\n  outline-width: 1px;\n  outline-color: var(--main-color);\n}\n.nav > a:first-child {\n  text-decoration: none;\n  font-size: 1.5em;\n  color: var(--main-color);\n  margin-right: 1em;\n}\n.nav--hidden, .nav--animate--hidden {\n  top: calc(var(--height) * -1);\n}\n.nav--animate {\n  transition: top 200ms ease-in;\n}\n.nav--animate--hidden {\n  transition: top 300ms ease-out;\n}\n\n@media (max-width: 943px) {\n  .nav,\n.nav--animate {\n    justify-content: space-between;\n  }\n  .nav > a:first-child,\n.nav--animate > a:first-child {\n    margin-right: 0;\n  }\n}");

var useState = React.useState, useRef = React.useRef;
var Navbar = function (_a) {
    var brand = _a.brand, leftLinks = _a.leftLinks, rightLinks = _a.rightLinks, _b = _a.theme, theme = _b === void 0 ? defaultTheme : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.menuClassName, menuClassName = _d === void 0 ? '' : _d, _e = _a.shouldHideOnScroll, shouldHideOnScroll = _e === void 0 ? true : _e, _f = _a.shouldAnimate, shouldAnimate = _f === void 0 ? true : _f;
    var _g = useState(false), isToggled = _g[0], toggle = _g[1];
    var isHidden = useScrollSlide(theme.height, shouldHideOnScroll);
    var navRef = useRef(null);
    useTheme(navRef, theme);
    var otherClassnames = [];
    if (shouldAnimate) {
        !!isHidden
            ? otherClassnames.push('nav--animate--hidden')
            : otherClassnames.push('nav--animate');
    }
    else {
        !!isHidden && otherClassnames.push('nav--hidden');
    }
    var shouldShowHamburger = leftLinks || rightLinks;
    var onHamburgerClick = function () { return toggle(!isToggled); };
    return (React.createElement("nav", { className: ("nav " + otherClassnames + " " + className).trim(), ref: navRef, role: "navigation" },
        brand,
        shouldShowHamburger && (React.createElement(Hamburger, { isToggled: isToggled, shouldAnimate: shouldAnimate, onToggle: onHamburgerClick })),
        React.createElement(NavLinks, { customClassName: menuClassName, isOpen: isToggled, shouldAnimate: shouldAnimate, leftLinks: leftLinks, rightLinks: rightLinks })));
};
//# sourceMappingURL=index.js.map

exports.default = Navbar;
//# sourceMappingURL=index.js.map
