import { Tokenizer } from './tokenizer';

describe('tokenizer', () => {
    let sut: Tokenizer; 
    
    beforeEach(() => {
        sut = new Tokenizer();
    });

    it('tokenizes on whitespace', () => {
        const inp = 'foo bar\tquux\nfrotz\rbaz';
        const exp = ['foo', 'bar', 'quux', 'frotz', 'baz'];
        const act = sut.tokenize(inp);
        expect(act).toEqual(exp);
    });

    it('trims duplicate whitespace', () => {
        // It would be nice if we could create some 
        // random whitespaced garbage instead.
        const inp = '\r\n\t        ' 
            + '\r\n \tfoo  \r\tbar \tquux ' 
            + '\n\tfrotz \r \n \tbaz\r\r\n\t   \r\t';
        const exp = ['foo', 'bar', 'quux', 'frotz', 'baz'];
        const act = sut.tokenize(inp);
        expect(act).toEqual(exp);
    });
});

function randomWhitespacedString(tokens: Array<any>) {
    var variations = ['\n', '\r', '\t', ' '];
    var index = uniform(0, variations.length - 1);
}

function uniform(min: number, max: number) {
    const vol = max - min;
    const val = Math.floor((Math.random() * vol) + 0.5) - 1;
    return min + val;
}