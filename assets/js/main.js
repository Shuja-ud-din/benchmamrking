$(document).ready(function () {


  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // form submit validition

  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  // End form submit validition

  // custom select item

  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

  // End custom select item

  $("#new_register").click(function () {
    $("#singup").show();
    $("#singin").hide();
  });

  $("#instead_signin").click(function () {
    $("#singup").hide();
    $("#singin").show();
  });

  $("#forget").click(function () {
    $("#singin").hide();
    $("#forget_pass").show();
  });

  $(".back_icon").click(function () {
    $("#singin").show();
    $("#forget_pass").hide();
  });

  $("#terms").click(function () {
    $("#singup").hide();
    $("#tearms_condition").show();
  });

  $("#privacy").click(function () {
    $("#singup").hide();
    $("#privacy_policy").show();
  });

  $(".terms_back_icon").click(function () {
    $("#tearms_condition").hide();
    $("#privacy_policy").hide();
    $("#singup").show();
  });

  // dashboard hide show menu

  $(".hide-menu").click(function () {
    $("#sidebarMenu").addClass("intro");
    $("#main").addClass("intro");
  });

  $(".show-menu").click(function () {
    $("#sidebarMenu").removeClass("intro");
    $("#main").removeClass("intro");
  });

  // payment method active upgrade class

  $("#payment_upgrade").click(function () {
    $(".payment-box").addClass("intro");
  });

  $("#credit_card").click(function () {
    $(".intro .inter-card-info").slideToggle();
  });

  // End payment method active upgrade class

  // dashboard analysis item hide show

  $("#PolicalGroups").click(function () {
    $(".region_activity").hide();
    $("#section-groups-country").show();
  });

  $("#WorldRegion").click(function () {
    $(".region_activity").hide();
    $("#world-region-box").show();
  });


  // add country group dropdown 

  $("#add_country").click(function () {
    $(".option-filter-country-checkbox").slideToggle();
  });

  $("#show-continent-box").click(function () {
    $("#option-filter-wrg-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-wrg-checkbox").slideUp();
  });


  $("#show-division-box").click(function () {
    $("#option-filter-division-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-division-checkbox").slideUp();
  });

  // child co


  $("#show-childC-box").click(function () {
    $("#option-filter-childC-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-childC-checkbox").slideUp();
  });


  // End add country group dropdown

  $("#show-exchange-box").click(function () {
    $("#option-filter-exchange-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-exchange-checkbox").slideUp();
  });


  $("#add-sector-btn").click(function () {
    $("#option-filter-sector-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-sector-checkbox").slideUp();
  });


  $("#add-industryGroup-btn").click(function () {
    $("#option-filter-group-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-group-checkbox").slideUp();
  });


  $("#add-industry-btn").click(function () {
    $("#option-filter-industry-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-industry-checkbox").slideUp();
  });


  $("#add-subindustry-btn").click(function () {
    $("#option-filter-subIndustry-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-subIndustry-checkbox").slideUp();
  });


  $("#add2digits").click(function () {
    $("#option-filter-sicDigits1-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-sicDigits1-checkbox").slideUp();
  });


  $("#add3digits").click(function () {
    $("#option-filter-sicDigits2-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-sicDigits2-checkbox").slideUp();
  });

  $("#add4digits").click(function () {
    $("#option-filter-sicDigits3-checkbox").slideToggle();
  });

  $(".data-cross").click(function () {
    $("#option-filter-sicDigits3-checkbox").slideUp();
  });


});

// let ActiveCompanis = document.getElementById("ActiveCompanis")
// let DelistingCompanis = document.getElementById("DelistingCompanis")
// let BankruptCompanis = document.getElementById("BankruptCompanis")
// let SuspendCompanis = document.getElementById("SuspendCompanis")


function showHide(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("show-continent-box").style.display = "none"
    document.getElementById("added-continent-box").style.display = "inline"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
    document.getElementById("show-country-box").style.display = "flex"
    document.getElementById("add_country").style.display = "none"
    document.getElementById("option-filter-country-checkbox").style.display = "none"
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};


