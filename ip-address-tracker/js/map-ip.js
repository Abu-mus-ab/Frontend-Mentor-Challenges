class IP {
  constructor() {
    this.apiKey = "at_BczuPTpc5n2CGiGRA6GyXiyBW0xeD";
  }

  async getIPinfo(ip) {
    const IPresponse = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${this.apiKey}&ipAddress=${ip}`
    );
    const ipRes = await IPresponse.json();

    return {
      ipRes,
    };
  }
}
