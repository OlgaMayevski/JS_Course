// for  airlines
// only 2 fields : AirlineCode, Name

function funcAirline(airlinecode, name) {
  this.airlinecode = airlinecode;
  this.name = name; 
}

function createObjectsArray(data){
    var airlinesArray = [];                    
        $.each(data.value, function (key, data) {
            var airline = new funcAirline(data.AirlineCode, data.Name);
            airlinesArray.push(airline);
            })
    return airlinesArray;
}


function showData(airlineArray){
    var my_table_HTML = '<tr><th>----Code----</th><th>----Name----</th></tr>';
         for (i = 0; i < airlineArray.length; i++) {
            my_table_HTML += '<tr><td>&nbsp;&nbsp; &nbsp; &nbsp;' + airlineArray[i].airlinecode + '</td><td>&nbsp;&nbsp; &nbsp; &nbsp;' + airlineArray[i].name + '</td></tr>';
            } 
            $('#my_table').append(my_table_HTML);
    }

function basicConfig(){
      document.getElementById("my_table").style.display = "block";
      document.getElementById("my_table").innerHTML = "";
}

    
    //GET by Search oData Filtering
$('#search').on('click', function() {
 $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines?$search=Airlines",
    success: function (data) {
        basicConfig();
        showData(createObjectsArray(data));
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
});

   //GET by Select oData Filtering
 $('#select').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines?$select=AirlineCode",
    success: function (data) {  
        basicConfig();
        showData(createObjectsArray(data));
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
 });

    //GET by Count oData 
$('#count').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines/$count",
    success: function (data) { 
        alert("Amount of Airlines $count: " + data);
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
 });

    //GET by Filter oData // 
$('#filter').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/TripPinServiceRW/Airlines?$filter=contains(AirlineCode, 'OS')",
    success: function (data) {
        basicConfig();
        showData(createObjectsArray(data));
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
});

    //GET by Filter Nested in Expand oData // нужен массив в элементе массива
    $('#expand').on('click', function() {
        $.ajax({
          type: "get",
          async: true,
          url: "https://services.odata.org/V4/TripPinServiceRW/Airlines?$expand=AirlineCode($filter=Name eq 'Hong Kong Airlines')",
          success: function (data) {
              basicConfig();
              showData(createObjectsArray(data));
          },
          error: function (xhr, textStatus, errorMessage) {
              alert(errorMessage);
          }
      });
      });
      




    //GET using Skip OData
$('#skip').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines?$skip=10",
    success: function (data) {
        basicConfig();
        showData(createObjectsArray(data));
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
});

    //GET using Top OData
$('#top').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines?$top=3",
    success: function (data) {
        basicConfig();
        showData(createObjectsArray(data));
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
});

    //GET Order by Filtering OData
$('#order-by').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines?$orderby=Name",
    success: function (data) {
        basicConfig();
        showData(createObjectsArray(data));
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
});

  //GET Request with combination of 3 filters
$('#3filters').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines?$filter=endswith(Name,'a') and startswith(Name,'A')",
    success: function (data) {
        basicConfig();
        showData(createObjectsArray(data));
    },
    error: function (xhr, textStatus, errorMessage) {
        alert(errorMessage);
    }
});
});

//GET Request with combination of 3 string parameters
$('#3stringparams').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/Airlines?$filter=substring(Name, 1, 2) eq 'i' or substring(Name, 1, 2) eq 'a'",
      success: function (data) {
          basicConfig();
          showData(createObjectsArray(data));
      },
      error: function (xhr, textStatus, errorMessage) {
          alert(errorMessage);
      }
  });
  });