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
    "http://imbabuilds.com/hots-protoss/hots-pvp/pvp-4gate",
    "http://wiki.teamliquid.net/starcraft2/Photon_Cannon_Rush",
    "http://wiki.teamliquid.net/starcraft2/2_Gate_Zealot_Rush",
    "http://wiki.teamliquid.net/starcraft2/Proxy_2_Gate:_1_Zealot_2_Stalker_All-in_(vs._Protoss)",
    "http://wiki.teamliquid.net/starcraft2/The_Great_Book_Of_Protoss_Bullshit#10-gate.2F3-gate_.E2.80.93_PvP",
    "http://wiki.teamliquid.net/starcraft2/Dear%27s_DT/Immortal_Drop",
    "http://wiki.teamliquid.net/starcraft2/HotS_2-Gate_Fast_Expand_(vs._Protoss)",
    "http://wiki.teamliquid.net/starcraft2/Power_Overwhelming:_Immortal/Archon/Chargelot_(vs._Protoss)"
    ];
  
  $('#tvt').click(function() {
    window.location = random_page(tvt);
  });
  $('#tvz').click(function() {
    window.location = random_page(tvz);
  });
  $('#tvp').click(function() {
    window.location = random_page(tvp);
  });
  $('#zvt').click(function() {
    window.location = random_page(zvt);
  });
  $('#zvz').click(function() {
    window.location = random_page(zvz);
  });
  $('#zvp').click(function() {
    window.location = random_page(zvp);
  });
  $('#pvt').click(function() {
    window.location = random_page(pvt)
  });
  $('#pvz').click(function() {
    window.location = random_page(pvz)
  });
  $('#pvp').click(function() {
    random_page(pvp);
  });
    
}

function random_page(array) {
  index = Math.floor(Math.random() * array.length);
  window.location = array[index];
}

$(document).ready(main);
