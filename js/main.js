Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	slideNumber: true,

	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// Optional reveal.js plugins
	dependencies: [
		{
			src: 'bower_components/reveal.js/plugin/highlight/highlight.js',
			async: true,
			condition: function() {
				return !!document.querySelector('pre code');
			},
			callback: function() {
				hljs.initHighlightingOnLoad();
			}
		}
	]
});