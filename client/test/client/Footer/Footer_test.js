/* global after, before, beforeEach, describe, it */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';

// Custom components
import Footer from '../../../src/components/Layout/Footer';

describe('Footer view', () => {
    let wrapper;

    beforeEach(done => {
        wrapper = mount(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        done();
    });

    it('should render the footer', done => {
        expect(wrapper.find('footer').length).to.equal(1);
        done();
    })

    it('should contain two p tags', done => {
        expect(wrapper.find('p').length).to.equal(2);
        done();
    })

    it('should not contain any other type of tags', done => {
        expect(wrapper.find('h2').length).to.equal(0);
        expect(wrapper.find('span').length).to.equal(0);
        expect(wrapper.find('a').length).to.equal(0);
        expect(wrapper.find('img').length).to.equal(0);
        expect(wrapper.find('div').length).to.equal(0);
        expect(wrapper.find('section').length).to.equal(0);
        expect(wrapper.find('ul').length).to.equal(0);
        expect(wrapper.find('li').length).to.equal(0);
        expect(wrapper.find('strong').length).to.equal(0);
        done();
    })
})