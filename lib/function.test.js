const { functionCheck } = require('./functionCheck.js')



describe('copyAndPush', () => {
    it('should copy inputted array and return a new array with all the original ites and a new item pushed to the end', () => {

        const func = '{hello}}'


        const res = functionCheck(func)

        expect(res)
            .toEqual(false)


    });
