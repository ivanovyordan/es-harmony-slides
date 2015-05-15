var href = 'bower_components/reveal.js/css/print/';

if(window.location.search.match(/print-pdf/gi)) {
	href += 'pdf.css'
}
else {
	href += 'paper.css';
}


var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = href;
document.getElementsByTagName('head')[0].appendChild(link);