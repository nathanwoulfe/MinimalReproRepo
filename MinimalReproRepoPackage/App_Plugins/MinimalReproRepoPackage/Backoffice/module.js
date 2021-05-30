import { CommentsComponent } from './component.js';

export const ComponentsModule = angular
    .module('demo.components', [])
    .component(CommentsComponent.name, CommentsComponent).name;