function showHideCont(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("show-continent-box").style.display = "none"
    document.getElementById("added-continent-box").style.display = "inline"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
    document.getElementById("option-filter-wrg-checkbox").style.display = "none"
    document.getElementById("option-filter-country-checkbox").style.display = "none"
    document.getElementById("disabled").style.display = "none"
    document.getElementById("show-division-box").style.display = "contents"
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

function showHideDivison(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-division-checkbox").style.display = "none"
    document.getElementById("show-division-box").style.display = "none"
    document.getElementById("added-div-box").style.display = "inline"
    document.getElementById("eighthRow")
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

function showHideChild(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-division-checkbox").style.display = "none"
    document.getElementById("show-division-box").style.display = "none"
    document.getElementById("added-div-box").style.display = "inline"
    document.getElementById("option-filter-childC-checkbox").style.display = "none"
    document.getElementById("region-subCatagory").innerHTML = "Country"
    document.getElementById("eighthRow").style.display = "none"
    document.getElementById("show-childC-box").style.display = "none"
    document.getElementById("added-childC-box").style.display = "inline"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

function showHideStock(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-exchange-checkbox").style.display = "none"
    document.getElementById("show-exchange-box").style.display = "none"
    document.getElementById("added-exchange-box").style.display = "inline"
    document.getElementById("show-data-7").innerHTML = "Stock Exchange"
    document.getElementById("region-subCatagory").innerHTML = "Stock Exchange"
    document.getElementById("eighthRow").style.display = "none"
    // document.getElementById("show-exchange-box").style.display = "none"
    // document.getElementById("added-exchange-box").style.display = "inline"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

// let showContCat = () => {
//   document.getElementById("region-subCatagory2").innerHTML = "ld Region"
// }

let showSubCat = () => {
  document.getElementById("region-subCatagory").innerHTML = "World Region / Continent"
}
let showCatdivision = () => {
  document.getElementById("region-subCatagory2").innerHTML = "Division"
}
let showCatGOC = () => {
  document.getElementById("region-subCatagory").innerHTML = "Poliacal Group of Country"
}


let deleteCountry = (id) => {
  document.getElementById(id).style.display = "none"
  document.getElementById("add_country").style.display = "block"
  document.getElementById("country1").innerHTML = ""
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

let deleteContinent = (id) => {
  document.getElementById(id).style.display = "none"
  document.getElementById("added-div-box").style.display = "none"
  document.getElementById("eighthRow").style.display = "none"
  document.getElementById("show-continent-box").style.display = "inline"
  document.getElementById("country1").innerHTML = ""
  document.getElementById("show-division-box").style.display = "none"
  document.getElementById("disabled").style.display = "inline"
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

let deleteDivision = (id) => {
  document.getElementById(id).style.display = "none"
  document.getElementById("show-division-box").style.display = "contents"
  document.getElementById("print_division").innerHTML = ""
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

let deleteChildC = (id) => {
  document.getElementById(id).style.display = "none"
  document.getElementById("show-childC-box").style.display = "inline"
  document.getElementById("country1").innerHTML = ""
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}
let deleteStock = (id) => {
  document.getElementById(id).style.display = "none"
  document.getElementById("show-exchange-box").style.display = "inline"
  document.getElementById("country1").innerHTML = ""
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}


let hideothers = () => {
  document.getElementById("section-groups-country").style.display = "none"
  document.getElementById("region_activity").style.display = "block"
  document.getElementById("world-region-box").style.display = "none"
  document.getElementById("child-country-box").style.display = "none"
  document.getElementById("child-exchange-box").style.display = "none"
  // document.getElementById("seventhRow").style.display = "none"
  document.getElementById("show-data-7").innerHTML = "";
  document.getElementById("show-data-8").innerHTML = "";
}

let worldRegion = () => {
  document.getElementById("show-data-7").innerHTML = ": World Region"
  document.getElementById("world-region-box").style.display = "flex"
  document.getElementById("region_activity").style.display = "none"
  document.getElementById("region-catageory").innerHTML = "World Region"
}

let showWorldFilter = () => {
  document.getElementById("option-filter-country-checkbox").style.display = "block"
}

// function PublicCompanis() {
//   var x = document.getElementById("PublicCompanis").value;
//   document.getElementById("show-data-5").innerHTML = x;
// }

function PrivateCompanis() {
  var x = document.getElementById("PrivateCompanis").value;
  document.getElementById("show-data-6").innerHTML = x;
}

let childCountry = () => {
  document.getElementById("region_activity").style.display = "none"
  document.getElementById("child-country-box").style.display = "block"
  document.getElementById("show-data-7").innerHTML = ": Counntry"

}

function PolicalGroups() {
  var x = document.getElementById("PolicalGroups").value;
  document.getElementById("region-subCatagory").innerHTML = ""
  document.getElementById("country1").innerHTML = ""
  document.getElementById("eighthRow").style.display = "none"
  document.getElementById("show-data-7").innerHTML = x;
  document.getElementById("region-catageory").innerHTML = "Political Group of Country"
  document.getElementById("seventhRow").style.display = "flex"
  document.getElementById("region-subCatagory").innerHTML = "Polical Gropup of Country"
}

function WorldRegion() {
  var x = document.getElementById("WorldRegion").value;
  document.getElementById("show-data-8").innerHTML = x;
  document.getElementById("seventhRow").style.display = "flex"
  document.getElementById("region-catageory").innerHTML = "World Region"
}

let StockExchange = () => {
  document.getElementById("region_activity").style.display = "none"
  document.getElementById("child-exchange-box").style.display = "block"
  document.getElementById("show-data-7").innerHTML = ": Stock Exchange"
}


// classification tab



let showClassDrop = () => {
  document.getElementById("sic-codes").style.display = "none"
  document.getElementById("NAISIcodes").style.display = "none"
  document.getElementById("gics-section").style.display = "none"
  document.getElementById("aboveNaisic").style.display = "block"
  document.getElementById("classify-rowcontainer").style.display = "block"
  document.getElementById("classification-catageory").innerHTML = ""
  document.getElementById("classification-innercatageory").innerHTML = ""
}
let showCodes = (close, dropC) => {
  document.getElementById(close).classList.toggle("rotateClose")
  document.getElementById(dropC).classList.toggle("showCodesCon")
  document.getElementById("ninthRow").style.display = "flex"
  document.getElementById("classify-subCatagory").innerHTML = " Codes"
}
let showCodeSIC = (close, dropC) => {
  document.getElementById(close).classList.toggle("rotateClose")
  document.getElementById(dropC).classList.toggle("showCodesic")
  document.getElementById("classification-catageory").innerHTML = ": Standard Industrial Classification (SIC) Codes"
  document.getElementById("noOfDigits").innerHTML = "/ (SIC) Codes"
}
let showNAISIC = () => {
  document.getElementById("aboveNaisic").style.display = "none"
  document.getElementById("NAISIcodes").style.display = "block"
  document.getElementById("classification-catageory").innerHTML = ": North American Industry Classification (SIC) Codes"
}

// modal tab switch

let showTab2 = () => {
  document.getElementById("popUp-tab1").style.transform = "translateX(-1500px)"
  document.getElementById("popUp-tab2").style.transform = "translateX(0px)"
  document.getElementById("newAnalysis").classList.remove("active")
  document.getElementById("loadAnalysis").classList.add("active")
}

let showTab1 = () => {
  document.getElementById("popUp-tab2").style.transform = "translateX(1500px)"
  document.getElementById("popUp-tab1").style.transform = "translateX(0px)"
  document.getElementById("newAnalysis").classList.add("active")
  document.getElementById("loadAnalysis").classList.remove("active")
}

// tabs data
// const checkbox = document.getElementById('ActiveCompanis');

// const box = document.getElementById('firstRow');

// checkbox.addEventListener('click', function handleClick() {
//   if (checkbox.checked) {
//     box.style.display = 'block';
//   } else {
//     box.style.display = 'none';
//   }
// });

// j query



// GICS CODES

let Showgics = () => {
  document.getElementById("gics-section").style.display = "flex"
  document.getElementById("classify-rowcontainer").style.display = "none"
  document.getElementById("classification-catageory").innerHTML = ": Gobal Industry Classification Standard (GICS)"
}

function showHideSector(clickBox, dataBox, showData, country, digits) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
    document.getElementById("option-filter-sector-checkbox").style.display = "none"
    document.getElementById("classify-subCatagory").innerHTML = "GICS Codes"
    document.getElementById("add-industry-group").style.display = "block"
    document.getElementById("add-industryGroup-btn").style.display = "inline"
    document.getElementById("industrygroup-status").style.display = "none"
    document.getElementById("added-industryGroup-box").style.display = "none"
    document.getElementById("added-sector-box").style.display = "inline"
    document.getElementById("add-sector-btn").style.display = "none"
    document.getElementById("noOfDigits").innerHTML = `/ ${digits}`
    document.getElementById("industry-status").innerHTML = "Select Industry Group First"
    document.getElementById("sub-industry-status").innerHTML = "Select Industry Group First"
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};


let deleteGIS = (id) => {
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  document.getElementById(id).style.display = "none"
  document.getElementById("add-industry-group").style.display = "none"
  document.getElementById("industrygroup-status").style.display = "inline"
  document.getElementById("add-sector-btn").style.display = "inline"
  document.getElementById("industry-status").innerHTML = "Select Sector First"
  document.getElementById("sub-industry-status").innerHTML = "Select Sector First"
  document.getElementById("add-industryGroup-btn").style.display = "block"
  document.getElementById("industry-status").style.display = "inline"
  document.getElementById("add-industry").style.display = "none"
  document.getElementById("added-subindustry-box").style.display = "none"
  document.getElementById("tenthRow").style.display = "none"
  document.getElementById("eleventhRow").style.display = "none"
  document.getElementById("twelfthRow").style.display = "none"
  document.getElementById("add-sub-industry").style.display = "none"
  document.getElementById("sub-industry-status").style.display = "inline"
  document.getElementById("noOfDigits").innerHTML = ""
  document.getElementById("sector1").innerHTML = ""
}


function showHideGroup(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-group-checkbox").style.display = "none"
    document.getElementById("add-industryGroup-btn").style.display = "none"
    document.getElementById("added-industryGroup-box").style.display = "inline"
    document.getElementById("add-industry-btn").style.display = "inline"
    document.getElementById("added-industry-box").style.display = "none"
    document.getElementById("industry-status").style.display = "none"
    document.getElementById("add-industry").style.display = "block"
    document.getElementById("noOfDigits").innerHTML = `/ Sector`
    document.getElementById("sub-industry-status").innerHTML = "Select Industry First"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

let deleteIndustryGroup = () => {
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  document.getElementById("added-industryGroup-box").style.display = "none"
  document.getElementById("add-industryGroup-btn").style.display = "inline"
  document.getElementById("added-industry-box").style.display = "inline"
  document.getElementById("add-industry-btn").style.display = "none"
  document.getElementById("tenthRow").style.display = "none"
  document.getElementById("industry-status").style.display = "inline"
  document.getElementById("add-industry").style.display = "none"
  document.getElementById("add-subindustry-btn").style.display = "none"
  document.getElementById("added-subindustry-box").style.display = "none"
  document.getElementById("sub-industry-status").style.display = "inline"
  document.getElementById("eleventhRow").style.display = "none"
  document.getElementById("twelfthRow").style.display = "none"
}

function showHideIndustry(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-industry-checkbox").style.display = "none"
    document.getElementById("add-industry-btn").style.display = "none"
    document.getElementById("added-industry-box").style.display = "inline"
    document.getElementById("industry-status").style.display = "none"
    document.getElementById("add-sub-industry").style.display = "block"
    document.getElementById("add-subindustry-btn").style.display = "block"
    document.getElementById("sub-industry-status").style.display = "none"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

let deleteIndustry1 = () => {
  document.getElementById("added-industry-box").style.display = "none"
  document.getElementById("added-subindustry-box").style.display = "none"
  document.getElementById("sub-industry-status").style.display = "inline"
  document.getElementById("add-industry-btn").style.display = "inline"
  document.getElementById("eleventhRow").style.display = "none"
  document.getElementById("twelfthRow").style.display = "none"
  document.getElementById("add-sub-industry").style.display = "none"
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

function showHideSubIndustry(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-subIndustry-checkbox").style.display = "none"
    document.getElementById("add-subindustry-btn").style.display = "none"
    document.getElementById("added-subindustry-box").style.display = "inline"
    document.getElementById("industry-status").style.display = "none"
    document.getElementById("add-sub-industry").style.display = "block"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

let deleteSubIndustry = () => {
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  document.getElementById("added-subindustry-box").style.display = "none"
  document.getElementById("add-subindustry-btn").style.display = "inline"
  document.getElementById("twelfththRow").style.display = "none"
  document.getElementById("sub-industry-status").style.display = "inline"
  document.getElementById("add-sub-industry").style.display = "none"
}


// /////// ------------------------_______________________________---------------------------------
// /////// ------------------------_______________________________---------------------------------

const goSicCodes = () => {
  document.getElementById("classification-innercatageory").innerHTML = "/ B- Mining"
  document.getElementById("sic-codes").style.display = "block"
  document.getElementById("classify-rowcontainer").style.display = "none"
  document.getElementById("ninthRow").style.display = "flex"
  document.getElementById("sector1").innerHTML = "/ B - Mining"
}


function showHideSICdig1(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-sicDigits1-checkbox").style.display = "none"
    document.getElementById("add2digits").style.display = "none"
    document.getElementById("default-disabled-digits2").innerHTML = "Select 3 Digit First"
    document.getElementById("added-digit2-box").style.display = "block"
    document.getElementById("default-disabled-digits1").style.display = "none"
    document.getElementById("add3digits").style.display = "inline"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

let open2Digitsbox = () => {

}

let deleteDigit2 = (value, addValue) => {
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  document.getElementById(value).style.display = "none"
  document.getElementById("default-disabled-digits1").style.display = "block"
  document.getElementById("add3digits").style.display = "none"
  document.getElementById(addValue).style.display = "inline"
  document.getElementById("added-digit3-box").style.display = "none"
  document.getElementById("default-disabled-digits2").style.display = "block"
  document.getElementById("default-disabled-digits2").innerHTML = "Select 2 Digit First"
  document.getElementById("add4digits").style.display = "none"
  document.getElementById("added-digit4-box").style.display = "none"
  document.getElementById("thirteenthRow").style.display = "none"
  document.getElementById("fourteenthRow").style.display = "none"
  document.getElementById("fifteenthRow").style.display = "none"
}


function showHideSICdig2(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById("option-filter-sicDigits2-checkbox").style.display = "none"
    document.getElementById("add4digits").style.display = "block"
    document.getElementById("added-digit3-box").style.display = "block"
    document.getElementById("default-disabled-digits2").style.display = "none"
    document.getElementById("add3digits").style.display = "none"
    document.getElementById("add4digits").style.display = "block"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};


let deleteDigit3 = (value, addValue) => {
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  document.getElementById(value).style.display = "none"
  document.getElementById("default-disabled-digits2").style.display = "block"
  document.getElementById("add4digits").style.display = "none"
  document.getElementById(addValue).style.display = "inline"
  document.getElementById("default-disabled-digits2").innerHTML = "Select 3 Digit First"
  document.getElementById("fourteenthRow").style.display = "none"
  document.getElementById("fifteenthRow").style.display = "none"
  document.getElementById("added-digit4-box").style.display = "none"
}




function showHideSICdig3(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    document.getElementById("add4digits").style.display = "none"
    box.style.display = 'flex';
    document.getElementById("default-disabled-digits2").style.display = "none"
    document.getElementById("added-digit4-box").style.display = "block"
    document.getElementById("option-filter-sicDigits3-checkbox").style.display = "none"
    document.getElementById("default-disabled-digits2").style.display = "none"
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};


let deleteDigit4 = (value, addValue) => {
  var inputs = document.querySelectorAll('.countryCheck');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  document.getElementById(value).style.display = "none"
  document.getElementById(addValue).style.display = "inline"
  document.getElementById("fifteenthRow").style.display = "none"
}

let switchtoTab2 = () => {
  showTab2();
}

// analysis Adjustment__________________------------------------------------------------------------------------------------------------------------------ ___________________________________--------------------------------------------________________________________________________________----------------------_______________________________________________________________________________________________________________________________________________________




// check class



const section1 = document.getElementById("default-fTab")
const section2 = document.getElementById("dataSourceAnalysis")
const section3 = document.getElementById("analysisAdustment")
const section4 = document.getElementById("manualacceptance")
const section5 = document.getElementById("transferpricingPLIs")
const section6 = document.getElementById("analysis-report")

let checker;

let checkClass = () => {
  if (section1.classList.contains('active')) {
    checker = 1;
  }
  if (section2.classList.contains('active')) {
    checker = 2;
  }
  if (section3.classList.contains('active')) {
    checker = 3;
  }
  if (section4.classList.contains('active')) {
    checker = 4;
  }
  if (section5.classList.contains('active')) {
    checker = 5;
  }
  if (section6.classList.contains('active')) {
    checker = 6;
  }
  console.log(checker)
}

let gotoNext = () => {
  checkClass();
  if (checker === 1) {
    switchDSA();
  }
  if (checker === 2) {
    switchAD();
  }
  if (checker === 3) {
    switchMAR();
  }
  if (checker === 4) {
    switchTPPs();
  }
  if (checker === 5) {
    switchAR();
  }
}

let gotoPrev = () => {
  checkClass();
  if (checker === 2) {
    switchFirst();
  }
  if (checker === 3) {
    switchDSA();
  }
  if (checker === 4) {
    switchAD();
  }
  if (checker === 5) {
    switchMAR();
  }
  if (checker === 6) {
    switchTPPs();
  }
}

checkClass();
let switchFirst = () => {
  document.getElementById("default-fTab").classList.add("active")
  document.getElementById("dataSourceAnalysis").classList.remove("active")
  document.getElementById("analysisAdustment").classList.remove("active")
  document.getElementById("manualacceptance").classList.remove("active")
  document.getElementById("transferpricingPLIs").classList.remove("active")
  document.getElementById("analysis-report").classList.remove("active")
  document.getElementById("default-first-page").style.display = "block"
  document.getElementById("manaul-acceptence").style.display = "none"
  document.getElementById("transferPLIs").style.display = "none"
  document.getElementById("analysisReportBox").style.display = "none"
  document.getElementById("analysis-adjustment-1").style.display = "none"
  document.getElementById("analysis-adjustment-2").style.display = "none"
  document.getElementById("data-Source-1").style.display = "none"
  document.getElementById("data-Source-2").style.display = "none"
  document.getElementById("tab1-2bottom").style.display = "none"
}

let switchDSA = () => {

  document.getElementById("dataSourceAnalysis").classList.add("active")
  document.getElementById("analysisAdustment").classList.remove("active")
  document.getElementById("manualacceptance").classList.remove("active")
  document.getElementById("transferpricingPLIs").classList.remove("active")
  document.getElementById("analysis-report").classList.remove("active")
  document.getElementById("default-fTab").classList.remove("active")
  document.getElementById("default-first-page").style.display = "none"
  document.getElementById("analysis-adjustment-1").style.display = "none"
  document.getElementById("analysis-adjustment-2").style.display = "none"
  document.getElementById("data-Source-1").style.display = "block"
  document.getElementById("data-Source-2").style.display = "block"
  document.getElementById("tab1-2bottom").style.display = "block"
  document.getElementById("manaul-acceptence").style.display = "none"
  document.getElementById("transferPLIs").style.display = "none"
  document.getElementById("analysisReportBox").style.display = "none"
}

let switchAD = () => {
  document.getElementById("dataSourceAnalysis").classList.remove("active")
  document.getElementById("analysisAdustment").classList.add("active")
  document.getElementById("manualacceptance").classList.remove("active")
  document.getElementById("transferpricingPLIs").classList.remove("active")
  document.getElementById("analysis-report").classList.remove("active")
  document.getElementById("default-fTab").classList.remove("active")
  document.getElementById("data-Source-1").style.display = "none"
  document.getElementById("data-Source-2").style.display = "none"
  document.getElementById("analysis-adjustment-1").style.display = "block"
  document.getElementById("analysis-adjustment-2").style.display = "block"
  document.getElementById("tab1-2bottom").style.display = "block"
  document.getElementById("manaul-acceptence").style.display = "none"
  document.getElementById("transferPLIs").style.display = "none"
  document.getElementById("analysisReportBox").style.display = "none"
  document.getElementById("default-first-page").style.display = "none"
}

let switchMAR = () => {
  document.getElementById("manualacceptance").classList.add("active")
  document.getElementById("analysisAdustment").classList.remove("active")
  document.getElementById("dataSourceAnalysis").classList.remove("active")
  document.getElementById("transferpricingPLIs").classList.remove("active")
  document.getElementById("analysis-report").classList.remove("active")
  document.getElementById("default-fTab").classList.remove("active")
  document.getElementById("analysis-adjustment-1").style.display = "none"
  document.getElementById("analysis-adjustment-2").style.display = "none"
  document.getElementById("data-Source-1").style.display = "none"
  document.getElementById("data-Source-2").style.display = "none"
  document.getElementById("tab1-2bottom").style.display = "none"
  document.getElementById("manaul-acceptence").style.display = "flex"
  document.getElementById("transferPLIs").style.display = "none"
  document.getElementById("analysisReportBox").style.display = "none"
  document.getElementById("default-first-page").style.display = "none"
}
let switchTPPs = () => {
  document.getElementById("transferpricingPLIs").classList.add("active")
  document.getElementById("manualacceptance").classList.remove("active")
  document.getElementById("analysisAdustment").classList.remove("active")
  document.getElementById("dataSourceAnalysis").classList.remove("active")
  document.getElementById("analysis-report").classList.remove("active")
  document.getElementById("default-fTab").classList.remove("active")
  document.getElementById("analysis-adjustment-1").style.display = "none"
  document.getElementById("analysis-adjustment-2").style.display = "none"
  document.getElementById("data-Source-1").style.display = "none"
  document.getElementById("data-Source-2").style.display = "none"
  document.getElementById("tab1-2bottom").style.display = "none"
  document.getElementById("manaul-acceptence").style.display = "none"
  document.getElementById("transferPLIs").style.display = "block"
  document.getElementById("analysisReportBox").style.display = "none"
  document.getElementById("default-first-page").style.display = "none"
}
let switchAR = () => {
  document.getElementById("analysis-report").classList.add("active")
  document.getElementById("transferpricingPLIs").classList.remove("active")
  document.getElementById("manualacceptance").classList.remove("active")
  document.getElementById("analysisAdustment").classList.remove("active")
  document.getElementById("dataSourceAnalysis").classList.remove("active")
  document.getElementById("default-fTab").classList.remove("active")
  document.getElementById("analysis-adjustment-1").style.display = "none"
  document.getElementById("analysis-adjustment-2").style.display = "none"
  document.getElementById("data-Source-1").style.display = "none"
  document.getElementById("data-Source-2").style.display = "none"
  document.getElementById("tab1-2bottom").style.display = "none"
  document.getElementById("manaul-acceptence").style.display = "none"
  document.getElementById("transferPLIs").style.display = "none"
  document.getElementById("default-first-page").style.display = "none"
  document.getElementById("analysisReportBox").style.display = "flex"
}


function showHideYear(clickBox, dataBox, showData, country) {
  const checkbox = document.getElementById(clickBox);
  const box = document.getElementById(dataBox);

  var x = document.getElementById(clickBox).value;


  if (checkbox.checked) {
    box.style.display = 'flex';
    document.getElementById(showData).innerHTML = x;
    document.getElementById(country).innerHTML = x;
  }
  else {
    box.style.display = 'none';
    document.getElementById(showData).innerHTML = "";
    document.getElementById(country).innerHTML = "";
    document.getElementById(country).innerHTML = "";
  }
};

let showRasset = (element) => {
  document.getElementById(element).style.display = "block"
}

let checkvalue = (el, selector) => {
  if (document.getElementById(selector).value === "4") {
    document.getElementById(el).style.display = "block"
  }
  else {
    document.getElementById(el).style.display = "none"
  }
}

function deleteindicator(el) {
  document.getElementById(el).style.display = "none"
}


function showIndicator(id, check) {
  const checkbox = document.getElementById(id);

  if (checkbox.checked) {
    document.getElementById(check).style.display = "flex"
  }
  else {
    document.getElementById(check).style.display = "none"
  }
};


// inner tab switching


const tab1 = document.getElementById("inner-t2tab1")
const tab2 = document.getElementById("inner-t2tab2")
const tab3 = document.getElementById("inner-t2tab3")
const tab4 = document.getElementById("inner-t2tab4")
const tab5 = document.getElementById("inner-t2tab5")
const tab6 = document.getElementById("authorComitties")
const tab7 = document.getElementById("subsudries")

let gotoTab1 = () => {
  tab1.style.display = "block"
  tab2.style.display = "none"
  tab3.style.display = "none"
  tab4.style.display = "none"
  tab5.style.display = "none"
  tab6.style.display = "none"
  tab7.style.display = "none"

  // classlist add remove

  document.getElementById("tab2Schild1").classList.add("inner-tab-active")
  document.getElementById("tab2Schild2").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild3").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild4").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild5").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild6").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild7").classList.remove("inner-tab-active")


}

let gotoTab2 = () => {
  tab1.style.display = "none"
  tab2.style.display = "block"
  tab3.style.display = "none"
  tab4.style.display = "none"
  tab5.style.display = "none"
  tab6.style.display = "none"
  tab7.style.display = "none"

  // classlist add remove

  document.getElementById("tab2Schild1").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild2").classList.add("inner-tab-active")
  document.getElementById("tab2Schild3").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild4").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild5").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild6").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild7").classList.remove("inner-tab-active")
}

let gotoTab3 = () => {
  tab1.style.display = "none"
  tab2.style.display = "none"
  tab3.style.display = "flex"
  tab4.style.display = "none"
  tab5.style.display = "none"
  tab6.style.display = "none"
  tab7.style.display = "none"

  // classlist add remove

  document.getElementById("tab2Schild1").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild2").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild3").classList.add("inner-tab-active")
  document.getElementById("tab2Schild4").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild5").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild6").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild7").classList.remove("inner-tab-active")
}

let gotoTab4 = () => {
  tab1.style.display = "none"
  tab2.style.display = "none"
  tab3.style.display = "none"
  tab4.style.display = "grid"
  tab5.style.display = "none"
  tab6.style.display = "none"
  tab7.style.display = "none"

  // classlist add remove

  document.getElementById("tab2Schild1").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild2").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild3").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild4").classList.add("inner-tab-active")
  document.getElementById("tab2Schild5").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild6").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild7").classList.remove("inner-tab-active")
}

let gotoTab5 = () => {
  tab1.style.display = "none"
  tab2.style.display = "none"
  tab3.style.display = "none"
  tab4.style.display = "none"
  tab5.style.display = "block"
  tab6.style.display = "none"
  tab7.style.display = "none"

  // classlist add remove

  document.getElementById("tab2Schild1").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild2").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild3").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild4").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild5").classList.add("inner-tab-active")
  document.getElementById("tab2Schild6").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild7").classList.remove("inner-tab-active")
}

let gotoTab6 = () => {
  tab1.style.display = "none"
  tab2.style.display = "none"
  tab3.style.display = "none"
  tab4.style.display = "none"
  tab5.style.display = "none"
  tab6.style.display = "block"
  tab7.style.display = "none"

  // classlist add remove

  document.getElementById("tab2Schild1").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild2").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild3").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild4").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild5").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild6").classList.add("inner-tab-active")
  document.getElementById("tab2Schild7").classList.remove("inner-tab-active")
}

