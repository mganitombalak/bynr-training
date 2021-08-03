import { mount } from '@vue/test-utils'
import { nextTick } from '@vue/runtime-core';

const ourTestComponent = {
    data() {
        return {sayi: 0,text: ''}
    },
    methods:{
        arttir(){
            this.sayi+=1;
        }
    },
    // props: {
    //     sayi: Number,
    //     text: String
    // },
    template: '<button @click="arttir">Ekle</button><div>{{sayi}} {{text}}</div>'
}
// WRAPPER / FACTORY 
function wrapperFactory({data}) { // factory functions
    return mount(ourTestComponent, { data });
}
describe('Our Test Component', () => {
    it('should be rendered', () => {
        const wrapper = wrapperFactory({
            data(){
                return {sayi:1,text:'Adet'}
            }
        });
        // console.log(wrapper.html());
        // console.log(wrapper.vm);
        expect(wrapper.html()).toContain('<div>1 Adet</div>')
    });

    it('should be rendered with different props', () => {
        const wrapper = wrapperFactory({
            data(){
                return {sayi:2,text:'Gram'}
            }
        });
        // console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>2 Gram</div>')
    });
    it('should show increased number when button is clicked', async () => {
        const wrapper = wrapperFactory({
            data(){
                return {sayi:1,text:'Adet'}
            }
        });
        await wrapper.find('button').trigger('click'); // like QuerySelector you can write selector.
        // await nextTick();
        // console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>2 Adet</div>')
    });
});