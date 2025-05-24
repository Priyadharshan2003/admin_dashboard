'use strict';

/**
 * book-visit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-visit.book-visit');
