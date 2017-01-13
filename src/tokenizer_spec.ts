import { Tokenizer } from './tokenizer';

describe('tokenizer', () => {
   it('tokenizes on whitespace', () => {
       const inp = 'foo bar\tquux\nfrotz\rbaz';
       const exp = ['foo', 'bar', 'quux', 'frotz', 'baz'];
       const sut = new Tokenizer();
       const act = sut.tokenize(inp);
       expect(act).toEqual(exp);
   });

   it('removes duplicate whitespace', () => {
       const inp = 'foo  bar \tquux \n\tfrotz \r \n \tbaz';
       const exp = ['foo', 'bar', 'quux', 'frotz', 'baz'];
       const sut = new Tokenizer();
       const act = sut.tokenize(inp);
       expect(act).toEqual(exp);
   });
});