let BASE_URL = 'http://d25goy08v4a993.cloudfront.net';
let SDK_FILE = 'ChocolatePlatform_iOS_SDK';
let UNITY_FILE_OLD = 'ChocolateUnityPlugin';
let UNITY_FILE_NEW = 'ChocolatePlatformAds';
let NEW_BASE_URL = 'https://gitlab.com/chocolateplatform-public/ios-sdk-binaries/-/jobs/artifacts/release_v'
let NEW_URL_TAG = '/download?job=sdk'

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
    // var download = SDK_FILE;
    // var ext = 'zip';
    var dest = `${NEW_BASE_URL}${version}${NEW_URL_TAG}`
  } else if (sdk === 'unity') {
    var download = version >= '2.0.0' ? UNITY_FILE_NEW : UNITY_FILE_OLD;
    var ext = 'unitypackage';
    var dest = `${BASE_URL}/${download}_v${version}.${ext}`
  } else {
    alert('Requested SDK not found.');
    return;
  }

  //let redir = `${BASE_URL}/${download}_v${version}.${ext}`
  //console.log(redir);
  window.location.replace(dest);
});
