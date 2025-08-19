/**
 * Calcula el percentil p de una lista de números usando el método nearest-rank.
 * @param {number} p - Percentil (0 a 100).
 * @param {number[]} values - Arreglo de números (longitud >= 1).
 * @returns {number} - Valor del percentil con 2 decimales.
 * @throws {TypeError|RangeError}
 */
function percentile(p, values) {
  if (!Array.isArray(values) || values.length < 1) {
    throw new TypeError('values debe ser un arreglo con al menos un elemento');
  }
  if (typeof p !== 'number' || isNaN(p)) {
    throw new TypeError('p debe ser un número');
  }
  if (p < 0 || p > 100) {
    throw new RangeError('p debe estar en el rango [0, 100]');
  }
  if (!values.every(v => typeof v === 'number' && isFinite(v))) {
    throw new TypeError('Todos los elementos de values deben ser números válidos');
  }
  const sorted = [...values].sort((a, b) => a - b);
  const N = sorted.length;
  if (p === 0) return Number(sorted[0].toFixed(2));
  if (p === 100) return Number(sorted[N - 1].toFixed(2));
  const rank = Math.ceil((p / 100) * N);
  return Number(sorted[rank - 1].toFixed(2));
}

module.exports = percentile;
