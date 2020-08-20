import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Siempre fallara la instantanea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
        }
        expect(user).toMatchSnapshot();
    });

    test('tenemos una excepcion dentro del código', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "José Rubilar Contreras"
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number),
        })
    })


});