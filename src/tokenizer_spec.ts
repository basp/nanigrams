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