import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
    test('¿tiene una banana', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('no contiene platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });

    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(4)
    })
    test('comprobamos ala existencia de un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});