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

<style>

#catalog-search-info .tile-counter-container {
display: none;
}


/*———————————————————*/
/*————————  Global  ———————*/
/*———————————————————*/


.video-max{
width: 80% !important;
}  

@media screen and (max-width: 1500px){
.video-max{
width: 65% !important;
}  
}

  /* sets answer text to be left-aligned */
    .form-answers > #id_answer { 
        text-align: justify !important;
    }

    /* sets answer text width and has text wrap*/
    .question > .row > .form-answers {
        width: 400px !important;
        text-wrap: wrap;
    }

    .course-text-content > .question > .question-meta {
        padding: 30px;
    }

  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

.nav-sidebar__content{
margin-top:25px !important;
}

/* Calendar and live training stuff */

.sj-text-already-purchased{
color:white !important;
}

.sj-table-v2 thead{
border-bottom: 1px solid #d5d5d5 !important;
padding: 5px !important;
}  

.sj-text-event, .sj-text-date, .sj-text-spaces-left{
font-size:16px !important;
padding: 10px !important;
}

.sj-table-v2{
border-style:solid !important;
border-color:#7D7D80 !important;
border-width: 1px !important;
border-radius: 10px !important;
padding: 5px !important;
}

.calendar-intro-paragraph{
margin-top: 75px !important;
text-align: center;
max-width: 1200px;
margin-left:auto;
margin-right:auto;
}

#calendar-view{
background-color: #fff;
}


.active{
border-style: solid !important;
border-width: 1px 0px 0px 0px !important;
}

.registered-course-background{
margin-top: 20px;
background: -o-linear-gradient(95deg, rgba(31,53,89,0.92) 5%, rgba(22,92,171,0.92) 60%, rgba(29,110,204,0.92) 90%);
background: linear-gradient(355deg, rgba(31,53,89,0.92) 5%, rgba(22,92,171,0.92) 60%, rgba(29,110,204,0.92) 90%);
}


.section-container.tabs section.active>.title a, .section-container.tabs .section.active>.title a {
    border-style: solid !important;
    border-color: gray !important;
    border-width: 0px 1px 1px 1px !important;
background: #f1f1f1;
}

.search{
width: 100% !important;
}

/*
.search .course-listing{
margin-top: 0px !important;
width: 50vw !important;
}
*/

@media screen and (max-width: 800px){
.search .coursebox-container{
width: 31.5%;
}
}

@media screen and (min-width: 1500px){
.search .course-listing{
margin-top: 0px !important;
width: 76vw !important;
margin-left: 15px;
}
}

.search .catalog-center-width{
width: 100% !important;
display: inline-block !important;
}

.search .one-col-full{
display: none !important;
}

/*
.search .catalog-center-width{
display: none !important;
}
*/



.vertical-center-wrapper{
background: #FAFAFA !important;
}

/*
@media only screen and (min-width: 64em)
.search .catalog-center-width, .list-view .catalog-center-width, .expandable-view .catalog-center-width {
    max-width: 1200px !important;
    padding: 0 20px;
}
*/

.back-to-catalog{
  display: block !important;
}

.header-wrapper .back-to-catalog{
display: none !important;
}


.curriculum-v2{
width:100%;
}

#catalogSearchInput{
border-style: solid !important;
border-width: 1px !important;
border-radius: 10px !important;
border-color: #d3d3d3 !important;
}

#catalog-search-box{
border-style: solid !important;
border-width: 1px !important;
border-radius: 10px !important;
border-color: #d3d3d3 !important;
}

.catalog-search-box, .catalog-search-input-group, .catalog-search-input{
border-style: solid !important;
border-width: 1px !important;
border-radius: 10px !important;
border-color: #d3d3d3 !important;
}

@media screen and (min-width: 800px){
.course-listing {
margin-top: 55px;
display: inline-block;
}
}

.calendar-view, .calendar-without-left-nav{
margin-top: 40px;
}

/*
:not(.catalog-center-width, .catalog-content) > .catalog-search-info, .search{
margin-top: 45px;
}
*/

:not(.catalog-center-width, .catalog-content) > .catalog-left-nav-wrapper{
margin-top: 75px;
}

:not(.catalog-center-width, .catalog-content) > .catalog-left-nav{
margin-top: 75px;
}

/*
.dp-promo-image-wrapper{
display: none;
}
*/

.dp-summary-wrapper{
width:100%;
text-align:center;
}

