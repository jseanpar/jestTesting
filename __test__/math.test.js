import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1, 1)).toBe(2);
    });

    test('Prueba de restas', () => {
        expect(restar(2, 1)).toBe(1);
    });

    test('Prueba de multiplicar', () => {
        expect(multiplicar(2, 1)).toBe(2);
    });

    test('Prueba de dividir', () => {
        expect(dividir(4, 2)).toBe(2);
    });
});