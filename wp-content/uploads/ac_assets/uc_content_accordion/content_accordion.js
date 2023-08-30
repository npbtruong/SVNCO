
function UCPostAccordion(objAccordion){
  
  var g_activeClass;
  var g_dataLinkNum, g_accItem, g_scrollOffset;

  //scroll func
  function scrollToTop(){
    var panel = jQuery(this).closest(".uc_ac_box");
    
    jQuery('html, body').animate({
      scrollTop: panel.offset().top + g_scrollOffset
    }, 400);
  }
  
  /**
  * set hash
  */
  function setHash(objTab){
    
    var isHashSet = objAccordion.data("set-hash");
    
    if(isHashSet == false)
    return(false);
    
    var objTabDataId = objTab.parent().attr('id');
    
    window.location.hash = objTabDataId;    
    
  }
  
  function onItemClick(){
    
    var objCaption = jQuery(this);
    var objContent = objCaption.next();
    var objItem = objCaption.parent();
    
    setHash(objCaption);
    
    var isActive = objItem.hasClass(g_activeClass);
    var dataCloseothers = objAccordion.data("closeothers");
    
    if(dataCloseothers == true){

      if(isActive == true){    
        //remove active class from clicked
        objItem.removeClass(g_activeClass);
        objContent.slideUp();    
        return(false);
      }
       
      var objItems = objItem.siblings();

      objItems.each(function(){

        var objTab = jQuery(this);
        var isTabActive = objTab.hasClass(g_activeClass);
     
        //remove active class from all other tabs
        //use carefully, not to touch inner accordion if such exists
        if(isTabActive == true){
          objTab.removeClass(g_activeClass);
          objTab.find(" > .uc_content").slideUp();        
        }
      });      
      
      
    }
   
    objItem.addClass(g_activeClass);
    
    var dataScroll = objAccordion.data('scroll');
    
    if (dataScroll == "desktop"){
      if(window.matchMedia("(min-width: 1024px)").matches){
        objContent.slideDown(scrollToTop);
      }else{
        objContent.slideDown();
      }
    }
    
    if (dataScroll == "mobile"){
      if(window.matchMedia("(max-width: 1024px)").matches){
        objContent.slideDown(scrollToTop);
      }else{
        objContent.slideDown();
      }
    }
    
    if (dataScroll == "desktop+mobile"){
      objContent.slideDown(scrollToTop);
    }
    
    if (dataScroll == "off"){
      objContent.slideDown();
    }
    
    return false;
  }
  
  
  function linkToSlideScroll(){ 
    
    jQuery('html, body').animate({
      scrollTop: g_accItem.offset().top + g_scrollOffset
    }, 400);
  }
  
  /*
  * check if element is in viewport
  */
  function isElementInViewport(objElement) {
    
    var elementTop = objElement.offset().top;
    var elementBottom = elementTop + objElement.outerHeight();
    
    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();
    
    var isInViwport = elementBottom > viewportTop && elementTop < viewportBottom;
    
    return(isInViwport);
  } 
  
  /*
  * on trigger link click
  */
  function onLinkClick(e){
    
    var objLink = jQuery(this);
    
    var dataAccName = objAccordion.data('name');
    var dataLinkName = objLink.data('name');
    g_dataLinkNum = objLink.data('num');
    g_accItem = objAccordion.find('.uc_ac_box .uc_trigger').eq(g_dataLinkNum - 1);
    var accItemNumber = objAccordion.find('.uc_ac_box').length;
    
    
    if(dataLinkName != dataAccName)
    return(false);
    
    if(dataLinkName == undefined || g_dataLinkNum == '' || g_dataLinkNum > accItemNumber)
    return(false);
    
    var accItemContent = g_accItem.next();
    var accItemParent = g_accItem.parent();
    var isItemParentActive = accItemParent.hasClass("uc-item-active");
    
    e.preventDefault();
    
    if(isItemParentActive == true && isElementInViewport(objAccordion) == false){
      
      linkToSlideScroll();
      
    }else if(isItemParentActive == false && isElementInViewport(objAccordion) == false){
      
      onItemClick();	      
      accItemContent.slideDown(linkToSlideScroll);
      accItemParent.addClass("uc-item-active");
      
    }else if(isItemParentActive == false && isElementInViewport(objAccordion) == true){
      
      onItemClick();	      
      accItemContent.slideDown();
      accItemParent.addClass("uc-item-active");
    }
    
    
  }
  
  /**
  * init open links
  */
  function initLinks(){
    
    var objLinks = jQuery('.ue-link-goto-item').not(".uc-link-inited");
    
    if(objLinks.length == 0){
      return(false);
    }
    
    var elementName = objAccordion.data("name");
    
    jQuery.each(objLinks, function(index, linkElement){
      
      var objLink = jQuery(linkElement);      
      var name = objLink.data("name");
      
      if(name != elementName)
      return(true);
      
      objLink.addClass("uc-link-inited");
      
      objLink.on("click", onLinkClick);
      
    });
    
  }
  
  
  function runPostAccordion(){
    //init globals
    
    g_activeClass = "uc-item-active";    
    g_scrollOffset = objAccordion.data('offset');
    
    initLinks();
    
    //init events    
    objAccordion.on("click", ".uc_trigger", onItemClick);
    objAccordion.on("ucclick", ".uc_trigger", onItemClick);
    
    //init hash
    if(!window.location.hash)
    return(false);
        
    //find hashed tab object
    var objHashedTabs = jQuery('[id=' + window.location.hash + ']');

    objHashedTabs.each(function(){

      var objHashedTab = jQuery(this);

      //find main widget wrapper of the hashed tab
      var objHashedTabWrapper = objHashedTab.parents('.uc_material_accordion'); 

      //find if main widget wrapper is inside another accordion tab
      var objWrapperParent = objHashedTabWrapper.parents('.uc_ac_box');

      //if not than trigger click on hashed tab only and move to another hashed tab object
      //do nothing with inner accordion on this stage (if its exists)
      if(!objWrapperParent.length){
          
        setTimeout(function(){

          //find if tab is active
          var isActive = objHashedTab.hasClass(g_activeClass);

          if(isActive == true)
          return(true);

          objHashedTab.find(' > .uc_trigger').trigger('click');

        },200);

        return(true);
      }
      
      //if wrapper is inside another accordion tab
      setTimeout(function(){

        //if tab is active then skip and go to another one
        var isActive = objHashedTab.hasClass('uc-item-active');
        
        if(isActive == true)
        return(true);

        objHashedTab.find(' > .uc_trigger').trigger('click');
       
        //open parent accordion tab it wasn't open already
        var isParentTabActive = objWrapperParent.hasClass('uc-item-active');

        if(isParentTabActive == true)
        return(true);

        objWrapperParent.find(' > .uc_trigger').trigger('click');
   
      },300);

      
    });
    
  }
  
  runPostAccordion();
  
}