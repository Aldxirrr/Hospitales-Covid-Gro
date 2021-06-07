function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 16.8638, lng: -99.8816 },
    });
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("right-panel"));
    const control = document.getElementById("floating-panel");
    control.style.display = "block";
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  
    const onChangeHandler = function () {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    //document.getElementById("start").addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
  }
  
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
   // const origen = { lat: 16.90360456788747, lng: -99.82193406176309 };
    const end = document.getElementById("end").value;
    
    navigator.geolocation.getCurrentPosition(
        async function (position){
            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
            directionsService.route(
                {
                  origin: geolocate,
                  destination: end,
                  travelMode: google.maps.TravelMode.DRIVING,
                },
                (response, status) => {
                  if (status === "OK") {
                    directionsRenderer.setDirections(response);
                  } else {
                    window.alert("Directions request failed due to " + status);
                  }
                }
              );
        
        
        
        }

    )
    

  }