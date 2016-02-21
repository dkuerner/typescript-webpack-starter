import * as Car2goApi from 'Car2goApi';
var api = new Car2goApi('own');
if (window && window.document) {
    document.writeln(api.getContext());
}
else {
    console.log(api.getContext());
}