*{
-webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: none !important;
}

:not(#login-content) > @media only screen and (min-width: 768px){
.large-6 #lp-wrapper #lesson-body.details-pane-open.details-pane-right #details-pane, #lp-wrapper #lesson-body.details-pane-open.details-pane-right #lesson-main, #lp-wrapper #lesson-body.details-pane-open.details-pane-left #details-pane, #lp-wrapper #lesson-body.details-pane-open.details-pane-left #lesson-main {
    width: 100% !important;
    text-align: center !important;
}
}

/*
.large-8, .push-4, .cp-summary-wrapper{
min-width: 90% !important;
display: block !important;
justify-content: center !important;
text-align: left !important;
margin-right: auto;
margin-left:auto;
left: 0 !important;
} */

/* fix off-center quiz heading */
.push-4{
left: 0 !important;
}

.push-3{
margin-right:50%;
}

.sj-text-available-as-part-of{
color: #ededf2 !important;
}

.button-prev-title{
color: white !important;
background-color: #f78e1e !important;
padding: 12px;
border-radius: 3px;
}

.button-prev-title:hover{
color: white !important;
background-color: #165cab !important;
padding: 12px;
border-radius: 3px;
}

:not(.next-lesson-link) > #purchase-button-wrapper button, .button{
background-color: #f78e1e !important;
}

:not(.next-lesson-link) > #purchase-button-wrapper button, .button:hover {
background-color: #1f3559 !important;
}

:not(.prev-lesson-link) > #purchase-button-wrapper button, .button{
background-color: #f78e1e !important;
}

:not(.prev-lesson-link) > #purchase-button-wrapper button, .button:hover {
background-color: #1f3559 !important;
}

.prev-lesson-link{
background-color: #f78e1e !important;
}

.sj-course-info-wrapper{
text-align: center;
}

:not(.catalog-header) > .sj-course-info-wrapper h2{
color: #ffffff !important;
}


.dp-promo-image{
display: none;
}

#dp-details-bundle{
margin-left: auto;
margin-right: auto;
padding-top: 48px !important;
padding-bottom: 48px !important;
}

.dp-long-description{
width: 100%;
margin-left: auto;
margin-right: auto;
font-size: 16px !important;
}

.top-row-grey{
 box-sizing: border-box;
width: 100vw;
left: 0;
margin: 0;
z-index: 2;
padding-top: 128px !important;
text-color: #ffffff !important;
background: -o-linear-gradient(95deg, rgba(31,53,89,0.92) 5%, rgba(22,92,171,0.92) 60%, rgba(29,110,204,0.92) 90%);
background: linear-gradient(355deg, rgba(31,53,89,0.92) 5%, rgba(22,92,171,0.92) 60%, rgba(29,110,204,0.92) 90%);
}

.row-v2{
  max-width: 3860px !important;
margin: 0px !important;
}

.row{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    max-width: 93.75em;
}

:not(.lp-left-nav, .catalog-header) > .break-word {
color: #ffffff !important;
text-align: center;
}

iframe{
border-radius: 12px;
z-index: 99;
-webkit-box-shadow: 0px 6px 12px 0px rgba(31,53,89,0.3);
box-shadow: 0px 6px 12px 0px rgba(31,53,89,0.3);
}

/* Header shadow */
#header{
-webkit-box-shadow: 0px 6px 12px 0px rgba(31,53,89,0.2);
box-shadow: 0px 6px 12px 0px rgba(31,53,89,0.2);
}

/* Change the background color for every catalog page. */
.sj-page-catalog #skilljar-content {
    background-color: #fff;
}

/* Change the background color of the course details page. */
.grey-bg, .top-row-grey {
    background-color: #FAFAFA;
    padding-bottom: 96px !important;
}

/*remove social media icons*/
.social-media-wrapper { 
display: none; 
}

#header{
height: 96px;
z-index: 1000;
}

.search-container{
height: 96px !important;
margin-top: 60px !important;
margin-left: 20px;
}

.purchase-button-full-text{
content: '';
font-size:0;
visibility: hidden;
}

.purchase-button-full-text:after{
visibility: visible;
content: "Start Learning" !important;
text-align: center !important;
font-size:18px;
}

/* Opengov Logo */
.header-center-img{
height: 24px;
}

@media only screen and (min-width: 768px){
    .header-center-img {
        height: 32px;
    }
}

