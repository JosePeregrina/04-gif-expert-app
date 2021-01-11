import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../Components/AddCategory';

describe('El componente <AddCategory/>...', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    jest.clearAllMocks();
  });

  test('debe cargarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Ejemplo';
    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('no debe de postear la información OnSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'One Punch Man' 

    wrapper.find('input').simulate('change', { target: { value } } );
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
