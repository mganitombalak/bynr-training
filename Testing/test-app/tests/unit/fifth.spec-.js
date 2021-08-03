import { mount } from '@vue/test-utils'
import { nextTick, ref, reactive } from '@vue/runtime-core';

const ourTestComponent = {
    setup() {
        const sayi = ref(1);
        const text = ref('Adet');
        const arttir = () => {
            sayi.value += 1;
        }
        return {
            sayi,
            text,
            arttir
        }
    },
    // data() {
    //     return {sayi: 0,text: ''}
    // },
    // methods:{
    //     arttir(){
    //         this.sayi+=1;
    //     }
    // },
    // props: {
    //     sayi: Number,
    //     text: String
    // },
    template: '<button @click="arttir">Ekle</button><div>{{sayi}} {{text}}</div>'
}
// WRAPPER / FACTORY 
function wrapperFactory({ data } = { data: {} }) { // factory functions
    return mount(ourTestComponent, {
        data() {
            return data;
        }
    });
}
describe('Our Test Component', () => {
    it('should be rendered', () => {
        const wrapper = wrapperFactory();
        // console.log(wrapper.html());
        // console.log(wrapper.vm);
        expect(wrapper.html()).toContain('<div>1 Adet</div>')
    });
    it('should show increased number when button is clicked', async () => {
        const wrapper = wrapperFactory();
        await wrapper.find('button').trigger('click'); // like QuerySelector you can write selector.
        // await nextTick();
        // console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>2 Adet</div>')
    });
});