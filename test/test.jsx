import { expect } from 'chai';
import Note from '../app/components/Note';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
//var jsdom = require("jsdom");
//
//var jsdom = require('jsdom')
//
//// setup the simplest document possible
//var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
//
//// get the window object out of the document
//var win = doc.defaultView
//
//// set globals for mocha that make access to document and window feel
//// natural in the test environment
//global.document = doc
//global.window = win
//
//// take all properties of the window object and also attach it to the
//// mocha global object
//propagateToGlobal(win)
//

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
//function propagateToGlobal (window) {
//    for (let key in window) {
//        if (!window.hasOwnProperty(key)) continue
//        if (key in global) continue
//
//        global[key] = window[key]
//    }
//}

var jsdom = require('mocha-jsdom');

function createComponent(component, props, ...children) {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
    return shallowRenderer.getRenderOutput();
}

describe('Note component test', function() {
    let note;

    beforeEach(function() {
        note = createComponent(Note, {});
    });

    it('should render a note', function() {
        expect(note.props.children).to.equal('Learn Webpack with testing and stuff!');
    });

});

describe('React with DOM test', function() {

        jsdom();

        it('should see something', function() {

        var note = TestUtils.renderIntoDocument(
            <Note />
        );

        var elem = TestUtils.findRenderedDOMComponentWithTag(note, 'div');
        expect(elem.getDOMNode().textContent).to.equal('Learn Webpack with testing and stuff!');
    })
}
);