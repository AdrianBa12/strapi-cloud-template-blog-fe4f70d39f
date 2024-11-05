'use strict';

/**
 * pasajero service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pasajero.pasajero');
