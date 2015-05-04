function main() {
  
  var pvt = [
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-mcs-2-stalker-mothership-core-opener/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-rains-1gate-fe/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-harstems-blinkcolossus-build/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-jims-phoenix-colossus-build/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-partings-2-2-chargelot-archon-timing/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-mcs-oracle-expand/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-huks-5gate-warp-prism-attack/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-duckdeoks-2-base-blink-timing/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-alicias-1212-colossus/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-sages-blink-all-in/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-3gate-proxy-oracle-all-in/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-1gate-fe/",
    "http://imbabuilds.com/hots-protoss/hots-pvt/pvt-3gate-robo/",
    "http://wiki.teamliquid.net/starcraft2/Photon_Cannon_Rush",
    "http://wiki.teamliquid.net/starcraft2/TAiLS%27_Dark_Templar_Drop_FE_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/2Base_Templar_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/The_Great_Book_Of_Protoss_Bullshit#Two-Base_Blink_All-in_.E2.80.93_PvT",
    "http://wiki.teamliquid.net/starcraft2/The_Great_Book_Of_Protoss_Bullshit#2-Base_Blink_Macro_PvT",
    "http://wiki.teamliquid.net/starcraft2/Classic%27s_Colossus_Drop_(vs._Terran)"
  ];
  var pvz = [
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-ffe/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-naniwas-gate-expand-opener/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-dears-phoenix-colossus-play/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-heros-aggressive-stargate-build/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-partings-3-base-7-gate/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-macseds-5gate/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-twilight-all-in/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-naniwas-zealotimmortal-all-in/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-3gate-robo/",
    "http://imbabuilds.com/hots-protoss/hots-pvz/pvz-3gate-stargate/",
    "http://wiki.teamliquid.net/starcraft2/Photon_Cannon_Rush",
    "http://wiki.teamliquid.net/starcraft2/2_Gate_Zealot_Rush",
    "http://wiki.teamliquid.net/starcraft2/The_Great_Book_Of_Protoss_Bullshit#The_SanGate_.E2.80.93_PvZ",
    "http://wiki.teamliquid.net/starcraft2/2_Immortal_2_Collossus_All-In_(vs._Zerg)",
    "http://wiki.teamliquid.net/starcraft2/Void_Ray/Chargelot/Templar_PvZ",
    "http://wiki.teamliquid.net/starcraft2/Arium%27s_2_Base_Blink_All-In_(vs._Zerg)"
  ];
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
    random_page(tvt);
  });
  $('#tvz').click(function() {
    random_page(tvz);
  });
  $('#tvp').click(function() {
    random_page(tvp);
  });
  $('#zvt').click(function() {
    random_page(zvt);
  });
  $('#zvz').click(function() {
    random_page(zvz);
  });
  $('#zvp').click(function() {
    random_page(zvp);
  });
  $('#pvt').click(function() {
    random_page(pvt)
  });
  $('#pvz').click(function() {
    random_page(pvz)
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
