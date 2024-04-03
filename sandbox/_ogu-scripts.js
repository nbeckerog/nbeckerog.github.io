<!-- Start Hide Filters and Lessons on Search -->
<script>
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
</script>
<!-- End Global Head Snippet -->
<!-- End Hide Filters and Lessons on Search-->


<script type="text/javascript">
 !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
 analytics.load("SLDcdJLYHpND2m8VRd0ZgscfZjrIrlYZ");
 analytics.page();
 }}();
</script>

#header .header-link:not(.back-to-catalog){font-size:14px;position:relative}
@media (min-width: 1213px)
{#header .header-link:not(.back-to-catalog){font-size:16px}}#header #header-left{padding-left:0;position:unset}#header #header-left #left-nav-button{padding-left:0}#header #header-left #left-nav-button.burger .fa-bars,#header #header-left #left-nav-button.burger .fa-search,#header #header-left #left-nav-button.burger .fa-times{font-size:22px}#header #header-left #left-nav-button.burger .fa-bars::before{content:"\f002";font-family:FontAwesome}#header #header-right{align-items:center;display:flex;position:unset}@media only screen and (max-width: 874px){#header #header-right{flex-grow:1;padding-left:24px}}#header #header-right>.headerheight{flex-shrink:0;height:unset}#header #header-right .login-link{display:none;padding-right:6px}@media (min-width: 875px){#header #header-right .login-link{display:inline-block}}#header #header-right .header-mobile-menu{font-size:26px;margin-left:auto}@media (min-width: 875px){#header #header-right .header-mobile-menu{display:none}}#header #header-right .header-mobile-menu .fa-times{display:none}#header #header-right .header-dropdown-button{display:none;padding-right:1.5em}@media (min-width: 875px){#header #header-right .header-dropdown-button{display:block}}#header #header-right .header-dropdown-button::before{right:0}#header #header-drop{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,0.1)}#header #header-drop::before{border-color:transparent transparent #fff transparent}.header-wrapper{display:flex;height:100%;justify-content:space-between;margin:auto;padding:0 24px;position:relative;width:100%}.header-link-container{display:none;margin-right:16px;flex-shrink:0;position:relative}@media (min-width: 875px){.header-link-container{display:block}}.header-link-container .header-link{margin:0 16px}.header-mobile-dropdown{background-color:#fff;box-shadow:0 0 0 9999px rgba(0,0,0,0.5);display:none;flex-direction:column;position:fixed;top:6em;width:100%;z-index:4}.header-mobile-dropdown .header-link{padding:20px 32px;font-size:18px}.catalog-filters #left-nav-button{margin-right:12px;margin-top:-2px}body.mobile-menu-open .header-mobile-menu .fa-bars{display:none}body.mobile-menu-open .header-mobile-menu .fa-times{display:block !important}body.mobile-menu-open .header-mobile-dropdown{display:flex}
</style>
<script>
function cueHeader(){$("header").children().wrapAll('<div class="header-wrapper"/>');var e=$('<div class="header-link-container"/>'),a=$('<div class="header-mobile-dropdown"/>');for(var d in HEADER_LINKS){var n=$('<a class="header-link focus-link-v2"/>').text(d).attr(HEADER_LINKS[d]);e.append(n.clone()),a.append(n.clone())}$(".header-link.login-link").length?a.append($(".header-link.login-link").clone()):a.append($("#header-drop .sj-text-my-profile").clone().addClass("header-link"),$("#header-drop .signout-link").clone().addClass("header-link"));$("#header-right").prepend(e).append('<a class="header-mobile-menu header-link"><i class="fa fa-bars"></i><i class="fa fa-times"></i></a>'),$("header").after(a),$("#header, #header-drop, .header-mobile-dropdown").addClass("header-background"),$("#header-drop a").addClass("header-link"),$(".header-mobile-menu").on("click",function(){$("body").toggleClass("mobile-menu-open")}),$(document).on("click",function(e){$(e.target).closest("header").length||$(e.target).closest(".header-mobile-dropdown").length||$("body").removeClass("mobile-menu-open")})}$(document).ready(function(){cueHeader()});
</script>

<!-- END Header Links with Mobile View -->
