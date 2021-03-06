// npm install --save enzyme react-test-rendrer enzyme-adapter-react-16

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe(() => {
    beforeEach(()=>{
        wrapper = shallow(<ABC/>);
    });

    it('indiviual test', ()=> {
        expect(wrapper.find(CDE)).toHaveLength(2);
    });

    it('indiviual test', ()=> {
        wrapper.setProps({isAutheticated: true});
        expect(wrapper.find(CDE)).toHaveLength(2);
    });


})
