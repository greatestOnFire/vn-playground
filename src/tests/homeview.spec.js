import { mount } from '@vue/test-utils'
import Home from "../views/Home.vue";


describe('HomeView', () => {
    it('renders correctly', () => {
        const wrapper = mount(Home, {})
        expect(wrapper.text()).toContain("0");
    })
})