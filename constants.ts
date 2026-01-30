{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
import \{ TranslationStrings, Review \} from './types';\
\
export const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnuBv3c1pjg9GuxlZ5AfuMQMn1FCnh9z7kiR011KXQtGbR5AzAqwaE5iAAIbHzP3ezSoQYUlks1oiy/pub?gid=0&single=true&output=csv";\
export const REVIEWS_API_URL = ""; \
\
export const THEME = \{\
  primary: "#1a1a1a",\
  accent: "#8b7355",\
  background: "#ffffff",\
  textDark: "#1a1a1a",\
\};\
\
export const MOCK_REVIEWS: Review[] = [\
  \{ id: '1', author: 'Valentina P.', rating: 5, comment: 'El mejor caf\'e9 de Palermo. El ambiente es s\'faper tranquilo y la atenci\'f3n de diez.', date: '2024-03-10', isVerified: true \},\
  \{ id: '2', author: 'Mark S.', rating: 4, comment: 'Excellent family blend. Very authentic and cozy.', date: '2024-03-08', isVerified: true \},\
  \{ id: '3', author: 'Juli\'e1n G.', rating: 5, comment: 'Un cl\'e1sico de Cervi\'f1o. Siempre vuelvo por el avocado toast.', date: '2024-03-05', itemName: 'AVOCADO TOAST', isVerified: true \},\
];\
\
export const TRANSLATIONS: Record<'en' | 'es', TranslationStrings> = \{\
  en: \{\
    landingTitle: "ROTONDO CAF\'c9",\
    selectLanguage: "SELECT LANGUAGE",\
    categories: "OUR MENU",\
    backToMenu: "BACK TO MENU",\
    backToHome: "HOME",\
    reviews: "Reviews",\
    currency: "$",\
    available: "Available",\
    unavailable: "OUT OF STOCK",\
    navHome: "HOME",\
    navAbout: "ABOUT",\
    navBranches: "LOCATION",\
    navMenu: "MENU",\
    navContact: "SOCIAL",\
    heroTitle: "ROTONDO",\
    heroSubtitle: "FAMILY BLEND | EST. PALERMO",\
    seeMenu: "VIEW MENU",\
    aboutTitle: "OUR TRADITION",\
    aboutText: "Rotondo Caf\'e9 is a family heritage project. We focus on the essence of the 'Family Blend', selecting the best coffee beans to create a unique and cozy experience in the heart of Palermo.",\
    branchesTitle: "FIND US",\
    branchPalermo: "CAF\'c9 ROTONDO",\
    branchPalermoAddress: "Boulevard Cervi\'f1o 3907, Palermo.",\
    branchRecoleta: "ROTONDO",\
    branchRecoletaAddress: "Buenos Aires, Argentina",\
    hoursTitle: "OPENING HOURS",\
    hoursValue: "MON to MON 8.00 to 20.00",\
    contactTitle: "FOLLOW OUR STORY",\
    contactText: "Visit us at Palermo or stay connected through our social media for daily updates and specials.",\
    followUs: "FOLLOW US",\
    ingredients: "Ingredients",\
    sides: "With",\
    specials: "SPECIALS",\
    orderSummary: "Order",\
    emptyCart: "Empty",\
    total: "Total",\
    checkout: "Checkout",\
    continueOrdering: "Back",\
  \},\
  es: \{\
    landingTitle: "ROTONDO CAF\'c9",\
    selectLanguage: "SELECCIONAR IDIOMA",\
    categories: "NUESTRO MEN\'da",\
    backToMenu: "VOLVER AL MEN\'da",\
    backToHome: "INICIO",\
    reviews: "Rese\'f1as",\
    currency: "$",\
    available: "Disponible",\
    unavailable: "AGOTADO",\
    navHome: "INICIO",\
    navAbout: "NOSOTROS",\
    navBranches: "UBICACI\'d3N",\
    navMenu: "MEN\'da",\
    navContact: "CONTACTO",\
    heroTitle: "ROTONDO",\
    heroSubtitle: "FAMILY BLEND | PALERMO",\
    seeMenu: "VER MEN\'da",\
    aboutTitle: "NUESTRA TRADICI\'d3N",\
    aboutText: "Rotondo Caf\'e9 es un proyecto de herencia familiar. Nos enfocamos en la esencia del 'Family Blend', seleccionando los mejores granos para crear una experiencia \'fanica y acogedora en el coraz\'f3n de Palermo.",\
    branchesTitle: "DONDE ESTAMOS",\
    branchPalermo: "CAF\'c9 ROTONDO",\
    branchPalermoAddress: "Boulevard Cervi\'f1o 3907, Palermo.",\
    branchRecoleta: "ROTONDO",\
    branchRecoletaAddress: "Buenos Aires, Argentina",\
    hoursTitle: "HORARIOS",\
    hoursValue: "LUN a LUN de 8.00 to 20.00",\
    contactTitle: "SEGU\'cd NUESTRA HISTORIA",\
    contactText: "Ven\'ed a visitarnos a Palermo o mantenete conectado a trav\'e9s de nuestras redes para novedades y especiales del d\'eda.",\
    followUs: "SEGUINOS",\
    ingredients: "Ingredientes",\
    sides: "Con",\
    specials: "ESPECIALES",\
    orderSummary: "Pedido",\
    emptyCart: "Sin items",\
    total: "Total",\
    checkout: "Finalizar",\
    continueOrdering: "Volver",\
  \},\
\};\
}