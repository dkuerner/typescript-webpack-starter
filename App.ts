import * as BaseApi from 'BaseApi';
import * as Car2goApi from 'Car2goApi';
import * as ApiEndPoints from 'ApiEndPoints';

var api = new Car2goApi('own');
if(window && window.document) {
	document.writeln(api.getContext());
}else {
	console.log(api.getContext());
}
	