let gotoTab7 = () => {
  tab1.style.display = "none"
  tab2.style.display = "none"
  tab3.style.display = "none"
  tab4.style.display = "none"
  tab5.style.display = "none"
  tab6.style.display = "none"
  tab7.style.display = "grid"

  // classlist add remove

  document.getElementById("tab2Schild1").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild2").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild3").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild4").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild5").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild6").classList.remove("inner-tab-active")
  document.getElementById("tab2Schild7").classList.add("inner-tab-active")
}

// year range average

let showYearRange = () => {
  const box = document.getElementById("average-indicator")

  if (box.checked) {
    document.getElementById("select-year-box").style.display = "none"
    document.getElementById("YearRange").style.display = "block"
  }
  else {
    document.getElementById("select-year-box").style.display = "block"
    document.getElementById("YearRange").style.display = "none"
  }
}



let showNew = () => {
  document.getElementById("new-analysis").classList.add("activeFirst")
  document.getElementById("load-analysis").classList.remove("activeFirst")
  document.getElementById("load-analysis").classList.add("inactiveFirst")
  document.getElementById("new-analysis").classList.remove("inactiveFirst")
  document.getElementById("popUp-tab1").style.display = "block"
  document.getElementById("popUp-tab2").style.display = "none"
}
let showload = () => {
  document.getElementById("load-analysis").classList.add("activeFirst")
  document.getElementById("load-analysis").classList.remove("inactiveFirst")
  document.getElementById("new-analysis").classList.add("inactiveFirst")
  document.getElementById("new-analysis").classList.remove("activeFirst")
  document.getElementById("popUp-tab1").style.display = "none"
  document.getElementById("popUp-tab2").style.display = "block"
}


