# qa-devops-ai-challenge
QA Store – Proyecto QA DevOps & Automatización
📌 Descripción del proyecto

QA Store es una aplicación web de tienda en línea que permite a los usuarios:

Consultar productos
Iniciar sesión
Simular una compra

Este proyecto tiene como objetivo implementar un flujo completo de aseguramiento de calidad (QA) mediante automatización de pruebas, integración continua (CI/CD), control de versiones y análisis asistido con inteligencia artificial.

🎯 Objetivo del proyecto

Construir un pipeline de calidad profesional que garantice que cada cambio en el código cumpla con estándares mínimos antes de ser integrado a la rama principal (main).

Incluye:

Automatización de pruebas funcionales
Quality Gates en CI/CD
Evidencias automáticas de ejecución
Pruebas de performance
Pruebas de accesibilidad
Análisis de resultados con IA
Documentación técnica tipo portafolio QA

🧱 Estructura del repositorio
qa-store/
│
├── app/                     # Código de la aplicación web o API
├── tests/
│   ├── functional/          # Pruebas funcionales (UI / API)
│   ├── performance/         # Pruebas de carga (JMeter / k6)
│   ├── accessibility/       # Auditorías con Lighthouse / Axe
│
├── reports/                 # Evidencias generadas automáticamente
│   ├── functional/
│   ├── performance/
│   ├── accessibility/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml       # Pipeline CI/CD
│
├── docs/
│   ├── test-plan.md
│   ├── quality-gates.md
│   ├── results-analysis.md
│
├── requirements.txt / package.json
└── README.md