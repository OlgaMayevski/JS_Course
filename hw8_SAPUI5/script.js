function Airport(IcaoCode, Name, IataCode) {
    this.IcaoCode = IcaoCode;
    this.Name = Name;
    this.IataCode = IataCode;
}

function createObjectsArray(data) {
    var airportsArray = [];
    $.each(data.value, function (key, data) {
        var airport = new Airport(data.IcaoCode, data.Name, data.IataCode);
        airportsArray.push(airport);
    })
    return airportsArray;
}


function showData(airportsArray) {
    var table = '<tr><th>Icao Code</th>' +
        '<th>Name</th>' +
        '<th>Iata Code</th>';
    for (i = 0; i < airportsArray.length; i++) {
        table += '<tr><td>' + airportsArray[i].IcaoCode +
            '</td><td>' + airportsArray[i].Name +
            '</td><td>' + airportsArray[i].IataCode +'</td></tr>';
    }
    $('#main_data').append(table);
}

function clearTable() {
    document.getElementById("main_data").innerHTML = "";
}


$('#search').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});


$('#select').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports?$select=IataCode",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$('#count').on('click', function () {
    
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports/$count",
        success: function (data) {
            var count = '<tr><th colspan=5>'+'Count: '+data+'</th></tr>';
            $('#main_data').append(count);
            
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});


$('#filter').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/TripPinServiceRW/Airports?$filter=startswith(Name, 'L')",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});


$('#skip').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports?$skip=10",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$('#top').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports?$top=5",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$('#order-by').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports?$orderby=Name",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$('#3filters').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports?$filter=startswith(Name,'S') and startswith(IcaoCode,'K') or  startswith(IcaoCode,'L')",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$('#3string').on('click', function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airports?$filter=startswith(Name,'S')&$top=3&$skip=1",
        success: function (data) {
            clearTable();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});