class Rand {
    uniform(min: number, max: number) {
        const vol = max - min;
        const val = Math.floor((Math.random() * vol) + 0.5);
        const res = min + val

        if (res < min) {
            return min;
        } 
        else if(res > max)
        {
            return max;
        }

        return res;
    }
}

export {
    Rand
}