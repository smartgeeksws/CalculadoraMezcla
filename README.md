# Mezcla Fácil
Calculadora accesible de mezclas secas y agua basada en Mezclas 2026(1).xlsx. Sin base de datos, cuentas ni almacenamiento local.

## Ejecutar
Requiere Node.js 20.9 o superior. `npm ci`, `npm run dev`. Para producción: `npm run build`. La exportación estática se genera en `out/`.

## Vercel
Importar este directorio como repositorio Git en Vercel, seleccionar Next.js y desplegar. Build: `npm run build`. No requiere variables de entorno ni servicios externos. También se puede ejecutar `npx vercel` desde el directorio del proyecto con una cuenta de Vercel.

## Tecnologías
Next.js App Router, React, TypeScript, Motion (animaciones respetando movimiento reducido), Lucide React y CSS responsive. Sin fuentes externas.

## Cálculos y fuente
Peso solicitado = mezcla seca, el agua se añade aparte. Gramos = kg solicitados × 1000 × porcentaje / 100. Agua en ml = litros por bolsa × 1000 × kg solicitados / 25. Precio = suma de kg de cada material × precio por kg. Moneda asumida: COP por el contexto del archivo y el usuario; verificar con el propietario. Excluye costo de agua (no suministrado), empaque, mano de obra, energía y transporte. Precio de materiales consumidos, no de paquetes completos. Se usan cifras sin redondear para el costo. Pantalla: hasta tres decimales en medidas, peso colombiano entero en costo.

Datos: lib/calculate.ts; no se muestran resistencias. Las columnas E y G tienen el mismo nombre en el Excel: se distinguen como A y B, respectivamente. X se interpreta como componente ausente. C y E y K suman 100 %. G suma 98,06 %, I suma 99,7 %. En I se interpreta O.4% como 0,4 %. En J HPMC numérico 0,4 es ambiguo (la lectura literal de una fracción sería 40 %); se propone provisionalmente 0,4 %, y O.5% como 0,5 %, sumando 100,9 %. Estas tres fórmulas quedan bloqueadas hasta ajustar explícitamente a 100 %: nunca se normalizan automáticamente. Ajustes son solo de sesión; al recargar se pierden. Confirmar los datos con el formulador antes de usarlos.

Agua G: texto original «5.5 -5», mostrado en orden ascendente como 5–5,5 litros. K nombre original «IXTERIOES» interpretado como interior. Materiales y precios por kg: C. Malla 250 $420; C. Malla 325 $400; dolomita $240; cemento blanco $2125; cal $1000; HPMC $21000; VAE $13900.

## Verificación
`npm test` comprueba gramajes y costo de la bolsa de referencia, escalamiento, rango de agua y rechazo de datos inválidos. `npm run build` comprueba TypeScript y genera la versión de producción.
