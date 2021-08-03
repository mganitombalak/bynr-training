import { mount } from '@vue/test-utils';
import { nextTick, ref } from '@vue/runtime-core';

const myTestableComponent = {
    setup() {
        const result = ref('');
        const myVar = ref('Hello');
        const isVisible = ref(false);
        const completeWord = () => {
            myVar.value += " World";
        }
        const changeVisibility = () => {
            isVisible.value = !isVisible.value;
        }
        return {
            result,
            myVar,
            isVisible,
            completeWord,
            changeVisibility
        }
    },
    // data() {
    //     return { result: 'Any data!', myVar: '', isVisible: false }
    // },
    // methods: {
    //     completeWord() {
    //         this.myVar += " World"
    //     }
    // },
    // props: {
    //     myVar: {
    //         type: String
    //     },
    //     isVisible: {
    //         type: Boolean
    //     }
    // },
    template: '<button id="complete" @click="completeWord">Click Me</button><button id="btnVisible" @click="changeVisibility">Click Me</button><div v-if="isVisible">{{myVar}}</div>'
}
// WRAPPER / FACTORY 
function wrapperFactory({ data } = { data: {} }) { // FACTORY FUNCTION
    return mount(myTestableComponent, {
        data() {
            return data;
        }
    });
}
describe('My Testable Component', () => {
    it('should Not Be Visible', () => {
        // Mount will render component with sub components
        // const wrapper = wrapperFactory({
        //     myVar: 'Hello world',
        //     isVisible: false
        // });
        // const wrapper = wrapperFactory({
        //     data() {
        //         return {
        //             result: 'Any data!',
        //             myVar: 'Hello world',
        //             isVisible: false
        //         }
        //     }
        // });
        const wrapper = wrapperFactory({
            data: {
                result: 'Any data!',
                myVar: 'Hello world',
                isVisible: false
            }
        });

        // console.log(wrapper.html());
        // console.log(wrapper.vm);
        expect(wrapper.html()).not.toBe('<div>Hello world</div>');
    });
    it('should Be Visible With Given Text', async () => {
        // Mount will render component with sub components
        // const wrapper = wrapperFactory({
        //     myVar: 'Hello world',
        //     isVisible: true
        // });
        // const wrapper = wrapperFactory({
        //     data() {
        //         return {
        //             result: 'Any data!',
        //             myVar: 'Hello world',
        //             isVisible: true
        //         }
        //     }
        // });
        // const wrapper = wrapperFactory({
        //     data: {
        //         result: 'Any data!',
        //         myVar: 'Hello world',
        //         isVisible: true
        //     }
        // });
        const wrapper = wrapperFactory();
        await wrapper.find('#btnVisible').trigger('click');
        await wrapper.find('#complete').trigger('click');
        // console.log(wrapper.html());
        expect(wrapper.html()).toContain('<div>Hello World</div>');
    });

    it('should complete the given word with \'World\'', async () => {
        // const wrapper = wrapperFactory({
        //     data: {
        //         result: 'Any data!',
        //         myVar: 'Hello',
        //         isVisible: true
        //     }
        // });
        const wrapper = wrapperFactory();
        // await wrapper.find('button').trigger('click');
        await wrapper.find('#btnVisible').trigger('click');
        wrapper.find('#complete').trigger('click');
        await nextTick();
        expect(wrapper.html()).toContain('<div>Hello World</div>');
    });
});