// add note

let showAddNote = () => {
  document.getElementById("add-note-box").style.display = "flex"
}
let hideAddNote = () => {
  document.getElementById("add-note-box").style.display = "none"
}

let gotoIncomeState = () => {
  if (document.getElementById('sheetExpressor').value === "0") {
    document.getElementById("balancesheetBox").style.display = "block"
    document.getElementById("incomestatementBox").style.display = "none"
    document.getElementById("cashFlowBox").style.display = "none"
    document.getElementById("keyFinancialsBox").style.display = "none"
    document.getElementById("addRemoveRows").innerHTML = ""
  }
  if (document.getElementById('sheetExpressor').value === "1") {
    document.getElementById("balancesheetBox").style.display = "none"
    document.getElementById("incomestatementBox").style.display = "block"
    document.getElementById("cashFlowBox").style.display = "none"
    document.getElementById("keyFinancialsBox").style.display = "none"
    document.getElementById("addRemoveRows").innerHTML = ""
  }
  if (document.getElementById('sheetExpressor').value === "2") {
    document.getElementById("incomestatementBox").style.display = "none"
    document.getElementById("balancesheetBox").style.display = "none"
    document.getElementById("cashFlowBox").style.display = "block"
    document.getElementById("keyFinancialsBox").style.display = "none"
    document.getElementById("addRemoveRows").innerHTML = ""
  }
  if (document.getElementById('sheetExpressor').value === "3") {
    document.getElementById("incomestatementBox").style.display = "none"
    document.getElementById("balancesheetBox").style.display = "none"
    document.getElementById("cashFlowBox").style.display = "none"
    document.getElementById("keyFinancialsBox").style.display = "block"
    document.getElementById("addRemoveRows").innerHTML = "<p  data-bs-toggle='modal' data-bs-target='#exampleModalLoad1'>Add/Remove Row</p>"
  }
}

let changeAmountType = () => {
  let currencyType;
  if (document.getElementById("amountExpressor").value === "0") {
    currencyType = "Full Amount USD"
    $(".thousandDig").show();
    $(".millionDig").show();
  }
  if (document.getElementById("amountExpressor").value === "1") {
    currencyType = "Thousand USD"
    $(".thousandDig").hide();
    $(".millionDig").show();
  }
  if (document.getElementById("amountExpressor").value === "2") {
    currencyType = "Million USD"
    $(".thousandDig").hide();
    $(".millionDig").hide();
  }

  document.getElementById("amount-type1").innerHTML = currencyType
  document.getElementById("amount-type2").innerHTML = currencyType
  document.getElementById("amount-type3").innerHTML = currencyType
  document.getElementById("amount-type4").innerHTML = currencyType
  document.getElementById("amount-type5").innerHTML = currencyType
}

let showquartiles = () => {
  document.querySelector('.inner-secondPLI').style.display = "flex"
}
