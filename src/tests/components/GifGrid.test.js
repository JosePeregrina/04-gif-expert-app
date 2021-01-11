import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifGrid from '../../Components/GifGrid';
import { useFetchGifts } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('El componente <GifGrid />', () => {
    const category = 'One Punch Man'
  test('debe cargar correctamente ', () => {

    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostar items cuando se cargar imagenes con usefetchGifs', () => {
    const gifs = [{
        id: 'abc',
        title: 'cualquier cosa',
        url: 'http://base_url.com',
      },{
        id: 'def',
        title: 'cualquier otra cosa',
        url: 'http://base_url.com',
      }]
    useFetchGifts.mockReturnValue({
        data: gifs,
        loading: false,
      });
    const wrapper = shallow(<GifGrid category={category} />);

    expect( wrapper.find('p').exists() ).toBe(false);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    
  });
});
