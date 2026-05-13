# SANT ERP — Valkyron Group
### Military-Grade Paint Operations Command Center

Dashboard ERP de grado militar para Pinturas Sant, desarrollado bajo los estándares **Valkyron Group**. Liquid Glass Morph UI, telemetría en vivo, mapa geoespacial de Venezuela y gestión táctica de pedidos.

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Verificación de tipos
npm run typecheck
```

---

## 📁 Estructura del Proyecto

```
sant-erp/
├── src/
│   ├── types.ts              # Interfaces TypeScript (Order, Telemetry, KPI…)
│   ├── data.ts               # Datos mock, constantes, generadores
│   ├── styles.ts             # Estilos globales (CSS variables, animaciones)
│   ├── SantERPDashboard.tsx  # Componente raíz del dashboard
│   ├── index.ts              # Re-exports para uso como librería
│   └── components/
│       ├── Header.tsx        # Zona 01 — Cabecera de telemetría global
│       ├── KPIGrid.tsx       # Zona 02 — 4 tarjetas KPI de alta luminosidad
│       ├── OrderForm.tsx     # Zona 03a — Formulario táctico de pedidos
│       ├── VenezuelaMap.tsx  # Zona 03b — Mapa de calor geoespacial
│       ├── LogisticsTable.tsx# Zona 04 — Monitor de logística
│       └── SectionHeader.tsx # Componente divisor de secciones
├── main.tsx                  # Entry point de la app
├── index.html                # HTML host
├── vite.config.ts            # Config Vite (app + lib mode)
├── tsconfig.json             # TypeScript config
└── package.json
```

---

## 🧩 Uso como Librería (import en otro proyecto)

```tsx
// Importar el dashboard completo
import SantERPDashboard from 'sant-erp';

// O componentes individuales
import { Header, KPIGrid, OrderForm, VenezuelaMap, LogisticsTable } from 'sant-erp';

// Tipos disponibles
import type { Order, KPIData, TelemetryFeedItem, OrderFormData } from 'sant-erp';
```

---

## 🎨 ADN Visual

| Token | Valor | Uso |
|---|---|---|
| `--obsidian` | `#050505` | Fondo base |
| `--naval` | `#000080` | Elementos estructurales |
| `--orange` | `#FF8C00` | CTAs, alertas, telemetría activa |
| `--glass-border` | `rgba(255,255,255,0.09)` | Bordes de vidrio líquido |
| `--mono` | `JetBrains Mono` | Datos, IDs, métricas |
| `--sans` | `Space Grotesk` | UI general |

---

## ⚡ Características

- **Zona 01** — Cabecera sticky con reloj UTC en tiempo real, pulso MIA respiratorio y señal Starlink
- **Zona 02** — 4 KPI cards con contadores en vivo (pedidos y galones se actualizan automáticamente)
- **Zona 03a** — Formulario táctico completo: cliente, zona, categoría SANT, volumen con slider de física fluida, prioridad; feed de telemetría en tiempo real cada 4s
- **Zona 03b** — Mapa SVG de Venezuela con hotspots pulsantes, tooltips interactivos y gradientes de calor por intensidad de demanda
- **Zona 04** — Tabla de logística con filtros por estado (PENDIENTE / EN MEZCLA / DESPLEGADO), badges de color semántico

---

## 🛠 Stack Técnico

- **React 18** + **TypeScript 5** (strict mode)
- **Vite 5** (dev server + lib build)
- Sin dependencias UI externas — 100% CSS-in-JS con variables nativas
- Fuentes: `Space Grotesk` + `JetBrains Mono` vía Google Fonts

---

*Desarrollado por Valkyron Group para Pinturas Sant — Confidencial*
