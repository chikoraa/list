
function use_go(go){
    if (s_site.length > 0) {
        var button_div = document.getElementById("button_div");
        counter = 0;
        var s_site_code = "";
        s_site_code = str_s_site_just(go);

        var main_div = document.getElementById("s_site_div");
        main_div.innerHTML = s_site_code;
      }

    if (title.hasOwnProperty(go)){
      document.getElementById("title_div").innerHTML = title[go];
      //document.title = title[go];
    }
    else {
      document.getElementById("title_div").innerHTML = title["ja"];
      //document.title = title["ja"];
    }

    var htmlElement = document.documentElement;
    htmlElement.lang = go;

}

function str_s_site_just(go){
  var show_code = "";
  show_code += resolution;
  show_code += kanji_word[go]["sabun_str"];
  show_code += "(";
  var tag_str = "";
  tag.forEach(function(key){
    tag_str += '<a href="https://www.pixiv.net/users/49932336/illustrations/' + key + '" target="_blank">';
    if (tag_word[go].hasOwnProperty(key)){
      tag_str += tag_word[go][key];
    }
    else {
      tag_str += key;
    }

    tag_str += "</a>|";
   });
  tag_str = tag_str.slice(0, -1);
  show_code += tag_str;
  show_code += ")(";
  show_code += sabun_num;
  show_code += kanji_word[go]["sabun_mai"];
  show_code += "):";
  s_site.forEach(function(value, key) {
      counter++;
      show_code += "<div class=\"s_site\">";
      show_code += "<a class=\"a_url\" href=\"" + my_page[value.name] + "\"><div class=\"s_site_name\">" + value.name + ":</div></a>\n";
      if (value.main_post !== "") show_code += "<a class=\"a_url\" href=\"" + value.main_post + "\"><div class=\"s_site_ko\">" + kanji_word[go]["main_post"] + "</div></a>\n";
      if (value.free_post !== "") show_code += "<a class=\"a_url\" href=\"" + value.free_post + "\"><div class=\"s_site_ko\">" + kanji_word[go]["free_post"] + "</div></a>\n";
      if (value.anzen_post !== "") show_code += "<a class=\"a_url\" href=\"" + value.anzen_post + "\"><div class=\"s_site_ko\">" + kanji_word[go]["anzen_post"] + "</div></a>\n";
      if (value.all_post !== "") show_code += "<a class=\"a_url\" href=\"" + value.all_post + "\"><div class=\"s_site_ko\">" + kanji_word[go]["all_post"] + "</div></a>\n";
      if (value.zip !== "") show_code += "<a class=\"a_url\" href=\"" + value.zip + "\"><div class=\"s_site_ko\">" + kanji_word[go]["zip"] + "</div></a>\n";
      if (value.mp4 !== "") show_code += "<a class=\"a_url\" href=\"" + value.mp4 + "\"><div class=\"s_site_ko\">" + kanji_word[go]["mp4"] + "</div></a>\n";
      if (value.psd !== "") show_code += "<a class=\"a_url\" href=\"" + value.psd + "\"><div class=\"s_site_ko\">" + kanji_word[go]["psd"] + "</div></a>\n";

      if (counter != totalItems) show_code += "\n";
      show_code += "</div>";
  });

  show_code += kanji_word[go]["discord_str"];
  show_code += "<hr>";
  show_code += kanji_word[go]["my_page_str"];
  return show_code;
}

function str_mysite(){
  var show_code = "<div class=\"my_page\">";
  Object.keys(my_page).forEach(function(key) {
      var value = my_page[key];
      show_code += "<a class=\"a_url\" href=\"" + value + "\"><div class=\"my_page_ko\">";
      show_code += key + "：" + value;
      show_code += "</div></a>\n";
  });
  show_code += "</div>";

  return show_code;
}
