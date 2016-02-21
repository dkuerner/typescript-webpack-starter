import * as ApiEndPoints from 'ApiEndPoints';

class BaseApi {

	context: string = 'own';
	endpoints: ApiEndPoints = new ApiEndPoints();;

	constructor(context: string){
		this.context = context;
	}

	getContext() {
		return this.context;
	}

	setContext(context: string) {
		this.context = context;
	}
}

export = BaseApi;
export default 'BaseApi';
