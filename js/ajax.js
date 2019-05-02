
var page = 1; 

function prepareRequest() {
	var tran = null;
	try { tran = new XMLHttpRequest(); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Msxml2.XMLHTTP"); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Microsoft.XMLHTTP"); }
	catch(e) { tran = null; }
	return tran;
}

function makeRequest(url, n) {
   url = page + ".html";			
   //page = (page + 1) % 4 + 1;		


   try 
   {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
   } 
   catch (e) 
   {
//    alert("Доступ открыт.");
   }


  try {
        url = "leng/main/" + url;
	http_request = prepareRequest();		
	http_request.onreadystatechange = function() { alertContents(http_request, n); }
	http_request.open('GET', url, true);
	http_request.overrideMimeType('text/html');
	http_request.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request.send(null);
//	http_request.send('seed='+kotUrlEncode(seed)+'&fpage='+page+'&mid='+mid+'&n='+n);
//	if (seed.charAt(0)=='!') alert(kotUrlEncode(seed));
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





var page2 = 2;

function prepareRequest2() {
	var tran = null;
	try { tran = new XMLHttpRequest2(); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Msxml22.XMLHTTP"); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Microsoft2.XMLHTTP"); }
	catch(e) { tran = null; }
	return tran;
}

function makeRequest2(url, n) {
   url = page2 + ".html";
//   page = (page2 + 1) % 4 + 1;


   try 
   {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
   } 
   catch (e) 
   {
//    alert("Доступ открыт.");
   }


  try {
        url = "leng/main/" + url;
	http_request = prepareRequest();		
	http_request.onreadystatechange = function() { alertContents2(http_request, n); }
	http_request.open('GET', url, true);
	http_request.overrideMimeType('text/html');
	http_request.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request.send(null);
//	http_request.send('seed='+kotUrlEncode(seed)+'&fpage='+page+'&mid='+mid+'&n='+n);
//	if (seed.charAt(0)=='!') alert(kotUrlEncode(seed));
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



var page3 = 3;

function prepareRequest3() {
	var tran = null;
	try { tran = new XMLHttpRequest3(); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Msxml23.XMLHTTP"); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Microsoft3.XMLHTTP"); }
	catch(e) { tran = null; }
	return tran;
}

function makeRequest3(url, n) {
   url = page3 + ".html";
//   page = (page3 + 1) % 4 + 1;


  
  try {
        url = "leng/main/" + url;
	http_request = prepareRequest();		
	http_request.onreadystatechange = function() { alertContents3(http_request, n); }
	http_request.open('GET', url, true);
	http_request.overrideMimeType('text/html');
	http_request.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request.send(null);
//	http_request.send('seed='+kotUrlEncode(seed)+'&fpage='+page+'&mid='+mid+'&n='+n);
//	if (seed.charAt(0)=='!') alert(kotUrlEncode(seed));
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


var page4 = 4;

function prepareRequest4() {
	var tran = null;
	try { tran = new XMLHttpRequest4(); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Msxml24.XMLHTTP"); }
	catch(e) { tran = null; }
	try { if(!tran) tran = new ActiveXObject("Microsoft4.XMLHTTP"); }
	catch(e) { tran = null; }
	return tran;
}

function makeRequest4(url, n) {
   url = page4 + ".html";
   page = (page4 + 1) % 4 + 1;


  
  
  try {
        //url = "file:///zzz:/zzz/zzz/zzz/src/" + url;
	http_request = prepareRequest();		
	http_request.onreadystatechange = function() { alertContents4(http_request, n); }
	http_request.open('GET', url, true);
	http_request.overrideMimeType('text/html');
	http_request.setRequestHeader('Content-Type', 'text/html; charset=Windows-1251');
	http_request.send(null);
//	http_request.send('seed='+kotUrlEncode(seed)+'&fpage='+page+'&mid='+mid+'&n='+n);
//	if (seed.charAt(0)=='!') alert(kotUrlEncode(seed));
  }
  catch(e) { alert("Error:\n\n" + e); }
}

function alertContents4(http_request, n) {
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
