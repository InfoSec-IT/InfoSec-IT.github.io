﻿var page = 1; 

function prepareRequest() {
	var tran = null;
	try { tran = new XMLHttpRequest(); tran = new XMLHttpRequest(); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Msxml2.XMLHTTP"); if(!tran) tran = new ActiveXObject("Msxml24.XMLHTTP"); if(!tran) tran = new ActiveXObject("Msxml25.XMLHTTP"); if(!tran) tran = new ActiveXObject("Msxml26.XMLHTTP"); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Microsoft.XMLHTTP"); if(!tran) tran = new ActiveXObject("Microsoft4.XMLHTTP"); if(!tran) tran = new ActiveXObject("Microsoft5.XMLHTTP"); if(!tran) tran = new ActiveXObject("Microsoft6.XMLHTTP"); }
	catch(e) { tran = null; }
	return tran;
}

function makeRequest(url, url4, url5, url6, n) {
   url = page + ".html";
   url4 = page + ".html";
   url5 = page + ".html";
   url6 = page + ".html";			
		


   try 
   {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
   } 
   catch (e) 
   {

   }


  try {
        url = "leng/main/" + url;
        url4 = "leng/tezis/" + url4;
        url5 = "leng/stat/" + url5;
        url6 = "leng/logo/" + url6;
	http_request = prepareRequest();
	http_request4 = prepareRequest();
	http_request5 = prepareRequest();	
	http_request6 = prepareRequest();	
	http_request.onreadystatechange = function() { alertContents(http_request, n); }
	http_request4.onreadystatechange = function() { alertContents4(http_request4, n); }
	http_request5.onreadystatechange = function() { alertContents5(http_request5, n); }
	http_request6.onreadystatechange = function() { alertContents6(http_request6, n); }
	http_request.open('GET', url, true);
	http_request4.open('GET', url4, true);
	http_request5.open('GET', url5, true);
	http_request6.open('GET', url6, true);
	http_request.overrideMimeType('text/html');
	http_request4.overrideMimeType('text/html');
	http_request5.overrideMimeType('text/html');
	http_request6.overrideMimeType('text/html');
	http_request.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request4.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request5.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request6.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request.send(null);
	http_request4.send(null);
	http_request5.send(null);
	http_request6.send(null);

  }
  catch(e) { alert("Error:\n\n" + e); }
}

