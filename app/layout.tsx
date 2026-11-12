import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Mezcla Fácil | Calculadora de materiales',description:'Calcula materiales, agua y costo de tus mezclas.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
