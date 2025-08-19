// calcWeightedGrade(items)
// Calcula una nota final ponderada a partir de componentes con peso.

// items: arreglo de objetos {score: número 0–100, weight: número 0–1}.
// Suma de weight = 1 con tolerancia ±0.001; si no, RangeError.
// Devuelve nota 0–100 con 2 decimales.
// Validar tipos/rangos; lanzar TypeError/RangeError según corresponda.
// percentile(p, values) — método nearest-rank
// Devuelve el percentil p de una lista de números usando el método de rango más cercano (sin interpolación).

// p en [0,100]; values: arreglo de números, longitud ≥ 1.
// Ordena ascendentemente; rank = ceil(p/100 × N) con indexación 1..N.
// Regla explícita para bordes: si p = 0 → devuelve mínimo; si p = 100 → máximo.
// Resultado con 2 decimales; validar tipos/rangos; lanzar errores apropiados.
function calcWeightedGrade(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError('items debe ser un arreglo no vacío');
  }
    let totalWeight = 0;
    let weightedScore = 0;
    for (const item of items) {
        if (typeof item.score !== 'number' || typeof item.weight !== 'number') {
            throw new TypeError('Cada item debe tener score y weight como números');
        }
        if (item.score < 0 || item.score > 100) {
            throw new RangeError('score debe estar entre 0 y 100');
        }
        if (item.weight < 0 || item.weight > 1) {
            throw new RangeError('weight debe estar entre 0 y 1');
        }
        if (isNaN(item.score) || isNaN(item.weight)) {
            throw new TypeError('score y weight no pueden ser NaN');
        }
        totalWeight += item.weight;
        weightedScore += item.score * item.weight;
    }
    if (Math.abs(totalWeight - 1) > 0.001) {
        throw new RangeError('La suma de los weights debe ser 1 con tolerancia ±0.001');
    }
    return parseFloat(weightedScore.toFixed(2));
}


module.exports = { calcWeightedGrade};