.top-row{
    background-color: #fafbfc;
}

.dp-promo-image-wrapper{
background: cover;
content: fill;
}

.inline-collapsible-section{
display: none;
}


/*———————————————————*/
/*—————— Typography ———————*/
/*———————————————————*/

  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body{
font-family: 'Barlow', sans-serif !important;
}

h1{
    font-family: 'Barlow Condensed', sans-serif !important;
    font-size: 2.7em !important;
    font-weight: 700 !important;
    color: #1f3559;
    line-height: 1.1;
}

h2{
    font-family: 'Barlow', sans-serif !important;
    font-size: 1.5em !important;
    color: #7d7d7d;
}

h3{
    font-family: 'Barlow', sans-serif !important;
    font-size: 1.5em !important;
    color: #165cab;
}

p{
    font-family: 'Barlow', sans-serif !important;
    font-size: 1.25em;
    line-height: 1.5;
    color: #4A4B4C;
}

h1.d1{
    font-size: 3.5em !important;
}

.rev{
color: #fff;
}

.bold{
font-weight: 700;
}

.text-center{
text-align: center

}

#skilljar-content {
  font-family: 'Barlow', sans-serif;
}

/* Course Titles */
a.coursebox-container.course .coursebox-text {
     font-family: 'Barlow Condensed', sans-serif;
     font-weight: bold;
     font-size: 2em;
     padding: 0 24px !important;
     color: 1f3559 !important;
}

/* Course Description */
a.coursebox-container.course .coursebox-text-description {
    display: block;
font-family: 'Barlow', sans-serif;
     font-weight: 400;
    padding: 0 24px !important;
    margin-bottom: 40px !important;
    font-size: 1.25em;
    color: #7C7D7F;
    line-height: 1.5em;
}

/*
.course-title{
font-size: 32px !important;
font-style: normal !important;
}
*/

.storefront-price{
display: none;
}

/* styling for course tags */
.course-tags{
font-weight: bold;
color: blue;
}

.sj-ribbon, .sj-course-ribbon, .sj-ribbon-registered, .sj-course-ribbon-registered{
border-color: #F78E1E !important;
background: #F78E1E !important;
text-color: #ffffff !important;
}

.sj-ribbon-text, .sj-course-ribbon-text{
color: #ffffff !important;
}

.catalog-header{
z-index: 99;
width: 100% !important;
}

#path-curriculum-progress-bar-annotation-text{
color:white!important;
}

.progress{
    border-style: solid !important;
    border-width: 1px !important;
    border-color: #d3d3d3 !important;
    background: #fff!important;
}

i.icon-text{
color: #f78e1e;
}

.icon-text{
color: #f78e1e !important;
}

.fa {
color: #f78e1e !important;
}

.fa .fa-check-square-o {
color: #f78e1e !important;
}

fa-circle-o{
display: none;
}

#cp-content #curriculum-list .lesson-row .bullet i {
    font-size: 0px !important;
    display: none;
}

i.icon-text {
    color: #f78e1e;
    font-size: 22px !important;
}

/*———————————————————*/
/*—————  Frontpage Hero ——————*/
/*———————————————————*/

.pill-button-link{
color: white !important;
}

.pill-button-section{
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 30px;
      z-index: 999;
      margin-bottom: 50px;
}

.pill-buttons{
background-color: #1f3559;
text-align: center;
margin-left: auto;
margin-right: auto;
width: 225px;
display: inline-block;
font-size:16px;
border-radius: 50px;
padding: 20px;
transition-duration: 0.4s;
transition: transform 0.3s ease;
}

.pill-buttons:hover{
scale: 1.02;
background-color: #165cab;
}

/* @media (min-width:480px){
     .pill-buttons{
display:inline-block;
margin-bottom: 0;
margin-right: 10px;
}
} */

@media (min-width:480px){
     .pill-buttons{
flex-direction: row;
        justify-content: flex-start;
margin-bottom: 0;
margin-right: 10px;
}
}

.pill-buttons:hover{
color: white !important;
background-color: #1F3559;
}

.front-page--hero{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: auto;
width: auto;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
z-index: 99;
}

@media screen and (min-width: 926px) {
.front-page--hero{
height: 560px;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
        flex-flow: row wrap;
-webkit-box-align: start;
    -ms-flex-align: start;
        align-items: start;
margin-bottom: 64px;
z-index: 99;
}
}

