# 🧪 Test Plan - QA DevOps AI Challenge

## 🎯 Objetivo

Definir los criterios mínimos de calidad (**Quality Gates**) para aprobar un Pull Request en el proyecto **QA DevOps AI Challenge**.

---

# 🚦 Quality Gates Definidos

## ✅ 1. Pruebas Automatizadas

- Todas las pruebas deben ejecutarse correctamente.
- El resultado mínimo debe ser: **100% Tests Passed**.

---

## ⚡ 2. Performance Testing

- El porcentaje de errores debe ser menor al **1%**.
- No se permiten fallos críticos en pruebas de carga.
- El tiempo de respuesta promedio debe ser menor a **2 segundos**.

---

## 🔒 3. Seguridad (DevSecOps)

- No deben existir secretos expuestos (tokens, passwords, API keys).
- Validación de código antes del merge.
- Revisión de vulnerabilidades básicas en dependencias.

---

## 📊 4. Evidencias

El Pull Request debe generar:

- 📄 Reporte HTML de pruebas
- 📝 Logs de ejecución
- 📦 Artefactos en GitHub Actions

---

## 💻 5. Calidad del Código

- Seguir buenas prácticas de naming.
- Mantener código legible y documentado.
- Los tests deben estar organizados en la carpeta `tests/`.

---

# 🎯 Quality Gates Aplicados

Un Pull Request será aprobado **SOLO** si:

✔️ Todas las pruebas pasan

✔️ No existen errores críticos

✔️ Se generan evidencias (Reports, Logs y Artifacts)

✔️ No existen secretos expuestos en el repositorio

✔️ El pipeline CI/CD ejecuta correctamente en GitHub Actions

---

# 📋 Criterios de Aprobación

| Validación | Estado Requerido |
|------------|------------------|
| Tests Automatizados | ✅ Pass |
| Performance | ✅ Error Rate < 1% |
| Seguridad | ✅ Sin secretos expuestos |
| Evidencias | ✅ Generadas |
| GitHub Actions | ✅ Exitoso |

---

# 🏁 Conclusión

Estos **Quality Gates** garantizan que el software sea:

- 🔒 Seguro
- ⚡ Estable
- 📈 Confiable
- 🚀 Listo para producción

antes de integrarse a la rama principal del repositorio.