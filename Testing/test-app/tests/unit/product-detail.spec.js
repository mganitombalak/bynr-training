import { nextTick } from "@vue/runtime-dom";
import { mount } from "@vue/test-utils";
import ProductDetail from '../../src/components/ProductDetail';
const mockedGetFunction = jest.fn(() => Promise.resolve({ data: { productName: 'Trousers' } }));
jest.mock('axios', () => ({ get: () => mockedGetFunction() }));
function wrapperFactory() {
    return mount(ProductDetail, {
        global: {
            mocks: {
                $route: {
                    params: {
                        productName: 'T-Shirt',
                        productId: 1
                    }
                }
            }
        }
    });
}
describe('Product Detail', () => {
    it('should contain given product name', async () => {
        const wrapper = wrapperFactory();
        expect(mockedGetFunction).toHaveBeenCalledTimes(1)
        await nextTick();
        await nextTick();
        console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>Trousers</div>')
    });
});