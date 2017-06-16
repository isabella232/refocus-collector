/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * test/commands/register.js
 */
'use strict';
const utils = require('../testUtils');
const expect = require('chai').expect;

describe('test/commands/register >', () => {
  before(utils.makeRegistryFile);
  after(utils.removeRegistryFile);

  it('logs the expected result', (done) => {
    const { exec } = require('child_process');
    exec('refocus-collector register --url=https://refocus.foo.com' +
      ' --token=eygduyguygijfdhkfjhkfdhg --name=PRD_Collector_12345',
      (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        done(error);
      }

      expect(stdout).to.contain('Register => https://refocus.foo.com' +
        ' eygduyguygijfdhkfjhkfdhg PRD_Collector_12345');
      done();
    });
  });
});
