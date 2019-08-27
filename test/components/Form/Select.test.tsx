import { Select } from '../../../src/components/Form/Select';
import { shallow, mount } from 'enzyme';
import React from 'react';

const mockValues = [{ value: 'test', label: 'test' }];

describe('#components/Select', () => {
  it('Tests Snapshot', () => {
    expect(
      shallow(<Select onChange={jest.fn()} selectedValue={"Test"} values={mockValues} />)
    ).toMatchSnapshot();
  });

  it('Tests user interaction', () => {
    const wrapper = mount(<Select onChange={jest.fn()} selectedValue={"Test"} values={mockValues} />)

    const select = wrapper.find('select')

    select.simulate('focus')
    select.simulate('change', { target: { value: 'test'} });
  })
});