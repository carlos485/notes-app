/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'nt-arrow-down': '&#xe900;',
		'nt-book': '&#xe901;',
		'nt-bug': '&#xe902;',
		'nt-checkbox-filled': '&#xe903;',
		'nt-check-circle': '&#xe904;',
		'nt-eye': '&#xe905;',
		'nt-eye-slash': '&#xe906;',
		'nt-home': '&#xe907;',
		'nt-info-circle': '&#xe908;',
		'nt-list': '&#xe909;',
		'nt-loader': '&#xe90a;',
		'nt-login': '&#xe90b;',
		'nt-moon': '&#xe90c;',
		'nt-note': '&#xe90d;',
		'nt-notebook': '&#xe90e;',
		'nt-notes': '&#xe90f;',
		'nt-options': '&#xe910;',
		'nt-password': '&#xe911;',
		'nt-plus-circle': '&#xe912;',
		'nt-register': '&#xe913;',
		'nt-settings': '&#xe914;',
		'nt-square-check': '&#xe915;',
		'nt-times': '&#xe916;',
		'nt-user': '&#xe917;',
		'nt-username': '&#xe918;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/nt-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
