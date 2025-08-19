const { calcWeightedGrade } = require('../src/utils/calcWeightedGrade');

describe('calcWeightedGrade', () => {
  it('calcula correctamente la nota ponderada', () => {
    const items = [
      { score: 80, weight: 0.4 },
      { score: 90, weight: 0.6 }
    ];
    expect(calcWeightedGrade(items)).toBe(86.00);
  });
  it('lanza RangeError si la suma de pesos no es 1', () => {
    const items = [
      { score: 80, weight: 0.5 },
      { score: 90, weight: 0.6 }
    ];
    expect(() => calcWeightedGrade(items)).toThrow(RangeError);
  });
  it('lanza TypeError si items no es arreglo', () => {
    expect(() => calcWeightedGrade(null)).toThrow(TypeError);
  });
  it('lanza TypeError si score no es número', () => {
    const items = [
      { score: 'a', weight: 0.5 },
      { score: 90, weight: 0.5 }
    ];
    expect(() => calcWeightedGrade(items)).toThrow(TypeError);
  });
  it('lanza RangeError si score está fuera de rango', () => {
    const items = [
      { score: 120, weight: 0.5 },
      { score: 90, weight: 0.5 }
    ];
    expect(() => calcWeightedGrade(items)).toThrow(RangeError);
  });
  it('lanza RangeError si weight está fuera de rango', () => {
    const items = [
      { score: 80, weight: -0.1 },
      { score: 90, weight: 1.1 }
    ];
    expect(() => calcWeightedGrade(items)).toThrow(RangeError);
  });
  it('devuelve resultado con 2 decimales', () => {
    const items = [
      { score: 80.123, weight: 0.5 },
      { score: 90.456, weight: 0.5 }
    ];
    expect(calcWeightedGrade(items)).toBe(85.29);
  });
});