.hero--left-col{
width: 88%;
height: auto;
flex-order: 1;
padding: 80px 0 40px 0;
text-align: center;
z-index: 99;
}

@media screen and (min-width: 926px) {
.hero--left-col{
width: 50%;
height: 100%;
flex-order: 1;
text-align: left;
padding: 0 72px 0 0;
z-index: 99;
}
}

.hero--right-img{
width: 80%;
height: 100%;
flex-order: 2;
padding: 0 0 72px 0;
z-index: 99;
}

@media screen and (min-width: 926px) {
.hero--right-img{
width: 50%;
height: 100%;
flex-order: 2;
padding: 0 3% 0 0;
z-index: 99;
}
}

.vertical-align{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
}

.text-wrapper--center{
width: 80%;
height: auto;
margin: 24px auto 96px auto;
z-index: 99;
flex-direction:row;
justify-content: flex-start;
}

.text-container{
height: auto;
z-index: 99;
}

.media-container{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: auto;
width: 100%;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
z-index: 99;
}

.video {
  aspect-ratio: 16 / 9;
  width: 100%;
z-index: 99;
}

.hero-background{
position: absolute;
width: 100%;
height: 560px;
left: 0;
margin: 0;
z-index: 2;
background: -o-linear-gradient(95deg, rgba(31,53,89,0.92) 5%, rgba(22,92,171,0.92) 60%, rgba(29,110,204,0.92) 90%);
background: linear-gradient(355deg, rgba(31,53,89,0.92) 5%, rgba(22,92,171,0.92) 60%, rgba(29,110,204,0.92) 90%);
}

.hero-background--image{
position: absolute;
width: 100%;
height: 560px;
left: 0;
margin: 0;
z-index: 0;
background-image: url("https://opengov.com/wp-content/uploads/2023/04/OGU_hero_color@2x-1-scaled.jpg");
}

/*————————————————————*/
/*——   Admin Certification Hero Styles   ——*/
/*————————————————————*/

.admin-cert--front-page--hero{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: 640px;
width: auto;
margin-bottom: 64px;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
z-index: 99;
}

@media screen and (min-width: 926px) {
.admin-cert--front-page--hero{
height: 640px;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
        flex-flow: row wrap;
-webkit-box-align: start;
    -ms-flex-align: start;
        align-items: start;
margin-bottom: 64px;
z-index: 99;
}
}

.admin-cert--hero--left-col{
width: 88%;
height: auto;
flex-order: 2 !important;
padding: 80px 0 40px 0;
text-align: center;
z-index: 99;
}

@media screen and (min-width: 926px) {
.admin-cert--hero--left-col{
width: 50%;
height: 100%;
flex-order: 1 !important;
text-align: left;
padding: 0 72px 0 0;
z-index: 99;
}
}

.admin-cert--hero--right-img{
width: 50%;
height: 100%;
flex-order: 1 !important;
padding: 0 0 72px 0;
z-index: 99;
}

@media screen and (min-width: 926px) {
.admin-cert--hero--right-img{
width: 50%;
height: 100%;
flex-order: 2 !important;
padding: 0 3% 0 0;
z-index: 99;
}
}

.admin-cert--hero-background{
position: absolute;
width: 100%;
height: 640px;
left: 0;
margin: 0;
z-index: 2;
background: rgb(64,64,65);
background: linear-gradient(355deg, rgba(64,64,65,1) 5%, rgba(64,64,65,0.5) 60%, rgba(64,64,65,0.5) 90%);
}

.admin-cert--hero-background--image{
position: absolute;
width: 100%;
height: 640px;
left: 0;
margin: 0;
z-index: 0;
background-repeat: no-repeat;
background-image: url("https://opengov.com/wp-content/uploads/2023/04/admin_cert-background@2x-scaled.jpg");
}

/*————————————————————*/
/*—  Tile Styles (except page and list view)  —*/
/*————————————————————*/

#catalog-courses{
margin-bottom: 80px;
font-family: 'Barlow', sans-serif;
margin-right: 100% !important;
}


/*———Course tile shadow———*/
:not(.list-view) > #catalog-content a.coursebox-container, :not(.list-view) > #catalog-content a.sj-catalog-page {
    border-radius: 20px;
    border: none;
    padding: 0 0 32px 0px !important;
    -webkit-transition: 100ms ease;
    -o-transition: 100ms ease;
    transition: 100ms ease;
-webkit-box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
}

