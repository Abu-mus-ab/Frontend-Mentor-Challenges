class UI {
  constructor() {
    this.infoDisplay = document.querySelector(".ip-info-display");
    this.map = document.getElementById("map");
    this.accessToken =
      "pk.eyJ1IjoiYWJkdmxrYWRyIiwiYSI6ImNrcWpnZzdyZDNnNzgycG12bzE2MmN1NnUifQ.Z_bw8BQbXnhBR3tJc8DlHw";
  }

  paintUI(ipAdd) {
    this.infoDisplay.innerHTML = `
        <div class="grid-item">
            <p>IP Address</p>
            <div>
            <h3>${ipAdd.ip}</h3>
            </div>            
        </div>

        <div class="grid-item">
            <p>Location</p>
            <div>
            <h3>${ipAdd.location.city}</h3>
            </div>            
        </div>

        <div class="grid-item">
            <p>TIMEZONE</p>
            <div>
            <h3>${ipAdd.location.timezone}</h3>
            </div>            
        </div>

        <div class="grid-item">
            <p>ISP</p>
            <div class="isp">
            <h3>${ipAdd.isp}</h3>
            </div>
        </div>
      `;
  }

  paintMap(lat, lng) {
    const mymap = L.map(this.map).setView(
      [lat.location.lat, lng.location.lng],
      13
    );

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: this.accessToken,
      }
    ).addTo(mymap);

    const marker = L.marker([lat.location.lat, lng.location.lng]).addTo(mymap);

    document.querySelector(".leaflet-marker-icon").src =
      "../images/icon-location.svg";
  }
}
