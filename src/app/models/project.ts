import { Stack } from './stack';

export interface Project {
    reveresed : boolean;
    logo : string;
    title : string;
    description : string;
    url : string;
    stacks : Stack[];
    isMobileApp ?: boolean;
    isWebsite ?: boolean;
}