function alertContents(http_request, n) {
	var PickText, prevDiv;
	if (http_request.readyState == 4) {
		if (http_request.status == 200 || http_request.status == 0) {
			PickText = http_request.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box2"); 
		prevDiv.innerHTML = PickText;
	}
}

function alertContents4(http_request4, n) {
	var PickText, prevDiv;
	if (http_request4.readyState == 4) {
		if (http_request4.status == 200 || http_request4.status == 0) {
			PickText = http_request4.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box3"); 
		prevDiv.innerHTML = PickText;
	}
}

function alertContents5(http_request5, n) {
	var PickText, prevDiv;
	if (http_request5.readyState == 4) {
		if (http_request5.status == 200 || http_request5.status == 0) {
			PickText = http_request5.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box4"); 
		prevDiv.innerHTML = PickText;
	}
}

function alertContents6(http_request6, n) {
	var PickText, prevDiv;
	if (http_request6.readyState == 4) {
		if (http_request6.status == 200 || http_request6.status == 0) {
			PickText = http_request6.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box5"); 
		prevDiv.innerHTML = PickText;
	}
}




var page2 = 2;

function prepareRequest2() {
	var tran = null;
	try { tran = new XMLHttpRequest2(); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Msxml22.XMLHTTP"); if(!tran) tran = new ActiveXObject("Msxml27.XMLHTTP"); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Microsoft2.XMLHTTP"); if(!tran) tran = new ActiveXObject("Microsoft7.XMLHTTP"); }
	catch(e) { tran = null; }
	return tran;
}

function makeRequest2(url, url7, url8, url9, n) {
   url = page2 + ".html";
   url7 = page2 + ".html";
   url8 = page2 + ".html";
   url9 = page2 + ".html";



   try 
   {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
   } 
   catch (e) 
   {

   }


  try {
        url = "leng/main/" + url;
        url7 = "leng/tezis/" + url7;
		url8 = "leng/stat/" + url8;
        url9 = "leng/logo/" + url9;
	http_request = prepareRequest();
	http_request7 = prepareRequest();
	http_request8 = prepareRequest();
	http_request9 = prepareRequest();
	http_request.onreadystatechange = function() { alertContents2(http_request, n); }
	http_request7.onreadystatechange = function() { alertContents7(http_request7, n); }
	http_request8.onreadystatechange = function() { alertContents8(http_request8, n); }
	http_request9.onreadystatechange = function() { alertContents9(http_request9, n); }
	http_request.open('GET', url, true);
	http_request7.open('GET', url7, true);
	http_request8.open('GET', url8, true);
	http_request9.open('GET', url9, true);
	http_request.overrideMimeType('text/html');
	http_request7.overrideMimeType('text/html');
	http_request8.overrideMimeType('text/html');
	http_request9.overrideMimeType('text/html');
	http_request.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request7.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request8.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request9.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request.send(null);
	http_request7.send(null);
	http_request8.send(null);
	http_request9.send(null);

  }
  catch(e) { alert("Error:\n\n" + e); }
}

function alertContents2(http_request, n) {
	var PickText, prevDiv;
	if (http_request.readyState == 4) {
		if (http_request.status == 200 || http_request.status == 0) {
			PickText = http_request.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box2");
		prevDiv.innerHTML = PickText;
	}
}


function alertContents7(http_request7, n) {
	var PickText, prevDiv;
	if (http_request7.readyState == 4) {
		if (http_request7.status == 200 || http_request7.status == 0) {
			PickText = http_request7.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box3"); 
		prevDiv.innerHTML = PickText;
	}
}

function alertContents8(http_request8, n) {
	var PickText, prevDiv;
	if (http_request8.readyState == 4) {
		if (http_request8.status == 200 || http_request8.status == 0) {
			PickText = http_request8.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box4"); 
		prevDiv.innerHTML = PickText;
	}
}

function alertContents9(http_request9, n) {
	var PickText, prevDiv;
	if (http_request9.readyState == 4) {
		if (http_request9.status == 200 || http_request9.status == 0) {
			PickText = http_request9.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box5"); 
		prevDiv.innerHTML = PickText;
	}
}



var page3 = 3;

function prepareRequest3() {
	var tran = null;
	try { tran = new XMLHttpRequest3(); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Msxml23.XMLHTTP"); if(!tran) tran = new ActiveXObject("Msxml210.XMLHTTP"); if(!tran) tran = new ActiveXObject("Msxml211.XMLHTTP"); if(!tran) tran = new ActiveXObject("Msxml212.XMLHTTP"); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Microsoft3.XMLHTTP"); if(!tran) tran = new ActiveXObject("Microsoft10.XMLHTTP"); if(!tran) tran = new ActiveXObject("Microsoft11.XMLHTTP"); if(!tran) tran = new ActiveXObject("Microsoft12.XMLHTTP"); }
	catch(e) { tran = null; }
	return tran;
}

function makeRequest3(url, url10, url11, url12, n) {
   url = page3 + ".html";
   url10 = page3 + ".html";
   url11 = page3 + ".html";
   url12 = page3 + ".html";



  
  try {
        url = "leng/main/" + url;
        url10 = "leng/tezis/" + url10;
        url11 = "leng/stat/" + url11;
        url12 = "leng/logo/" + url12;
	http_request = prepareRequest();
	http_request10 = prepareRequest();
	http_request11 = prepareRequest();
	http_request12 = prepareRequest();		
	http_request.onreadystatechange = function() { alertContents3(http_request, n); }
	http_request10.onreadystatechange = function() { alertContents10(http_request10, n); }
	http_request11.onreadystatechange = function() { alertContents11(http_request11, n); }
	http_request12.onreadystatechange = function() { alertContents12(http_request12, n); }
	http_request.open('GET', url, true);
	http_request10.open('GET', url10, true);
	http_request11.open('GET', url11, true);
	http_request12.open('GET', url12, true);
	http_request.overrideMimeType('text/html');
	http_request10.overrideMimeType('text/html');
	http_request11.overrideMimeType('text/html');
	http_request12.overrideMimeType('text/html');
	http_request.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request10.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request11.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request12.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request.send(null);
	http_request10.send(null);
	http_request11.send(null);
	http_request12.send(null);

  }
  catch(e) { alert("Error:\n\n" + e); }
}

function alertContents3(http_request, n) {
	var PickText, prevDiv;
	if (http_request.readyState == 4) {
		if (http_request.status == 200 || http_request.status == 0) {
			PickText = http_request.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box2");
		prevDiv.innerHTML = PickText;
	}
}


function alertContents10(http_request10, n) {
	var PickText, prevDiv;
	if (http_request10.readyState == 4) {
		if (http_request10.status == 200 || http_request10.status == 0) {
			PickText = http_request10.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box3"); 
		prevDiv.innerHTML = PickText;
	}
}

function alertContents11(http_request11, n) {
	var PickText, prevDiv;
	if (http_request11.readyState == 4) {
		if (http_request11.status == 200 || http_request11.status == 0) {
			PickText = http_request11.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box4"); 
		prevDiv.innerHTML = PickText;
	}
}

function alertContents12(http_request12, n) {
	var PickText, prevDiv;
	if (http_request12.readyState == 4) {
		if (http_request12.status == 200 || http_request12.status == 0) {
			PickText = http_request12.responseText;
		} else {
			PickText = window.app_comments_connecterror || 'There was a problem with the request.';
		}
                var prevDiv = document.getElementById("box5"); 
		prevDiv.innerHTML = PickText;
	}
}
