import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

export const setupEnzymeAdapter = () => {
  Enzyme.configure({ adapter: new Adapter() });
};
