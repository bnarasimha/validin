var html = document.querySelector('html');
var theme = localStorage.getItem('vdn-theme');

if ( theme == 'dark' ){
    html.setAttribute('data-theme', 'dark');
} else {
    html.setAttribute('data-theme', 'light');
}
