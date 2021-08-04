import { mount } from '@vue/test-utils'
import {ref, reactive } from 'vue' // REF PRIMITIVE DATATYPES REACTIVE  COMPOSITE DATA TYPE
import myComponent from '../../src/components/MyComponent';
// import { createStore } from 'vuex';

// const suiteStore = createStore({
//     state() {
//         return { sayi: 0, text: 'Adet' }
//     },
//     mutations: {
//         arttir(state) {
//             state.sayi += 1;
//         }
//     }
// });
function wrapperFactory() {
    // let invidualStore = createStore({
    //     state() {
    //         return { sayi: 0, text: 'Adet' }
    //     },
    //     mutations: {
    //         arttir(state) {
    //             state.sayi += 1;
    //         }
    //     }
    // });
    const fakeState = reactive({ sayi: 0, text: 'Adet' });
    return mount(myComponent, {
        global: {
            provide: { // plugins:[]
                'hipoStore': {
                    state: fakeState,//{ sayi: 0, text: 'Adet' }
                    commit: () => {
                        fakeState.sayi += 1
                    }
                }
            }
        }
    });
}
describe('Store Test My Component', () => {
    it('should be with initial values', async () => {
        const wrapper = wrapperFactory();
        // await wrapper.find('#btnInc').trigger('click'); // like QuerySelector you can write selector.
        // await nextTick();
        // console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>0 Adet</div>')
    });
    it('should be increased by clicking button', async () => {
        const wrapper = wrapperFactory();
        await wrapper.find('#btnInc').trigger('click'); // like QuerySelector you can write selector.
        // await nextTick();
        // console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>1 Adet</div>')
    });
    it('should be increased by clicking button again', async () => {
        const wrapper = wrapperFactory();
        await wrapper.find('#btnInc').trigger('click'); // like QuerySelector you can write selector.
        // await nextTick();
        // console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>1 Adet</div>')
    });
});