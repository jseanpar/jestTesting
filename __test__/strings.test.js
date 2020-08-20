describe('Comprobar cadenas de texto', () => {

    const text = 'un bonito texto';

    test('debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    })

    test('no contiene gato', () => {
        expect(text).not.toMatch(/gato/);
    })

    test('comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(15);
    })
})