const { functionCheck } = require('./functionCheck.js')



describe('copyAndPush', () => {
    it('should take in a string and return weither linting is true or false', () => {

        const func = '{hello}}'


        const res = functionCheck(func)

        expect(res)
            .toEqual(false)


    });
});
