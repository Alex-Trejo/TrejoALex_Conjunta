const percentile = require('../src/utils/percentile');

describe('percentile', () => {
  it('devuelve el mínimo para p=0', () => {
    expect(percentile(0, [1, 2, 3])).toBe(1.00);
  });
  it('devuelve el máximo para p=100', () => {
    expect(percentile(100, [1, 2, 3])).toBe(3.00);
  });
  it('devuelve el percentil 50 (nearest-rank) para lista par', () => {
    expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
  });
  it('devuelve el percentil 50 (nearest-rank) para lista impar', () => {
    expect(percentile(50, [1, 2, 3])).toBe(2.00);
  });
  it('lanza TypeError si values no es arreglo', () => {
    expect(() => percentile(50, null)).toThrow(TypeError);
  });
  it('lanza TypeError si p no es número', () => {
    expect(() => percentile('a', [1, 2, 3])).toThrow(TypeError);
  });
  it('lanza RangeError si p está fuera de rango', () => {
    expect(() => percentile(-1, [1, 2, 3])).toThrow(RangeError);
    expect(() => percentile(101, [1, 2, 3])).toThrow(RangeError);
  });
  it('lanza TypeError si values tiene elementos no numéricos', () => {
    expect(() => percentile(50, [1, 'a', 3])).toThrow(TypeError);
  });
  it('devuelve valores con 2 decimales', () => {
    expect(percentile(50, [1.123, 2.456, 3.789])).toBe(2.46);
  });
});
