// ==UserScript==
// @name         Quia-Graphs
// @namespace    https://github.com/Quiaaaa/AutoTrimps
// @version      3.0-Quia
// @updateURL    https://github.com/Quiaaaa/AutoTrimps/GraphsOnly.user.js
// @description  Graphs Module (only) from AutoTrimps
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC, Zek, Quia
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @include      *trimpstest*.netlify.app/
// @grant        none
// ==/UserScript==
function loadScript(id, src) {
	const script = document.createElement('script');
	script.id = id;
	script.src = `${src}?${Date.now()}`;
	script.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(script);
}
setTimeout(() => loadScript('Graphs', 'https://Quiaaaa.github.io/AutoTrimps/' + 'Graphs.js'), 1000);
