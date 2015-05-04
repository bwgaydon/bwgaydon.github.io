function main() {
  
  var tvt = [
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-reaper-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-taejas-hots-banshee-build/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-marus-anti-banshee-expand/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-innovations-marinehellion-expand/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-yodas-reaper-fe-into-widow-mine-drop/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-2rax-reaper-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-fantasys-widow-mine-drop-into-banshee/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-taejas-hots-banshee-build/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-polts-gas-first-banshee-build/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-taejas-autoturret-doom-drop/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-mass-reaper/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-mkps-111-all-in/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-proxy-thor-drop/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-1rax-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-lagforces-mech-opener/",
    "http://imbabuilds.com/hots-terran/hots-tvt/tvt-111-all-in/",
    "http://wiki.teamliquid.net/starcraft2/Banshee_Expand_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/Reactor_Expand_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/ThorZaIN%27s_1_Barracks_Fast_Expand_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/Siege_Tank_Opening_(TvT)"
  ];
  var tvz = [
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-cc-first",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-reaper-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-innovations-reactor-hellion-3cc/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-innovations-reaperhellion-3cc/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-bombers-3cc-combat-shield-timing/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-polts-map-control-build/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-marus-marinehellionmedivac-timing/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-marus-hellbat-banshee-timing/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-8-8-8-proxy-reaper/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-1rax-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-lagforces-mech-opener/",
    "http://imbabuilds.com/hots-terran/hots-tvz/tvz-3rax-stim-timing/",
    "http://wiki.teamliquid.net/starcraft2/Double_Proxy_Barracks",
    "http://wiki.teamliquid.net/starcraft2/Reaper_Expand_(vs._Zerg)",
    "http://wiki.teamliquid.net/starcraft2/2_Reaper_Pressure_(vs._Zerg)_(HotS)",
    "http://wiki.teamliquid.net/starcraft2/14_CC_(vs._Zerg)",
    "http://wiki.teamliquid.net/starcraft2/8_Min_Hellbat_All-in_(vs._Zerg)",
    "http://wiki.teamliquid.net/starcraft2/4M:_The_American_Way_(vs._Zerg)"
  ];
  var tvp = [
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-cc-first/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-reaper-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-innovations-cc-first/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-polts-reaper-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-demuslims-reaper-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-bombers-reaper-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-innovations-safe-bio-build/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-15-gas-fe-into-widow-mine-drop/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-hearts-stim-timing/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-innovations-2-base-scv-pull/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-1rax-fe/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-3rax-stim-timing/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-journeys-111-all-in/",
    "http://imbabuilds.com/hots-terran/hots-tvp/tvp-proxy-widow-mine/",
    "http://wiki.teamliquid.net/starcraft2/Double_Proxy_Barracks",
    "http://wiki.teamliquid.net/starcraft2/Reaper_FE_(HotS)",
    "http://wiki.teamliquid.net/starcraft2/3_Rax_Aggro_(vs._Protoss)",
    "http://wiki.teamliquid.net/starcraft2/Early_E-Bay_(vs._Protoss)",
    "http://wiki.teamliquid.net/starcraft2/Bio_Mine_Style_(versus_Protoss)"
  ];
  var zvt = [
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-3-hatch-before-pool/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-scarletts-3-hatchery-macro-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-lifes-safe-speedling-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-scarletts-macro-mutalisk-style/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-soulkeys-3base-roachbane-attack/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-lifes-low-tech-aggression/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-tlos-2-base-muta/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-soulkeys-1-1-roach-timing/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-2-base-speedling-timing/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-hyuns-12-roach-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-jaedongs-roach-drop-nydus/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-roach-bane-all-in/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-lifes-baneling-bust/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-lifes-safe-speedling-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-hyuns-12-roach-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvt/zvt-7-roach-rush/",
    "http://wiki.teamliquid.net/starcraft2/6_Pool_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/7_Roach_Rush_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/DRG_10_Roach_Pressure_(vs_T)",
    "http://wiki.teamliquid.net/starcraft2/HyuN%27s_Roach/Hydra_(vs.Terran)",
    "http://wiki.teamliquid.net/starcraft2/Infestor/Corruptor/Brood_Lord_(vs._Terran)",
    "http://wiki.teamliquid.net/starcraft2/Leenock_Double_Spire_(vs._Terran)"
  ];
  var zvz = [
    "http://imbabuilds.com/hots-zerg/hots-zvz/zvz-standard-lingbane-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvz/zvz-safe-lingbling-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvz/zvz-vortixs-3base-roach/",
    "http://imbabuilds.com/hots-zerg/hots-zvz/zvz-vortixs-2-base-roach-speedling-timing/",
    "http://imbabuilds.com/hots-zerg/hots-zvz/jvz-jaedongs-9-pool/",
    "http://imbabuilds.com/hots-zerg/hots-zvz/zvz-7-roach-rush/",
    "http://imbabuilds.com/hots-zerg/hots-zvz/zvz-2-base-muta/",
    "http://wiki.teamliquid.net/starcraft2/10_Pool_Baneling_(vs._Zerg)",
    "http://wiki.teamliquid.net/starcraft2/10_Pool_Speedling_(vs._Zerg)",
    "http://wiki.teamliquid.net/starcraft2/Ling_Flood",
    "http://wiki.teamliquid.net/starcraft2/Hatchery_First_(vs._Zerg)",
    "http://wiki.teamliquid.net/starcraft2/Speedling_Expand",
    "http://wiki.teamliquid.net/starcraft2/Zergling/Infestor/Ultralisk_(vs._Zerg)"
  ];
  var zvp = [
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-3-hatch-before-pool/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-hyuns-3-hatchery-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-safe-speedling-opener/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-hyuns-roach-hydra-viper-play/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-leenocks-3-base-ultra-timing/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-jaedongs-3-base-linghydra-timing/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-goswers-2-base-roachling-all-in/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-speedling-all-in/",
    "http://imbabuilds.com/hots-zerg/hots-zvp/zvp-7-roach-rush/",
    "http://wiki.teamliquid.net/starcraft2/6_Pool_(vs._Protoss)",
    "http://wiki.teamliquid.net/starcraft2/3_Hatch_Before_Gas_(vs._Protoss)",
    "http://wiki.teamliquid.net/starcraft2/Pool_First,_Double_Expand_(ZvP)",
    "http://wiki.teamliquid.net/starcraft2/3_Hatch_Before_Pool_(vs._Protoss)"
  ];
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
    "http://wiki.teamliquid.net/starcraft2/The_Great_Book_Of_Protoss_Bullshit#Two-Base_Blink_Rush_PvZ_7-Gate",
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
    "http://wiki.teamliquid.net/starcraft2/The_Great_Book_Of_Protoss_Bullshit#PvP_Proxy_10_gate_Zealot.2FStalker",
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
