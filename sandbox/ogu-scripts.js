/*-- Start Hide Filters and Lessons on Search --*/

var observer = new MutationObserver(function (mutations, me) {
let lessons = document.querySelectorAll(
"#catalog-courses > a[data-type='-l']"
);
if (lessons.length) {
lessons.forEach(function (ele) {
ele.style.display = 'none';
});
me.disconnect();
return;
}
});
observer.observe(document, {
childList: true,
subtree: true,
});

/*-- End Global Head Snippet --*/
/*-- End Hide Filters and Lessons on Search--*/



 !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
 analytics.load("SLDcdJLYHpND2m8VRd0ZgscfZjrIrlYZ");
 analytics.page();
 }}();


function cueHeader(){$("header").children().wrapAll('<div class="header-wrapper"/>');var e=$('<div class="header-link-container"/>'),a=$('<div class="header-mobile-dropdown"/>');for(var d in HEADER_LINKS){var n=$('<a class="header-link focus-link-v2"/>').text(d).attr(HEADER_LINKS[d]);e.append(n.clone()),a.append(n.clone())}$(".header-link.login-link").length?a.append($(".header-link.login-link").clone()):a.append($("#header-drop .sj-text-my-profile").clone().addClass("header-link"),$("#header-drop .signout-link").clone().addClass("header-link"));$("#header-right").prepend(e).append('<a class="header-mobile-menu header-link"><i class="fa fa-bars"></i><i class="fa fa-times"></i></a>'),$("header").after(a),$("#header, #header-drop, .header-mobile-dropdown").addClass("header-background"),$("#header-drop a").addClass("header-link"),$(".header-mobile-menu").on("click",function(){$("body").toggleClass("mobile-menu-open")}),$(document).on("click",function(e){$(e.target).closest("header").length||$(e.target).closest(".header-mobile-dropdown").length||$("body").removeClass("mobile-menu-open")})}$(document).ready(function(){cueHeader()});


/*-- END Header Links with Mobile View --*/
