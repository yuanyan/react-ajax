React-Ajax
==============

Ajax Request Component for React.

## Demo & Examples

Live demo: [yuanyan.github.io/react-ajax](http://yuanayn.github.io/react-ajax/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:9999`](http://localhost:9999) in a browser.


## Installation

The easiest way to use React-ajax is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

You can also use the standalone build by including `dist/react-ajax.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-ajax --save
```

## Usage

```
var Ajax = require('react-ajax');

<Ajax onResponse={this.responseHandler} />
```

### Properties

* `url` The request url.
* `method` The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'. Default is 'GET'.
* `params` Parameters to send to the specified URL.
* `body` Optional raw body content to send when method === "POST".
* `headers` HTTP request headers to send.
* `accept` Setting HTTP accept header, specify either the full canonicalized MIME type name as type/subtype, or the extension suffix form as "xml", "json", "png".
* `type` Setting HTTP contentType header, accepting the canonicalized MIME type name complete with type/subtype, or simply the extension name such as "xml", "json", "png".
* `withCredentials` Set the withCredentials flag on the request.
* `timeout` Request timeouts(ms).

### Events

These are the special events implemented by `ajax`.

* `onResponse` fired when request response
