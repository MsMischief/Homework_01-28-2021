$(document).ready(function() {
  
    // test flag
    const test = false;
  
    // get times from moment
    const now = moment().format('MMMM Do YYYY');
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');
  
    // set times for tesitng after hours
    if (test) {
      nowHour24 = 13;
      nowHour12 = 1;
    }
  
    let $dateHeading = $('#navbar-subtitle');
    $dateHeading.text(now);
    
    // using font awesome icon https://fontawesome.com/license
    // change description here - none
    const saveIcon = "./images/save-regular.svg"; 
    