:not(.list-view) > #catalog-content a.coursebox-container.sj-course-series {
    border-radius: 20px;
    border: none;
    padding: 0 0 32px 0px !important;
    -webkit-transition: 100ms ease;
    -o-transition: 100ms ease;
    transition: 100ms ease;
-webkit-box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
}

/*———Learning path tile shadow———*/
:not(.list-view) > #catalog-courses a.coursebox-container, :not(.list-view) > #catalog-courses a.sj-catalog-page {
    border-radius: 20px;
    border: none;
    padding: 0 0 32px 0px !important;
    -webkit-transition: 100ms ease;
    -o-transition: 100ms ease;
    transition: 100ms ease;
-webkit-box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
}

/*———Learning path box style———*/
:not(.list-view) > #catalog-courses a.coursebox-container.sj-course-series {
    border-radius: 20px;
    border: none;
    padding: 0 0 32px 0px !important;
    -webkit-transition: 100ms ease;
    -o-transition: 100ms ease;
    transition: 100ms ease;
-webkit-box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
box-shadow: 0px 6px 16px 0px rgba(31,53,89,0.1);
}

@media screen and (min-width: 800px) {
   not(.list-view) > #catalog-content a.coursebox-container, :not(.list-view) > #catalog-content a.sj-catalog-page {
    width: 47.5%;
  }
}

@media screen and (min-width: 1213px) {
   :not(.list-view) > #catalog-content a.coursebox-container, :not(.list-view) > #catalog-content a.sj-catalog-page {
    width: 31.5%;
  }
}

@media screen and (min-width: 800px) {
  :not(.list-view) > #catalog-courses a.coursebox-container, :not(.list-view) > #catalog-courses a.sj-catalog-page {
    width: 47.5%;
  }
}

@media screen and (min-width: 1213px) {
   :not(.list-view) > #catalog-courses a.coursebox-container, :not(.list-view) > #catalog-courses a.sj-catalog-page {
    width: 31.5%;
  }
}

/* Tile Image Styles*/
:not(.list-view) > #catalog-content a.coursebox-container.course .coursebox-image {
    height: auto;
    max-height: 88px;
    -o-object-fit: fill;
       object-fit: fill;
    margin: 0;
    padding: 0 !important;
}

.coursebox-image{
width: 100% !important;
object-fit: cover !important;
overflow: hidden !important;
background-repeat: repeat-x !important;
}

/*
.coursebox-container{
overflow:hidden !important;
}
*/

/*———————————————————*/
/*—————— Search and Exam Stuff———————*/
/*———————————————————*/

.lesson-row{
color:black !important;
}

.focus-link-v2{
font-size: 19px !important;
}

.title{
font-color:black !important;
font-size: 18px !important;
}

.lesson-title-label{
padding-bottom: 5px;
overflow: visible !important;
}

.fa-caret-down{
font-size: 25px !important;
}

/*
.fa-arrow-left{
margin-top: 25px !important;
}
*/

.filter-counter{
padding-left: 5px !important;
}


#backToCatalogLongText {
  font-size: 0;
}
#backToCatalogLongText:after {
  content: 'OpenGov University';
font-size: 16px !important;
}

/*
.scorm-lesson-content, .scaled-embedded-content, .media-loader-container{
max-width: 1500px !important;
object-fit: contain !important;
}
*/

#scaled_embedded_content{
min-height: 450px !important;
max-height: 600px !important;
}

.hidden-field{
visibility: visible !important;
color: black !important;
border-style: solid !important;
border-width: 1px !important;
border-color: black !important;
}

.hidden-field::after{
visibility: visible !important;
color: black !important;
border-style: solid !important;
border-width: 1px !important;
border-color: black !important;
}

.lesson-wrapper{
font-size: 18px;
}

.icon-text{
width:45px;
}

.section {
font-size:20px;
font-weight:bold;
}

.form-answers{
font-size:18px;
}

/* move quiz question box down so time isn't obscured by nav bar*/

.question{
margin-top: 30px !important;
}

.sjwc-course-flexible-content{
margin-top: 35px !important;
}

.small-11 .small-centered columns{
margin-bottom: 25px !important;
}

body.lesson-fullscreen #lp-wrapper #lesson-body{
top: 60px !important;
} 

#lp-content{
top: 25px !important;
}

#lesson-body{
background-color: #fff;
}

