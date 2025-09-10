'use strict';

/**
 * how-to-donate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::how-to-donate.how-to-donate');
