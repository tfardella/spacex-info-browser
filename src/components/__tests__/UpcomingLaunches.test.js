import React from 'react';
import ReactDOM from 'react-dom';
import UpcomingLaunches from '../UpcomingLaunches';
import { Provider } from 'react-redux';
import configureStore from '../../reducers/configureStore';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const { getByText } = render(
    <Provider store={store}>
      <UpcomingLaunches />
    </Provider>  
      , div);
  expect(getByText('Launch Details')).toBeInTheDocument();      
  ReactDOM.unmountComponentAtNode(div);
});
