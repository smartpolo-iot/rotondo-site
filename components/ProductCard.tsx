{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
import React from 'react';\
import \{ MenuItem, Language \} from '../types';\
import \{ TRANSLATIONS \} from '../constants';\
import \{ CategoryIcon \} from './Icons';\
\
interface Props \{\
  item: MenuItem;\
  lang: Language;\
  onViewReviews?: (item: MenuItem) => void;\
\}\
\
export const VeggieIcon = (\{ className \}: \{ className?: string \}) => (\
  <div className=\{`flex items-center gap-1.5 $\{className\}`\}>\
    <span className="text-[9px] font-bold tracking-widest font-category">VEGGIE</span>\
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">\
      <circle cx="12" cy="12" r="9" />\
    </svg>\
  </div>\
);\
\
export const VeganIcon = (\{ className \}: \{ className?: string \}) => (\
  <div className=\{`flex items-center gap-1.5 $\{className\}`\}>\
    <span className="text-[9px] font-bold tracking-widest font-category">VEGAN</span>\
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">\
      <circle cx="12" cy="12" r="10" />\
    </svg>\
  </div>\
);\
\
const renderFormattedText = (text: string) => \{\
  if (!text) return null;\
  const parts = text.split(/(\\*\\*.*?\\*\\*)/g);\
  return parts.map((part, i) => \{\
    if (part.startsWith('**') && part.endsWith('**')) \{\
      return <strong key=\{i\} className="font-bold text-black">\{part.slice(2, -2)\}</strong>;\
    \}\
    return part;\
  \});\
\};\
\
const ProductCard: React.FC<Props> = (\{ item, lang, onViewReviews \}) => \{\
  const t = TRANSLATIONS[lang];\
\
  return (\
    <div className=\{`relative p-8 flex flex-col border-b border-gray-100 bg-white transition-all hover:bg-gray-50/50 $\{!item.available ? 'opacity-30' : ''\}`\}>\
      \
      \{item.label && (\
        <div className="mb-4">\
          <span className="bg-black text-white text-[8px] font-bold px-3 py-1 uppercase tracking-[0.2em] font-category">\
            \{item.label\}\
          </span>\
        </div>\
      )\}\
\
      <div className="flex justify-between items-start gap-6 mb-4">\
        <div className="flex-grow">\
          <div>\
            <h3 className="text-3xl font-product font-bold text-black leading-tight mb-2">\
              \{item.name\}\
              \{!item.available && (\
                <span className="block text-[9px] font-bold text-red-600 tracking-[0.1em] mt-1 uppercase">\
                  \{t.unavailable\}\
                </span>\
              )\}\
            </h3>\
            \
            <div className="flex items-center gap-4">\
              <div className="flex gap-4 opacity-40">\
                \{item.veggie && <VeggieIcon />\}\
                \{item.vegan && <VeganIcon />\}\
              </div>\
\
              \{(item.veggie || item.vegan) && <div className="h-3 w-[1px] bg-black/10"></div>\}\
              \
              <button \
                onClick=\{() => onViewReviews?.(item)\}\
                className="flex items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"\
              >\
                <div className="flex text-black text-[10px]">\
                  \{[...Array(5)].map((_, i) => (\
                    <span key=\{i\} className=\{i < Math.round(item.rating || 0) ? 'opacity-100' : 'opacity-10'\}>\uc0\u9733 </span>\
                  ))\}\
                </div>\
                \{item.reviewsCount && (\
                  <span className="text-[9px] font-bold opacity-30 group-hover:opacity-100 uppercase tracking-widest font-category border-b border-transparent group-hover:border-black/30">\
                    (\{item.reviewsCount\})\
                  </span>\
                )\}\
              </button>\
            </div>\
          </div>\
        </div>\
\
        <div className="flex flex-col items-end">\
          <span className="text-2xl font-header font-bold whitespace-nowrap text-black">\
            \{/^[0-9., ]+$/.test(item.price) ? `$\{t.currency\}$\{item.price\}` : item.price\}\
          </span>\
          \{item.unit && item.unit !== 'Unidad' && (\
            <span className="text-[8px] font-category font-bold opacity-30 uppercase tracking-[0.1em] mt-1">\
              \{item.unit\}\
            </span>\
          )\}\
        </div>\
      </div>\
\
      <div className="space-y-3 max-w-2xl">\
        \{item.ingredients && (\
          <p className="text-[17px] text-black/70 leading-relaxed font-description whitespace-pre-wrap">\
            \{renderFormattedText(item.ingredients)\}\
          </p>\
        )\}\
        \
        \{item.comment && (\
          <p className="text-[15px] text-black/30 italic font-description leading-snug whitespace-pre-wrap">\
            \{renderFormattedText(item.comment)\}\
          </p>\
        )\}\
      </div>\
    </div>\
  );\
\};\
\
export default ProductCard;\
}