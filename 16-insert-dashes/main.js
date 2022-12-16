function insertDashes(arr) {
    // write code here
    function insertDashesWord(str){
        return str.split('').join('-');
    }
    
    const modified = arr.split(' ').map((word) => insertDashesWord(word));
    
    return modified.join(' ');
}

/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});