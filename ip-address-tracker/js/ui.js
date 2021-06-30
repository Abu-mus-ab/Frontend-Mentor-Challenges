class UI {
  constructor() {
    this.infoDisplay = document.querySelector(".ip-info-display");
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
            <h3>${ipAdd.city}</h3>
            </div>            
        </div>

        <div class="grid-item">
            <p>TIMEZONE</p>
            <div>
            <h3>${ipAdd.timezone}</h3>
            </div>            
        </div>

        <div class="grid-item">
            <p>ISP</p>
            <div>
            <h3>${ipAdd.isp}</h3>
            </div>
        </div>
      `;
  }
}
