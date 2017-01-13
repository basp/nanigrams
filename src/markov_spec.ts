import { Markov } from './markov';

describe('bigram parser', () => {
    let sut: Markov;

    beforeEach(() => {
        sut = new Markov();
    });

    it('can handle numbers', () => {
        const inp = [1, 2, 3, 4];
        const res = sut.bigrams(inp);
        expect(res).toEqual([[1, 2], [2, 3], [3, 4]]);
    });

    it('can handle strings', () => {
        const inp = ['a', 'b', 'c'];
        const res = sut.bigrams(inp);
        expect(res).toEqual([['a', 'b'], ['b', 'c']]);
    });

    it('can handle arrays', () => {
        const inp = [[1, 'x'], [2, 'y'], [3, 'z']];
        const res = sut.bigrams(inp);
        const exp = [
            [[1, 'x'], [2, 'y']],
            [[2, 'y'], [3, 'z']],
        ];
        expect(res).toEqual(exp);
    });

    it('can handle anything', () => {
        const inp = [
            { id: 'bar', label: 'zoz' },
            0xDEADBEEF,
            { id: 'quux' },
            { id: 'frotz', label: 'baz' }
        ];
        const res = sut.bigrams(inp);
        const exp = [
            [
                { id: 'bar', label: 'zoz' },
                0xDEADBEEF
            ],
            [
                0xDEADBEEF,
                { id: 'quux' }
            ],
            [
                { id: 'quux' },
                { id: 'frotz', label: 'baz' }
            ],
        ];
        expect(res).toEqual(exp);
    });
});