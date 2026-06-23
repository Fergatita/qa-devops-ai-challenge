# Test Plan - QA Store

## Objetivo
Definir los criterios mínimos de calidad (Quality Gates) para aprobar un Pull Request en el proyecto QA DevOps AI Challenge.

---

# Quality Gates definidos

## 1. Pruebas automatizadas
- Todas las pruebas deben ejecutarse correctamente.
- El resultado mínimo debe ser: **100% tests passed**.

---

## 2. Performance Testing
- El porcentaje de errores debe ser menor al 1%.
- No se permiten fallos críticos en pruebas de carga.
- El tiempo de respuesta promedio debe ser menor a 2 segundos.

---

## 3. Seguridad (DevSecOps)
- No deben existir secretos expuestos (tokens, passwords, keys).
- Validación de código antes de merge.

---

## 4. Evidencias
- El Pull Request debe generar:
  - Reporte HTML de pruebas
  - Logs de ejecución
  - Artefactos en GitHub Actions

---

## 5. Calidad del código
- El código debe seguir buenas prácticas de naming.
- Tests deben estar organizados en carpeta `tests/`.

---

# Quality Gates aplicados

Un Pull Request será aprobado SOLO si:

✔ Todas las pruebas pasan  
✔ No hay errores críticos  
✔ Se generan evidencias (reports/logs/artifacts)  
✔ No hay secretos en el repositorio  
✔ El pipeline CI/CD ejecuta correctamente en GitHub Actions  

---

# Conclusión

Estos Quality Gates garantizan que el software sea seguro, estable y listo para producción antes de integrarse a la rama principal.