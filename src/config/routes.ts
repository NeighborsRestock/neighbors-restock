export const APP_ROUTE_KEYS = [ 'LANDING', 'BRANDS', 'CONTACT' ];

export const APP_ROUTES = {
    LANDING: "/",
    BRANDS: "/brands-we-carry",
    CONTACT: "/contact",
    NOT_FOUND: '/404'
} as const;

export const LINKS = [
    [ 'LANDING', 'About Us' ],
    [ 'BRANDS', 'Brands We Carry' ],
    [ 'CONTACT', 'Contact Us' ]
] as const;