import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
