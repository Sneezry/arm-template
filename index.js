'use strict';

var AppInsights = require('applicationinsights');
var aiClient = AppInsights.getClient(process.env.applicationInsightsInstrumentationKey);

module.exports = function (context, diagnosticEvent) {
    aiClient.trackEvent('diagnostics', diagnosticEvent);
}