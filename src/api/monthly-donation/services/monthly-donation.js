'use strict';

/**
 * monthly-donation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monthly-donation.monthly-donation');
