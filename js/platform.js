var platform="material";
var device = window.navigator.platform;
var iosPlatforms = ['iPhone', 'iPad', 'iPod'];

if(iosPlatforms.indexOf(device)!=-1)
	platform="ios";


document.write('<link rel="stylesheet" href="vendor/framework7/css/'+platform+'/colors.min.css">')
document.write('<link rel="stylesheet" href="vendor/framework7/css/'+platform+'/min.css">')
document.write('<link rel="stylesheet" href="vendor/framework7/css/icons.css">')