.question-meta, quiz-content, .question-number{
font-size:18px;
padding-bottom:10px;
}

.button.small{
font-size:16px !important;
}

/*
.lesson-top{
margin-top:45px !important;
top: 45px !important;
}
*/

/*
#lp-content{
background-color: #07305c;
}
*/

#quiz-container{
padding:10px;
border-radius: 10px;
box-shadow: 3px 2px 2px;
}

/*
path-curriculum-progress-bar-wrapper{
display: block !important;
width: 40% !important;
margin-right: auto;
margin-left: auto;
}
*/

.path-curriculum-button-wrapper{
order:1;
margin-bottom: 10px;
}

.path-curriculum-resume-wrapper{
margin-top: 60px;
}

.sj-page-path .path-curriculum-resume-wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

/*
#path-curriculum-progress-bar-annotation-text{
color: white !important;
}
*/

.progress-bar{
    display: block;
    height: 100%;
}

.sj-profile-header-v2{
margin-top: 75px;
}

.lp-left-nav{
margin-top:100px !important;
}

.cp-promo-image, .dp-promo-image{
display: none !important;
}

#details-pane{
padding-top: 75px;
}

#open-details-pane-button{
margin-top: 40px;
}

.certificate-image{
margin-top: 45px;
}

.sj-text-quiz-previous{
color: #ffffff !important;
}

/*
.large-4, .pull-8, .cp-promo-image-wrapper{
display: none !important;
}
*/

.cp-lessons{
color: #ffffff !important;
}

.form_answers{
width: 300px !important;
margin-left: auto !important;
margin-right: auto !important;
}

#id_answer{
width: 300px !important;
margin-left: auto !important;
margin-right: auto !important;
}

#id_answer_0::after{
color: black;
border-style: solid;
border-width: 1px;
border-color: black;
}
#id_answer_1::after{
color: black;
border-style: solid;
border-width: 1px;
border-color: black;
}
#id_answer_2::after{
color: black;
border-style: solid;
border-width: 1px;
border-color: black;
}
#id_answer_3::after{
color: black;
border-style: solid;
border-width: 1px;
border-color: black;
}
#id_answer_4::after{
color: black;
border-style: solid;
border-width: 1px;
border-color: black;
}
#id_answer_5::after{
color: black;
border-style: solid;
border-width: 1px;
border-color: black;
}

#id_chosen_answers_0{
background-color: rgba(0,0,0, 0.1);
}
#id_chosen_answers_0::after{
color: #165cab;
}
#id_chosen_answers_1{
background-color: rgba(0,0,0, 0.1);
}
#id_chosen_answers_1::after{
color: #165cab;
}
#id_chosen_answers_2{
background-color: rgba(0,0,0, 0.1);
}
#id_chosen_answers_2::after{
color: #165cab;
}
#id_chosen_answers_3{
background-color: rgba(0,0,0, 0.1);
}
#id_chosen_answers_3::after{
color: #165cab;
}
#id_chosen_answers_4{
background-color: rgba(0,0,0, 0.1);
}
#id_chosen_answers_4::after{
color: #165cab;
}
#id_chosen_answers_5{
background-color: rgba(0,0,0, 0.1);
}
#id_chosen_answers_5::after{
color: #165cab;
}


/*———————————————————*/
/*—————— Animations ———————*/
/*———————————————————*/

/* Tile Hover Effect without not-search filter*/
:not(.list-view) > #catalog-content a.coursebox-container:hover {
  border: none;
  -webkit-transform: scale(0.98);
      -ms-transform: scale(0.98);
          transform: scale(0.98);
-webkit-box-shadow: 0px 1px 6px 0px rgba(31,53,89,0.2);
box-shadow: 0px 1px 6px 0px rgba(31,53,89,0.2);
}

/* Learning Path Tile Hover Effect*/
:not(.list-view) > #catalog-courses a.coursebox-container:hover {
  border: none;
  -webkit-transform: scale(0.98);
      -ms-transform: scale(0.98);
          transform: scale(0.98);
-webkit-box-shadow: 0px 1px 6px 0px rgba(31,53,89,0.2);
box-shadow: 0px 1px 6px 0px rgba(31,53,89,0.2);
}

/*Remove default hover effect for path/series so it does not conflict with what is added below*/
a.coursebox-container.sj-course-series:before,
a.coursebox-container.sj-course-series:after {
  content: none;
}

