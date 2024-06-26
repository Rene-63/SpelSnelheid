// ==UserScript==
// @name         LSS Spel Snelheid Aanpassen
// @namespace    www.leitstellenspiel.de
// @version      1.0
// @description  Erlaubt das Ausblenden und Umbenennen der Geschwindigkeiten
// @author       MissSobol (NL- versie aangepast door Rene-MKS)
// @match        https://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Ausblenden und Anpassen der gewünschten Geschwindigkeiten
    modifySpeed('3', false, "Turbo (20s)"); // 3x anzeigen und umbenennen
    modifySpeed('2', true, "Schnell (30s)"); // 2x ausblenden und umbenennen
    modifySpeed('1', false, "Normal (60s)"); // 1x anzeigen und umbenennen
    modifySpeed('7', true, "Langsam (2min)"); // 0.5x ausblenden und umbenennen
    modifySpeed('0', true, "Sehr Langsam (3min)"); // 0.33x ausblenden und umbenennen
    modifySpeed('4', true, "Extrem Langsam (5min)"); // 0.20x ausblenden und umbenennen
    modifySpeed('8', true, "Ultra Langsam (7min)"); // 0.15x ausblenden und umbenennen
    modifySpeed('5', true, "Mega Langsam (10min)"); // 0.10x ausblenden und umbenennen
    modifySpeed('6', false, "Pause"); // Pause anzeigen und umbenennen

    // Funktion zum Ausblenden und Anpassen der Geschwindigkeiten
    function modifySpeed(speed, hide, newLabel) {
        var menuItems = document.querySelectorAll('.mission-speed-dropdown-menu li');
        var speeds = {
            "3": {index: 0, label: "Super Snel"},  // 3x
            "2": {index: 1, label: "Snel"},         // 2x
            "1": {index: 2, label: "Normal"},          // 1x
            "7": {index: 3, label: "Langzaam"},         // 0.5x
            "0": {index: 4, label: "Zeer Langzaam"},    // 0.33x
            "4": {index: 5, label: "Extreem Langzaam"},  // 0.20x
            "8": {index: 6, label: "Ultra Langzaam"},   // 0.15x
            "5": {index: 7, label: "Mega Langzaam"},    // 0.10x
            "6": {index: 8, label: "Pause"}            // Pause
        };

        if (speeds[speed] !== undefined) {
            if (hide) {
                menuItems[speeds[speed].index].style.display = "none";
            } else {
                menuItems[speeds[speed].index].style.display = "block";
                if (newLabel) {
                    menuItems[speeds[speed].index].querySelector("a").innerText = newLabel;
                }
            }
        }
    }
})();

