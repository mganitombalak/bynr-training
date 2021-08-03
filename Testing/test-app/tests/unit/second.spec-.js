import { mount } from '@vue/test-utils'

const ourTestComponent = {
    props: {
        sayi: Number,
        text: String
    },
    template: '<div>{{sayi}} {{text}}</div>'
}
// WRAPPER / FACTORY 
function wrapperFactory(props) { // factory functions
    return mount(ourTestComponent, { props });
}
describe('Our Test Component', () => {
    it('should be rendered', () => {
        const wrapper = wrapperFactory({ sayi: 1, text: 'Adet' });
        // console.log(wrapper.html());
        console.log(wrapper.vm);
        expect(wrapper.html()).toBe('<div>1 Adet</div>')
    });

    it('should be rendered with different props', () => {
        const wrapper = wrapperFactory({ sayi: 2, text: 'Gram' });
        // console.log(wrapper.html());
        expect(wrapper.html()).toBe('<div>2 Gram</div>')
    });
});