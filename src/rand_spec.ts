import { Rand } from './rand';

describe('random number generator', () => {
    const NumberOfSamples = 1000;

    let sut: Rand;

    beforeEach(() => {
        sut = new Rand();
    });

    describe('uniform random numbers', () => {
        it('handles the zero case', () => {
            for (let i = 0; i < NumberOfSamples; i++) {
                const res = sut.uniform(0, 0);
                expect(res).toBe(0);
            }
        });

        it('handles the awkward negative case', () => {
            for(let i = 0; i < NumberOfSamples; i++) {
                const res = sut.uniform(-1, -1);
                expect(res).toBe(-1);
            }
        });

        it('handles the unit case', () => {
            for (let i = 0; i < NumberOfSamples; i++) {
                const res = sut.uniform(0, 1);
                expect(res).toBeGreaterThanOrEqual(0);
                expect(res).toBeLessThanOrEqual(1);
            }
        });

        it('handles the negative unit case', () => {
            for (let i = 0; i < NumberOfSamples; i++) {
                const res = sut.uniform(-1, 0);
                expect(res).toBeGreaterThanOrEqual(-1);
                expect(res).toBeLessThanOrEqual(0);
            }
        });

        it('handles negative ranges', () => {
            for (let i = 0; i < NumberOfSamples; i++) {
                const res = sut.uniform(-100, -1);
                expect(res).toBeGreaterThanOrEqual(-100);
                expect(res).toBeLessThanOrEqual(-1);
            }
        });
    });
});