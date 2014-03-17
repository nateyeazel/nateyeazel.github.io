


$(document).ready(function() {
	$("#navigation ul a li").click(function(event) {
		$("#navigation li").removeClass("selected");
		$(this).addClass("selected");
	});
});

function createlightboxregister() {
	document.getElementById('lightreg').style.display='block';
	document.getElementById('fade').style.display='block';
}

function closelightbox() {
	document.getElementById('fade').style.display='none';
	document.getElementById('lightreg').style.display='none';
	document.getElementById('lightlogin').style.display='none';
	document.getElementById('thankyou').style.display='none';
	document.getElementById('questionbox').style.display='none';
}

function createlightboxlogin() {
	document.getElementById('lightlogin').style.display='block';
	document.getElementById('fade').style.display='block';
}

function createlightboxthankyou() {
	document.getElementById('thankyou').style.display='block';
	document.getElementById('fade').style.display='block';
}

function createlightboxquestion() {
	document.getElementById('questionbox').style.display='block';
	document.getElementById('fade').style.display='block';
}

function createJobDesc(characteristic) {
	document.getElementById(characteristic).style.display='block';
	document.getElementById('fade').style.display='block';
}

function closeJobDesc(characteristic) {
	document.getElementById(characteristic).style.display='none';
	document.getElementById('fade').style.display='none';
}

$(window).click(function(){
  $(".popupdescription").stop().animate({"marginTop": ($(window).scrollTop()) - 100 + "px"});
  $(".popupregcontent").stop().animate({"marginTop": ($(window).scrollTop()) - 100 + "px"});
  $(".popuplogincontent").stop().animate({"marginTop": ($(window).scrollTop()) - 100 + "px"});
  $(".popupthankyou").stop().animate({"marginTop": ($(window).scrollTop()) - 100 + "px"});
});


function toggleresults(c) {
	document.maincontent.getElementsByClassName(c).style.display='none';
}

function getElementsByClassName(classname) {
	var node = document.getElementsByTagName("body")[0];
	var a = [];
	var re = new RegExp('\\b' + classname + '\\b');
	var els = node.getElementsByTagName("*");
	for(var i=0,j=els.length; i<j; i++) 
		if(re.test(els[i].className))a.push(els[i]);
	return a
}

function addFilter(classname, node) {
	var elements = new Array();
	elements = getElementsByClassName(classname);

	if(document.getElementById(node).checked) {
		for(i in elements) {
			elements[i].style.display = "block";
		};
	}
	else {
		for(i in elements) {
			elements[i].style.display = "none";
		};
	}
}

function addFilter2(classname, node) {
	var elements = new Array();
	elements = getElementsByClassName(classname);

	if(document.getElementById(node).checked) {
		for(i in elements) {
			elements[i].style.display = "none";
		};
	}
	else {
		for(i in elements) {
			elements[i].style.display = "block";
		};
	}
}






