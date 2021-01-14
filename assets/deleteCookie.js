import setCookie from './setCookie';

export default function deleteCookie(cname) {
    console.log(cname + "=" +'b'+ ";" + 'expires = Thu, 01 Jan 1970 00:00:00 GMT;domain=.km.dev.localhost' + ";path=/");
    document.cookie = cname + "=" +'b'+ ";" + 'expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.km.dev.localhost' + ";path=/";
  };