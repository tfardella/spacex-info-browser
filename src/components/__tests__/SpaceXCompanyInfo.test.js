import React from 'react';
import ReactDOM from 'react-dom';
import SpaceXCompanyInfo from '../SpaceXCompanyInfo';
import { Provider } from 'react-redux';
import configureStore from '../../reducers/configureStore';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const { getByText } = render(
    <Provider store={store}>
      <SpaceXCompanyInfo />
    </Provider>  
      , div);
  expect(getByText('Company Info')).toBeInTheDocument();      

  ReactDOM.unmountComponentAtNode(div);
});
