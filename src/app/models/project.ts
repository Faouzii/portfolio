import { Stack } from './stack';

export interface Project {
    reveresed : boolean;
    logo : string;
    title : string;
    description : string;
    googlePlayUrl : string;
    stacks : Stack[];
}
