// 1. Sepette Urun Varsa Urunlerin Listelenmesi
// 2. Sepette urun yoksa Sepetiniz henuz urun yok metni goruntulenmeli her zaman ilk gorunmeli
// 3. Sepette Urun yoksa Sepetiniz Bos metni altinda Alisverise devam etmek icin tiklayin! metni olmali
//    Link arada her ne olursa olsun Hep en altta gorunmeli
// 4. Herhangi bir sebeple API den sonuc alinamadigi zaman "Sorun sizde degil bizde ozur dileriz :(" 
// metni goruntulenmeli hemen altinda "Bu problemden artik haberimiz var. Lutfen sepetinizi 
// daha sonra tekrar kontrol edin"
import fp from 'flush-promises';
import { mount } from '@vue/test-utils';
import Basket from '../../src/components/Basket';
let mockedPostFunction = jest.fn();
jest.mock('axios', () => ({ post: () => mockedPostFunction() }))
function wrapperFactory() {
    return mount(Basket,{
        globa:{
            stub:['router-link']
        }
    });
}
const localStorageMocketGet = jest.fn();
window.localStorage.__proto__.getItem = localStorageMocketGet;
describe('When basket has items, basket', () => {
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
    it('should list items if there is in api response', async () => {
        const wrapper = wrapperFactory();
        // expect(localStorageMocketGet).toHaveBeenCalledTimes(1);
        // expect(mockedPostFunction).toHaveBeenCalledTimes(1);
        await fp();
        let actualCount = wrapper.findAll('ul>li').length;
        let expectedPromise = await mockedPostFunction.mock.results[0].value;
        expect(actualCount).toBe(expectedPromise.data.items.length)
    });
});

describe('When basket  has no items, basket', () => {
    beforeEach(() => {
        mockedPostFunction = jest.fn(() => Promise.resolve({
            data: {
                items: []
            }
        }));
    });
    it('should show \'Basket is Empty\' message', () => {
        const wrapper = wrapperFactory();
        const firstElement= wrapper.find('div > span:first-of-type')
        expect(firstElement.html()).toBe('<span>Sepetinizde henuz urun yok</span>');
    });

    it('should show \'Continue Shopping\' message under \'Basket is empty\' message', () => {
        const wrapper = wrapperFactory();
        const lastElement = wrapper.find('div > a:last-of-type');
        expect(lastElement.html()).toBe('<a href="/shop">Alisverise devam edin!</a>');
    });
});

describe.only('When there is an comm error,basket', () => {
    beforeEach(()=>{
        mockedPostFunction = jest.fn(() => Promise.reject({status:500,message:'Comm Err'}));
    });
    it.only('should show \'Sorry\' message if there is an error in API Communication', async () => {
        const wrapper = wrapperFactory();
        await fp();
        const commErrNotificationContainer= wrapper.find('div#commError');
        expect(commErrNotificationContainer.html()).toContain('<div id=\"commError\">It is not you. It is Us! Sorry :(</div>');
     });
});