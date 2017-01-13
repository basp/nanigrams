class Markov {
    bigrams(tokens: Array<any>) {
        const res = [];
        for (let i = 0; i < tokens.length - 1; i++) {
            const ngram = [tokens[i], tokens[i + 1]];
            res.push(ngram);
        }
        return res;
    }
}

export {
    Markov
}