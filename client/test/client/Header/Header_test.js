/* global after, before, beforeEach, describe, it */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';

// Custom components
import Header from '../../../src/components/Layout/Header';

describe('Header view', () => {
    let wrapper;

    beforeEach(done => {
        wrapper = mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        done();
    });

    it('should render the header', done => {
        expect(wrapper.find('nav').length).to.equal(1);
        done();
    })

    it('should have a Bootstrap class of Navbar', done => {
        expect(wrapper.find('nav').hasClass('navbar')).to.equal(true);
        done();
    })

    it('should display an h1 of the company name', done => {
        expect(wrapper.find('h1').text()).to.equal('octopus energy');
        done();
    })
})