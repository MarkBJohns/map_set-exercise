describe('hasDuplicates',function(){
    it('should take in an array, return "true" if there are duplicates or "false" if not',function(){
        let testOne=[1,2,2,3,4];
        let testTwo=[1,2,3,4,5];
        expect(hasDuplicates(testOne)).toEqual(true);
        expect(hasDuplicates(testTwo)).toEqual(false);
    })
})

describe('vowelCount',function(){
    it('should take in a string and return a map with a vowel count',function(){
        let testOne='hello world';
        const testOneResult=new Map([['e',1],['o',2]]);
        let testTwo='the quick brown fox jumps over the lazy dog';
        const testTwoResult=new Map([['e',3],['u',2],['i',1],['o',4],['a',1]]);
        expect(vowelCount(testOne)).toEqual(testOneResult);
        expect(vowelCount(testTwo)).toEqual(testTwoResult);
    })
})