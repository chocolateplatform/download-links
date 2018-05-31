let BASE_URL = 'http://d25goy08v4a993.cloudfront.net';
let SDK_FILE = 'ChocolatePlatform_iOS_SDK';
let UNITY_FILE = 'ChocolateUnityPlugin';

$.getJSON('version.json', function(data){
  let url = new URL(window.location.href);
  let sdk = url.searchParams.get('sdk');

  if (sdk === 'manual') {
    var download = SDK_FILE;
    var ext = 'zip';
  } else if (sdk === 'unity') {
    var download = UNITY_FILE;
    var ext = 'unitypackage';
  } else {
    alert('Requested SDK not found.');
    return;
  }

  let redir = `${BASE_URL}/${download}_v${data.latest}.${ext}`
  window.location.replace(redir);
});



//alert("batman");
