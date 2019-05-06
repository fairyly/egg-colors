'use strict';

const mock = require('egg-mock');

describe('test/colors.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/colors-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, colors')
      .expect(200);
  });
});
