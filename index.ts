{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red202\green202\blue202;}
{\*\expandedcolortbl;;\cssrgb\c0\c1\c1;\cssrgb\c83229\c83229\c83125;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec3 \
import React from 'react';\
import ReactDOM from 'react-dom/client';\
import App from './App';\
\
const rootElement = document.getElementById('root');\
if (!rootElement) \{\
  throw new Error("Could not find root element to mount to");\
\}\
\
const root = ReactDOM.createRoot(rootElement);\
root.render(\
  <React.StrictMode>\
    <App />\
  </React.StrictMode>\
);\
}