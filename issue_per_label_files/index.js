const EL_ = {
  CROS_URL: "https://cors-website.herokuapp.com/",
  SVG: {},
};

Load_Css();
function Load_Css() {
  let CSS_files = {
    0: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min",
    1: "./GLOBAL/CSS/common",
    2: "./GLOBAL/CSS/home",
  };
  for (c in CSS_files) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = CSS_files[c] + ".css";
    document.getElementsByTagName("HEAD")[0].appendChild(link);
  }

  let BROWESE_FTO = document.createElement("link");
  BROWESE_FTO.rel = "icon";
  BROWESE_FTO.type = "image/x-icon";
  BROWESE_FTO.href = "./GLOBAL/MEDIA/favicon.ico";
  document.getElementsByTagName("HEAD")[0].appendChild(BROWESE_FTO);

  LOAD_GLOBAL();
}
function LOAD_GLOBAL() {
  let CMP = {
    GLOBAL_SIDE_MENY: { id: "side_meny", file: "SIDE_MENY" },
    GLOBAL_ADDS: { id: "adds", file: "ADDS" },
    GLOBAL_FUTEROT: { id: "futerot", file: "FUTEROT" },
  };
  let CSS = ['<link rel="stylesheet" href="./GLOBAL/CMP/', '/c.css" />'];
  let JS = ['<script type="text/javascript" src="./GLOBAL/CMP/', '/j.js"></script>'];
  for (i in CMP) {
    EL_[i] = {};
    document.getElementById(i).innerHTML = "<" + CMP[i]["id"] + " />";
    $("#" + i).append(CSS[0] + CMP[i]["file"] + CSS[1]);
    $("#" + i).append(JS[0] + CMP[i]["file"] + JS[1]);
  }
  Load_CMP();
}
///
function Load_CMP() {
  let CMP = {
    SELECTED_TAG: { id: "selected_tag", file: "SELECTED_TAG" },
    FOUNDED_POST: { id: "founded_post", file: "FOUNDED_POST" },
  };
  let CSS = ['<link rel="stylesheet" href="./issue_per_label_files/CMP/', '/c.css" />'];
  let JS = ['<script type="text/javascript" src="./issue_per_label_files/CMP/', '/j.js"></script>'];
  for (i in CMP) {
    EL_[i] = {};
    document.getElementById(i).innerHTML = "<" + CMP[i]["id"] + " />";
    $("#" + i).append(CSS[0] + CMP[i]["file"] + CSS[1]);
    $("#" + i).append(JS[0] + CMP[i]["file"] + JS[1]);
  }

  $(function () {
    $(".main_content").css("opacity", "1");
    $(".main_content").css("transform", "translateY(0)");
  });

  Load_Dodatok();
}

function Load_Dodatok() {
  let O = {
    FILE: {
      0: "GLOBAL/JS/gitblog",
    },
    JS: {
      0: '<script type="text/javascript" src="./',
      1: '.js"></script>',
    },
  };
  for (j in O["FILE"]) {
    $("body").append(O["JS"][0] + O["FILE"][j] + O["JS"][1]);
  }
}

let Put_logo = setTimeout(() => {
  console.log(" ova bese === setInterval   ovXXX ne e da se stave i ova da cita od stadic url testirano.. mora prvo da se izbrisat site tie errore");
  if (EL_["SVG"]["united-store"] != undefined) {
    if (EL_["SIDEBAR"]["united_store_logo"].innerHTML != EL_["SVG"]["united-store"]) {
      EL_["SIDEBAR"]["united_store_logo"].innerHTML = EL_["SVG"]["united-store"];
    }
  }
  if (EL_["SVG"]["sphera"] != undefined) {
    if (EL_["SIDEBAR"]["store_logo"].innerHTML != EL_["SVG"]["sphera"]) {
      EL_["SIDEBAR"]["store_logo"].innerHTML = EL_["SVG"]["sphera"];
    }
  }

  if (EL_["SVG"]["united-store"] && EL_["SVG"]["sphera"]) {
    clearInterval(Put_logo);
  }
}, 333);
