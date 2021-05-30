import { ComponentsModule } from './module.js';

angular.module('demo', [
    ComponentsModule
]);

angular.module('umbraco').requires.push('demo');