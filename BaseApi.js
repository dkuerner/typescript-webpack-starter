import * as ApiEndPoints from 'ApiEndPoints';
class BaseApi {
    constructor(context) {
        this.context = 'own';
        this.endpoints = new ApiEndPoints();
        this.context = context;
    }
    ;
    getContext() {
        return this.context;
    }
    setContext(context) {
        this.context = context;
    }
}
