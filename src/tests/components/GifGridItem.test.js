import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../Components/GifGridItem';

describe('El componente GifGridItem debe...', () => {
  const title = 'HunterXHunter';
  const url = 'http://algo.com';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('cargar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect( url.includes('http://') ).toBe(true);
  });
  
  test('tener un parrafo con el <title>', () => {
      const p = wrapper.find('p');

      expect( p.text().trim() ).toBe(title);
  });
  
  test('tener la imagen con su <url> y su alt con el valor <title>', () => {
      const img = wrapper.find( 'img' );
      expect( img.prop( 'src' ) ).toBe( url );
      expect( img.prop('alt') ).toBe( title )
  })

  test('debe tener la clase css "animate__fadeIn"', () => {
      const div = wrapper.find('div');

      expect( div.hasClass('animate__fadeIn') ).toBe( true );
  })
  
  

});
