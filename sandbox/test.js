
<script>
    document.addEventListener('DOMContentLoaded', function() {
      // Check if the sj-move-wrapper div exists
      var moveWrapper = document.getElementById('sj-move-wrapper');
      if (moveWrapper) {
        // Find the curriculumResumeWrapper element
        var curriculumResumeWrapper = document.querySelector('.path-curriculum-resume-wrapper');

        // Move the curriculumResumeWrapper element inside the moveWrapper element
        moveWrapper.appendChild(curriculumResumeWrapper);
      }
    });
  </script>

<script>
document.addEventListener('DOMContentLoaded', function () {
  // Create a new div element
  const newDiv = document.createElement('div');

  // Add the "calendar-intro-paragraph" class to the new div
  newDiv.classList.add('calendar-intro-paragraph');

  // Set the content of the new div using innerHTML
  newDiv.innerHTML = `
    <h1>Live Training Sessions</h1>
    <p>Learn best-in-class workflows from OpenGov experts. Please register for the session and time that works best for you. See you soon!</p>
  `;

  // Find the "calendar-view" element by its ID
  const calendarView = document.getElementById('calendar-view');

  // Insert the new div element above the "calendar-view" element
  calendarView.parentNode.insertBefore(newDiv, calendarView);

  // Log a message to confirm that the script has executed
  console.log('Script executed successfully');
});
</script>


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

<!-- START Personalize by adding first name  -->
<script>
  //when the page fully loads, run the following function
  $(document).ready(function() {
    var welcomeMessage = ", ";
    
    if(typeof skilljarUser !== 'undefined' && skilljarUser.firstName.length <= 15 && skilljarUser.firstName.length > 1){
        $('.first-name').html(skilljarUser.firstName + welcomeMessage);
        $('.first-name').css('display', 'inline-block');
        $('.first-name').css('color', 'inherit');
    }
    else{
      $('.first-name').css('display', 'none');
    }
  });
</script>
<!-- END Personalize by adding first name  -->



<!-- START Header Links with Mobile View -->
<!-- Global Head Snippet -->

<script>
var HEADER_LINKS = {
  "Live Training": {
    "href": "https://university.opengov.com/page/live-trainings",
    "target": "_self",
  },
  "Content Catalog": {
    "href": "https://university.opengov.com/page/course-catalog",
   "target":"_self",
  },
  "Give Feedback": {
    "href": "https://www.getfeedback.com/r/uVgyR8Bg",
   "target":"_blank",
  },
  "Need Help?": {
    "href": "mailto:support@opengov.com",
   "target":"_blank",
  },
}
</script>
  
<script>
function cueHeader(){$("header").children().wrapAll('<div class="header-wrapper"/>');var e=$('<div class="header-link-container"/>'),a=$('<div class="header-mobile-dropdown"/>');for(var d in HEADER_LINKS){var n=$('<a class="header-link focus-link-v2"/>').text(d).attr(HEADER_LINKS[d]);e.append(n.clone()),a.append(n.clone())}$(".header-link.login-link").length?a.append($(".header-link.login-link").clone()):a.append($("#header-drop .sj-text-my-profile").clone().addClass("header-link"),$("#header-drop .signout-link").clone().addClass("header-link"));$("#header-right").prepend(e).append('<a class="header-mobile-menu header-link"><i class="fa fa-bars"></i><i class="fa fa-times"></i></a>'),$("header").after(a),$("#header, #header-drop, .header-mobile-dropdown").addClass("header-background"),$("#header-drop a").addClass("header-link"),$(".header-mobile-menu").on("click",function(){$("body").toggleClass("mobile-menu-open")}),$(document).on("click",function(e){$(e.target).closest("header").length||$(e.target).closest(".header-mobile-dropdown").length||$("body").removeClass("mobile-menu-open")})}$(document).ready(function(){cueHeader()});
</script>

<!-- END Header Links with Mobile View -->
