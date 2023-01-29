var myHeaders = new Headers();
myHeaders.append("token", "845961EF-B17842C2-98DA4DB3-855D5B85");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};

fetch("https://developer.sepush.co.za/business/2.0/api_allowance", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 