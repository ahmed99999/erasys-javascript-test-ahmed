import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Users from './index'
import './style.css';

configure({ adapter: new Adapter() });
describe('Users', () => {

    it('Users: renders without crashing', () => {
        const tree = renderer.create(<Users usersNumber={2} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Users: number of users', () => {
        const component = shallow(<Users usersNumber={2} />);
        const instance = component.instance();
        expect(instance.state.totalPages).toBe(0);
    });

});