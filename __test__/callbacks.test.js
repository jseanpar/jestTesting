import { callback, callbackHell } from '../callbacks';

describe('probando un callback', () => {
    test('Callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola Javascripters')
            done();
        };
        callbackHell(otherCallback);
    })
})