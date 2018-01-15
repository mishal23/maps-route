function calculateRoute(from, to) {
        var initial_config = {
          zoom: 10,
          center: new google.maps.LatLng(40.84, 14.25),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var mapObject = new google.maps.Map(document.getElementById("map"), initial_config);

        var directionsService = new google.maps.DirectionsService();
        var directionsRequest = {
          origin: from,
          destination: to,
          travelMode: google.maps.DirectionsTravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC
        };
        directionsService.route(
          directionsRequest,
          function(response, status){
            if (status == google.maps.DirectionsStatus.OK){

              new google.maps.DirectionsRenderer({
                map: mapObject,
                directions: response
              });
            }
            else
              window.alert("Unable to retrieve route");
          });
      }

      $(document).ready(function() {
        $("#calculate-route").submit(function(event) {
          event.preventDefault();
          calculateRoute($("#from").val(), $("#to").val());
        });
      });