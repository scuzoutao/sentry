import React from 'react';
import {shallow, mount} from 'enzyme';

import {RadioBooleanField} from 'app/components/forms';
import NewRadioBooleanField from 'app/views/settings/components/forms/radioBooleanField';

describe('RadioBooleanField', function() {
  describe('render()', function() {
    it('renders without form context', function() {
      const wrapper = shallow(
        <RadioBooleanField name="fieldName" yesLabel="Yes" noLabel="No" />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders with form context', function() {
      const wrapper = shallow(
        <RadioBooleanField name="fieldName" yesLabel="Yes" noLabel="No" />,
        {
          context: {
            form: {
              data: {
                fieldName: true,
              },
              errors: {},
            },
          },
        }
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders new field without form context', function() {
      const wrapper = mount(
        <NewRadioBooleanField name="fieldName" yesLabel="Yes" noLabel="No" />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('can change values', function() {
      const mock = jest.fn();
      const wrapper = mount(
        <NewRadioBooleanField
          onChange={mock}
          name="fieldName"
          yesLabel="Yes"
          noLabel="No"
        />
      );

      wrapper.find('input[value="true"]').simulate('change');
      expect(mock).toHaveBeenCalledWith(true, expect.anything());

      wrapper.find('input[value="false"]').simulate('change');
      expect(mock).toHaveBeenCalledWith(false, expect.anything());
    });
  });
});
