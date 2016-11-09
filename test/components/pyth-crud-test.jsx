import { expect } from 'chai';

import React from 'react';
import ReactShallowRenderer from 'react-addons-test-utils';

import Pythcrud from '../../src/js/components/pyth-crud.jsx';

describe('Pythcrud component', function () {
  before(() => {
    let shallowRenderer = ReactShallowRenderer.createRenderer();
    shallowRenderer.render(
      <Pythcrud />
    );
    this.result = shallowRenderer.getRenderOutput();
  });

  it('renders a <div>', () => {
    expect(this.result.type).to.equal('div');
  });
});
