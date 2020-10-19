let virusArray = [];

$(document).ready(function () {

    $.get("https://api.covid19api.com/summary", function (data) {
        virusArray = data;
        buildProductView(virusArray);
    });

    setTimeout(() => {
        document.querySelector(".toggle-pointer").append("↑ Click here to choose country");
    }, 3000);
});




function buildProductView(data) {
    document.querySelector(".fa-virus").classList.remove("loading");
    document.querySelector(".fa-virus").classList.add("after-loading");

    let array = data.Countries;

    let rateView = `<table class="table">`;

    rateView += `<thead class="thead-dark">
        <tr>
        <th scope="col">Countries</th>
        <th scope="col">Total Confirmed</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">Total Recovered</th>
            <th scope="col">Date</th>
            </tr>
        </thead>`;


    rateView += array.map((country) => {

        return `
            <tr>
            <td>${country.Country}</td>
            <td>${country.TotalConfirmed}</td>
            <td>${country.TotalDeaths}</td>
            <td>${country.TotalRecovered}</td>
            <td>${country.Date}</td>
            </tr>            
            `;

    }).join("");

    rateView += `</table>`

    $("#result").append(rateView);
    $(".footer").css("display", "block");
}



function searchFunction(array) {
    $("#result").empty();

    let rateView = `<table class="table">`;

    rateView += `<thead class="thead-dark">
        <tr>
        <th scope="col">Countries</th>
        <th scope="col">Total Confirmed</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">Total Recovered</th>
            <th scope="col">Date</th>
            </tr>
        </thead>`;


    rateView += array.map((country) => {

        return `            
            <tr>
            <td>${country.Country}</td>
            <td>${country.TotalConfirmed}</td>
            <td>${country.TotalDeaths}</td>
            <td>${country.TotalRecovered}</td>
            <td>${country.Date}</td>
            </tr>            
            `;

    }).join("");

    rateView += `</table>`

    $("#result").append(rateView);
}





$(".openbtn").click(function () {
    $(".absolute-pointer").css("opacity", "0");
});


/*
 * search function 
 */


$("#search-box").on("keyup", function () {
    let searchText = $(this).val();
    let allcountries = virusArray.Countries
    let searchProds = allcountries.filter((country) => {
        let searchArea = JSON.stringify(country).toLowerCase();
        let srch = searchText.toLowerCase();
        if (searchArea.includes(srch)) {
            return true;
        } else {
            return false;
        }
    });
    searchFunction(searchProds);
});



function alertt() {
    let input1, unput2, input3
    input1 = $("#inputIconEx2").val();
    input2 = $("#emailll").val();
    input3 = $("#phoneee").val();
    if (input1.length > 0 && input2.length > 0 && input3.length > 0) {
        alert("We Got Your Message We Will be There as soon as Possible")
    } else {
        alert("Please fill the gaps above");
    }
}



function getInnerHtml(e) {
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            $("#search-box").val($(this).html());
            let searchText = $(this).html();
            console.log(searchText)
            let allcountries = virusArray.Countries
            let searchProds = allcountries.filter((country) => {
                let searchArea = JSON.stringify(country).toLowerCase();
                let srch = searchText.toLowerCase();
                if (searchArea.includes(srch)) {
                    return true;
                } else {
                    return false;
                }
            });
            searchFunction(searchProds);
        })
    }

}


/*navbar*/


function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    $(".fa-virus").css({ "left": "33%", "transform": "rotate(360deg)" });
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $(".fa-virus").css({ "left": "17%", "transform": "rotate(0deg)" });
}