import { handleSubmit } from './formHandler';


describe('testing if function is valid',()=>{
    test("should return function to be TRUE ", () => {
        expect(typeof handleSubmit).toBe("function");
    });
})
