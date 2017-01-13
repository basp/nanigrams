class Tokenizer {
    tokenize(src: string) {
        const pat = /[\s]/;
        return src.split(pat).filter(x => x.trim() !== '');
    }
}

export {
    Tokenizer
}