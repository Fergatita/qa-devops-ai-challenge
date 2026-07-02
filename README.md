# 🚀 QA DevOps AI Challenge

Proyecto desarrollado como parte del **QA DevOps AI Challenge**, aplicando buenas prácticas de aseguramiento de calidad, integración continua (CI/CD), pruebas de rendimiento y documentación técnica.

---

# 🎯 Objetivo del Proyecto

Construir un flujo completo de calidad para una aplicación web utilizando herramientas de automatización, integración continua y pruebas de rendimiento.

El proyecto incluye:

- ✅ Pruebas automatizadas con Pytest.
- ✅ Pipeline de Integración Continua mediante GitHub Actions.
- ✅ Pruebas de rendimiento con K6.
- ✅ Pruebas de carga con JMeter.
- ✅ Generación de reportes y evidencias.
- ✅ Definición de Quality Gates.
- ✅ Documentación técnica y análisis asistido con IA.

---

# 🛠️ Herramientas Utilizadas

| Herramienta | Propósito |
|-------------|-----------|
| Python | Lenguaje de programación |
| Pytest | Automatización de pruebas |
| Git | Control de versiones |
| GitHub | Repositorio del proyecto |
| GitHub Actions | Integración Continua (CI/CD) |
| K6 | Pruebas de rendimiento |
| Apache JMeter | Pruebas de carga |
| Markdown | Documentación |
| IA Generativa | Apoyo en análisis de pruebas y documentación |

---

# ▶️ Cómo Ejecutar las Pruebas

## 1. Clonar el repositorio

```bash
git clone https://github.com/USUARIO/QA-DEVOPS-AI-CHALLENGE.git
```

---

## 2. Entrar al proyecto

```bash
cd QA-DEVOPS-AI-CHALLENGE
```

---

## 3. Instalar dependencias

```bash
pip install -r requirements.txt
```

---

## 4. Ejecutar las pruebas automatizadas

```bash
pytest
```

Para generar un reporte HTML:

```bash
pytest --html=reports/report.html
```

---

## 5. Ejecutar pruebas con K6

```bash
k6 run performance/k6/load_test.js
```

---

## 6. Ejecutar pruebas con JMeter

Abrir el archivo:

```
performance/jmeter/demoblaze.jmx
```

y ejecutar el escenario desde Apache JMeter.

---

# 📂 Documentación

- 📄 Plan de pruebas: `docs/test-plan.md`
- 📄 Hallazgos: `docs/documentacion.md`
- 📄 Análisis con IA: `docs/ai-analysis.md`

---

# 📊 Evidencias

Las evidencias generadas durante la ejecución se almacenan en:

- `reports/`
- `evidence/`

---

# ⚙️ Integración Continua

El proyecto utiliza **GitHub Actions** para ejecutar automáticamente las pruebas en cada Push y Pull Request.

---

# 👩‍💻 Autora

**Fernanda Escobar**

QA Automation | DevOps | Performance Testing