/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * ./src/constants.js
 *
 * Constants
 */

module.exports = {
  // registry json file location
  registryLocation: './registry.json',

  // bulk upsert path, use with refocus url
  bulkUpsertEndpoint: '/v1/samples/upsert/bulk',

  httpStatus: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    REDIRECT: 301,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
  },

  // exported for the purpose of testing
  mockRegistryLocation: './test/config/testRegistry.json',

  // generators directory location
  generatorsDir: './generators',
};