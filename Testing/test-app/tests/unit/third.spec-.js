import { mount } from '@vue/test-utils'

const ourTestComponent = {
    data() {
        return {sayi: 0,text: ''}
    },
    // props: {
    //     sayi: Number,
    //     text: String
    // },
    template: '<div>{{sayi}} {{text}}</div>'
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
        expect(wrapper.html()).toBe('<div>1 Adet</div>')
    });

    it('should be rendered with different props', () => {
        const wrapper = wrapperFactory({
            data(){
                return {sayi:2,text:'Gram'}
            }
        });
        // console.log(wrapper.html());
        expect(wrapper.html()).toBe('<div>2 Gram</div>')
    });
});