function main() {
  var pvp = [
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-3-stalker-rush",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-naniwas-safe-expand",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-hwangsins-stargate-expand",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-dears-flexible-phoenix-expand",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-sos-dtrobo-expand",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-duckdeoks-3gate-robo",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-dears-3gate-blink",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-sases-dt-rush",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-traps-3gate-all-in",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-partings-proxy-stalker-rush",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-3gate-robo",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-traps-3gate-all-in",
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-4gate"
    ];
  
  $('#pvp').click(pvp_random);
    
}

function pvp_random() {
  //$("#pvp").attr("href", pvp[random_page(pvp)]);
  window.alert(pvp[random_page(pvp)]);
}

function random_page(array) {
  index = Math.floor(Math.random() * array.length);
  return index;
}

$(document).ready(main);
