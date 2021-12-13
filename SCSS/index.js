let dark = '<link rel="stylesheet" type="text/css" href="css/style2.css"></link>';
let light = '<link rel="stylesheet" type="text/css" href="css/style1.css"></link>';

function switchTheme(color) {
    var element = document.getElementById('theme_css');
    element.innerHTML = color;
}
