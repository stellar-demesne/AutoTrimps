function loadScript(id, src) {
	const script = document.createElement('script');
	script.id = id;
	script.src = `${src}?${Date.now()}`;
	script.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(script);
}
setTimeout(() => loadScript('Graphs', 'https://Quiaaaa.github.io/AutoTrimps/' + 'Graphs.js'), 1000);

