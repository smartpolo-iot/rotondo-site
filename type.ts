{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
export type Language = 'en' | 'es';\
\
export interface MenuItem \{\
  id: string;\
  grupo: string;\
  category: string;\
  name: string;\
  ingredients?: string;\
  comment?: string;\
  unit: string;\
  price: string;\
  available: boolean;\
  imageUrl?: string;\
  isSpecial?: boolean;\
  isPromo?: boolean;\
  label?: string;\
  veggie: boolean;\
  vegan: boolean;\
  rating?: number;\
  reviewsCount?: number;\
\}\
\
export interface CartItem extends MenuItem \{\
  quantity: number;\
\}\
\
export interface Review \{\
  id: string;\
  author: string;\
  rating: number;\
  comment: string;\
  date: string;\
  itemName?: string;\
  isVerified?: boolean;\
  isLocationVerified?: boolean;\
\}\
\
export interface TranslationStrings \{\
  // Navigation & General\
  landingTitle: string;\
  selectLanguage: string;\
  categories: string;\
  backToMenu: string;\
  backToHome: string;\
  reviews: string;\
  currency: string;\
  available: string;\
  unavailable: string;\
  \
  // Navigation Labels\
  navHome: string;\
  navAbout: string;\
  navBranches: string;\
  navMenu: string;\
  navContact: string;\
\
  // Website Sections\
  heroTitle: string;\
  heroSubtitle: string;\
  seeMenu: string;\
  \
  aboutTitle: string;\
  aboutText: string;\
  \
  branchesTitle: string;\
  branchPalermo: string;\
  branchPalermoAddress: string;\
  branchRecoleta: string;\
  branchRecoletaAddress: string;\
  hoursTitle: string;\
  hoursValue: string;\
  \
  contactTitle: string;\
  contactText: string;\
  followUs: string;\
\
  // Menu Specifics (legacy support)\
  ingredients: string;\
  sides: string;\
  specials: string;\
  orderSummary: string;\
  emptyCart: string;\
  total: string;\
  checkout: string;\
  continueOrdering: string;\
\}\
}