/* tile stacking effect for paths/series. Does not apply to list or search view pages  */
:not(.list-view) > #catalog-content a.coursebox-container.course.sj-course-series:hover {
  border: none;
  -webkit-transform: scale(0.98);
      -ms-transform: scale(0.98);
          transform: scale(0.98);
-webkit-box-shadow: 0px 1px 6px 0px rgba(31,53,89,0.2);
box-shadow: 0px 1px 6px 0px rgba(31,53,89,0.2), 0px 4px #fbfbfb, 0px 8px #dedede !important;
}

</style>

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
<style>
header#header,
.header-background {
  /* Header background color */
  background-color: white !important;
}
.header-link {
  /* Link color */
  color: #07305c !important;
  font-size: 20px !important;
}
</style>
<style>
#header .header-link:not(.back-to-catalog){font-size:14px;position:relative}
@media (min-width: 1213px)
{#header .header-link:not(.back-to-catalog){font-size:16px}}#header #header-left{padding-left:0;position:unset}#header #header-left #left-nav-button{padding-left:0}#header #header-left #left-nav-button.burger .fa-bars,#header #header-left #left-nav-button.burger .fa-search,#header #header-left #left-nav-button.burger .fa-times{font-size:22px}#header #header-left #left-nav-button.burger .fa-bars::before{content:"\f002";font-family:FontAwesome}#header #header-right{align-items:center;display:flex;position:unset}@media only screen and (max-width: 874px){#header #header-right{flex-grow:1;padding-left:24px}}#header #header-right>.headerheight{flex-shrink:0;height:unset}#header #header-right .login-link{display:none;padding-right:6px}@media (min-width: 875px){#header #header-right .login-link{display:inline-block}}#header #header-right .header-mobile-menu{font-size:26px;margin-left:auto}@media (min-width: 875px){#header #header-right .header-mobile-menu{display:none}}#header #header-right .header-mobile-menu .fa-times{display:none}#header #header-right .header-dropdown-button{display:none;padding-right:1.5em}@media (min-width: 875px){#header #header-right .header-dropdown-button{display:block}}#header #header-right .header-dropdown-button::before{right:0}#header #header-drop{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,0.1)}#header #header-drop::before{border-color:transparent transparent #fff transparent}.header-wrapper{display:flex;height:100%;justify-content:space-between;margin:auto;padding:0 24px;position:relative;width:100%}.header-link-container{display:none;margin-right:16px;flex-shrink:0;position:relative}@media (min-width: 875px){.header-link-container{display:block}}.header-link-container .header-link{margin:0 16px}.header-mobile-dropdown{background-color:#fff;box-shadow:0 0 0 9999px rgba(0,0,0,0.5);display:none;flex-direction:column;position:fixed;top:6em;width:100%;z-index:4}.header-mobile-dropdown .header-link{padding:20px 32px;font-size:18px}.catalog-filters #left-nav-button{margin-right:12px;margin-top:-2px}body.mobile-menu-open .header-mobile-menu .fa-bars{display:none}body.mobile-menu-open .header-mobile-menu .fa-times{display:block !important}body.mobile-menu-open .header-mobile-dropdown{display:flex}
</style>
<script>
function cueHeader(){$("header").children().wrapAll('<div class="header-wrapper"/>');var e=$('<div class="header-link-container"/>'),a=$('<div class="header-mobile-dropdown"/>');for(var d in HEADER_LINKS){var n=$('<a class="header-link focus-link-v2"/>').text(d).attr(HEADER_LINKS[d]);e.append(n.clone()),a.append(n.clone())}$(".header-link.login-link").length?a.append($(".header-link.login-link").clone()):a.append($("#header-drop .sj-text-my-profile").clone().addClass("header-link"),$("#header-drop .signout-link").clone().addClass("header-link"));$("#header-right").prepend(e).append('<a class="header-mobile-menu header-link"><i class="fa fa-bars"></i><i class="fa fa-times"></i></a>'),$("header").after(a),$("#header, #header-drop, .header-mobile-dropdown").addClass("header-background"),$("#header-drop a").addClass("header-link"),$(".header-mobile-menu").on("click",function(){$("body").toggleClass("mobile-menu-open")}),$(document).on("click",function(e){$(e.target).closest("header").length||$(e.target).closest(".header-mobile-dropdown").length||$("body").removeClass("mobile-menu-open")})}$(document).ready(function(){cueHeader()});
</script>
