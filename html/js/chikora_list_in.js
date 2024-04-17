//var styleTag = document.getElementById('ori_style');
//if (styleTag) {styleTag.textContent = '';}

document.title = title["ja"];
document.getElementById("title_div").innerHTML = title["ja"];
Object.keys(kanji_word).forEach(function(key) {
    temp_str = "<button class=\"go_button\" onclick=\"use_go('" + key + "')\">" + kanji_word[key]["name"] + "</button>";
    button_div.innerHTML += temp_str;
});
var totalItems = s_site.length;
var counter = 0;

var mysite_div = document.getElementById("my_page_div");
var mysite_code = "";
mysite_code = str_mysite();
mysite_div.innerHTML += mysite_code;
