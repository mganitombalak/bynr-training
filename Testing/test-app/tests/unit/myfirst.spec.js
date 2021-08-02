import { mount } from '@vue/test-utils';

const myTestableComponent = {
    data() {
        return { result: 'Any data!', myVar: '', isVisible: false }
    },
    // props: {
    //     myVar: {
    //         type: String
    //     },
    //     isVisible: {
    //         type: Boolean
    //     }
    // },
    template: '<div v-if="isVisible">{{myVar}}</div>'
}
// WRAPPER / FACTORY 
function wrapperFactory(props) { // FACTORY FUNCTION
    return mount(myTestableComponent, { props });
}
describe('My Testable Component', () => {
    it('Test My Component Should Not Be Visible', () => {
        // Mount will render component with sub components
        // const wrapper = wrapperFactory({
        //     myVar: 'Hello world',
        //     isVisible: false
        // });
        const wrapper = wrapperFactory({
            data() {
                return {
                    result:'Any data!',
                    myVar: 'Hello world',
                    isVisible: false
                }
            }
        });
        // console.log(wrapper.html());
        console.log(wrapper.vm);
        expect(wrapper.html()).not.toBe('<div>Hello world</div>');
    });
    it('Test My Component Should Be Visible With Given Text', () => {
        // Mount will render component with sub components
        // const wrapper = wrapperFactory({
        //     myVar: 'Hello world',
        //     isVisible: true
        // });
        const wrapper = wrapperFactory({
            data() {
                return {
                    result:'Any data!',
                    myVar: 'Hello world',
                    isVisible: true
                }
            }
        });
        // console.log(wrapper.html());
        expect(wrapper.html()).toBe('<div>Hello world</div>');
    });
});