import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const component = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // const linkElement = getByText();
  // console.log(linkElement);
  // expect(linkElement).toBeInTheDocument();
});
