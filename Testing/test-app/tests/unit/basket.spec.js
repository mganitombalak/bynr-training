// 1. Sepette Urun Varsa Urunlerin Listelenmesi
// 2. Sepette urun yoksa Sepetiniz Bos metni goruntulenmeli
// 3. Sepette Urun yoksa Sepetiniz Bos metni altinda Alisverise devam etmek icin tiklayin! metni olmali
// 4. Herhangi bir sebeple API den sonuc alinamadigi zaman "Sorun sizde degil bizde ozur dileriz :(" 
// metni goruntulenmeli hemen altinda "Bu problemden artik haberimiz var. Lutfen sepetinizi 
// daha sonra tekrar kontrol edin"
import fp from 'flush-promises';
import { mount } from '@vue/test-utils';
import Basket from '../../src/components/Basket';
let mockedPostFunction = jest.fn();
jest.mock('axios', () => ({ post: () => mockedPostFunction() }))
function wrapperFactory() {
    return mount(Basket);
}
const localStorageMocketGet = jest.fn();
window.localStorage.__proto__.getItem = localStorageMocketGet;
describe.only('When basket has items, basket', () => {
    beforeEach(() => {
        mockedPostFunction = jest.fn(() => Promise.resolve({
            data: {
                items: [
                    {
                        name: 'Corap',
                        qty: 3
                    },
                    {
                        name: 'Ayakkabi',
                        qty: 1
                    }
                ]
            }
        }));
    });
    it('should list items if in api response', async () => {
        const wrapper = wrapperFactory();
        // expect(localStorageMocketGet).toHaveBeenCalledTimes(1);
        // expect(mockedPostFunction).toHaveBeenCalledTimes(1);
        await fp();
        let actualCount=wrapper.findAll('ul>li').length;
        let expectedPromise = await mockedPostFunction.mock.results[0].value;
        expect(actualCount).toBe(expectedPromise.data.items.length)
    });
});

describe('When basket no items, basket', () => {
    it('should show \'Basket is Empty\' message if there is no item in list', () => { });

    it('should show \'Continue Shopping\' message if there is no item in list', () => { });
});

describe('When there is an comm error,basket', () => {
    it('should show \'Sorry\' message if there is an error in API Communication', () => { });
});