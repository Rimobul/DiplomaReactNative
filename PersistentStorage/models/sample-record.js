import {generateGuid} from './utils';

export default class SampleRecord {
    constructor(title, value, created){
        this.id = generateGuid();
        this.title = title;
        this.value = value;
        this.created = created;
    }
}