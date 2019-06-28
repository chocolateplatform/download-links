let BASE_URL = 'http://d25goy08v4a993.cloudfront.net';
let SDK_FILE = 'ChocolatePlatform_iOS_SDK';
let UNITY_FILE_OLD = 'ChocolateUnityPlugin';
let UNITY_FILE_NEW = 'ChocolatePlatformAds';

$.getJSON('version.json', function(data){
  let url = new URL(window.location.href);
  let sdk = url.searchParams.get('sdk');

  var version = url.searchParams.get('version');
  if(!version) {
    alert('SDK version is required.');
    return;
  } else if (version === 'latest') {
    version = data[sdk].latest;
  }

  if (sdk === 'manual') {
    var download = SDK_FILE;
    var ext = 'zip';
  } else if (sdk === 'unity') {
    var download = version >= '2.0.0' ? UNITY_FILE_NEW : UNITY_FILE_OLD;
    var ext = 'unitypackage';
  } else {
    alert('Requested SDK not found.');
    return;
  }

  let redir = `${BASE_URL}/${download}_v${version}.${ext}`
  //console.log(redir);
  window.location.replace(redir);
});
