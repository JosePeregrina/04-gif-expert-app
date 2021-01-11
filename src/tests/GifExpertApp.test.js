import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('El componente <GifExpertApp />', ()=> {
  test('debe cargar correctamente', () => {
    const wrapper = shallow(<GifExpertApp/>)

    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar una lista de categorias', () => {
      const categories = ['One Punch Man','Dragon Ball'];
      const wrapper = shallow(<GifExpertApp defaultcategories={categories} />);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
  
  
    
})