;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="0e811b1f21a00bfe120ba95d05dfcb6d";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["u8NTq6ZqBf1A"]={appId:"Y7XQHZ2XJNLN",scope:{}};;CloudflareApps.installs["u8NTq6ZqBf1A"].options={"css":"#header-inner \u003e div.descriptionwrapper\n{\ndisplay: none;\n}\n\n#div-gpt-ad-1664102343241-0 {\ndisplay: none!important;\n}\n\n#div-gpt-ad-1642994917966-0 {\ndisplay: none;\n}\n\n#div-gpt-ad-1627316488692-0 {\ndisplay: none;\n}\n\n#PageList1_select \u003e option:nth-child(1)\n{\ndisplay: none;\n}\n\n.gs-previewTitle a:hover {color: #ad3a2b!important;}\n\n.gs-previewTitle a:visited {color: #ad3a2b!important;}\n\n.gs-previewTitle a:active {color: #ad3a2b!important;}\n\n.gs-previewTitle a:link {color: #ad3a2b!important;}\n\n.gs-previewTitle a:visited {color: #ad3a2b!important;}\n\n.gs-previewTitle a:active {color: #ad3a2b!important;}\n\n.gs-previewTitle\n{\ncolor: #ad3a2b!important;\n}\n\n.gsc-input-box {\npadding-top: 0px!important;\npadding-bottom: 0px!important;\nborder-top-left-radius: 0px!important;\nborder-bottom-left-radius: 0px!important;\n}\n\n.gsc-modal-background-image\n{\nbackground-color: transparent!important;\n}\n\n.gsc-search-button-v2\n{\nbackground-color: #ad3a2b!important;\nborder: 0px solid #ad3a2b!important;\nborder-color: #ad3a2b!important;\npadding: 10px 27px!important;\nborder-radius: 0px!important;\nheight: 32px;\n}\n.gsc-control-cse\n{\nheight: 35px!important; \nmargin-top: -5px!important; \nbackground-color: black!important; \nborder: 0px!important; \npadding: 10px!important;\n}\n\n::-webkit-scrollbar {\n  width: 20px!important; \n}\n\n::-webkit-scrollbar-track{\nborder: 1px  solid #ad3a2b!important; \n}\n\n::-webkit-scrollbar-track {\n  background: black; \n}\n \n  \n::-webkit-scrollbar-thumb {\n  background: #ad3a2b!important; \n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: black!important;\nborder: 1px  solid #ad3a2b!important;\n}\n\nimg:hover {background-color: black!important;}\nimg:active {background-color: black!important;}\n#azlist a:link {text-decoration: none!important;}\n#azlist a:link {color: #cccccc;}\n#azlist a:link {border: 1px  solid #000000!important;}\n#azlist a:visited {color: #ad3a2b!important;}\n#azlist a:visited {border: 1px  solid #000000!important;}\n#azlist a:hover {background-color: #ad3a2b!important;}\n#azlist a:hover {color: #ffffff!important;}\n#azlist a:hover {border: 1px  solid black!important;}\n#azlist a:active {background-color: black!important;}\n#azlist a:active {color: #ad3a2b!important;}\n#azlist a:active {border: 1px  solid #ad3a2b!important;}\n\n#descrgame a:link {text-decoration: none!important;}\n#descrgame a:link {color: #cccccc!important;}\n#descrgame a:link {border: 1px  solid #000000!important;}\n#descrgame a:visited {color: #ad3a2b!important;}\n#descrgame a:visited {border: 1px  solid #000000!important;}\n#descrgame a:hover {background-color: #ad3a2b!important;}\n#descrgame a:hover {color: #ffffff!important;}\n#descrgame a:hover {border: 1px  solid black!important;}\n#descrgame a:active {background-color: black!important;}\n#descrgame a:active {color: #ad3a2b!important;}\n#descrgame a:active {border: 1px  solid #ad3a2b!important;}\n\n\n#blog-pager\n{\nmargin-top:0px!important;\n}\n\ncloudflare-app[app=\"back-to-top-button\"]\n{\nmargin-bottom:-26px!important;\nmargin-right:10%!important;\n}\n\n\nbody {\noverflow-y: scroll!important;\noverflow-x: hidden;\n}\n\n::webkit-scrollbar\n{\n   display: block!important;\n}\n\n.post-body img, .post-body .tr-caption-container, .Profile img, .Image img, .BlogList .item-thumbnail img{\nbackground: transparent!important;\nborder: 0px!important;\n}\n\n.mobile-index-title {\nwidth: 100%!important;\n}\n\n.tabs .widget h2 {\ndisplay: block!important;\nposition: absolute;\nmargin-top: 7px!important;\nmargin-left: 10px!important;\nfont-family: verdana,geneva,sans-serif;\nfont-size: 14px;\ncolor: #ad3a2b;\nfont-weight: bold;\n}\n\nhtml .tabs-inner .widget select\n{\ncolor: transparent!important;\n}\n\n#PageList1_select \u003e option:nth-child(n+0)\n{\ncolor: #ad3a2b!important;\nbackground: black;\nfont-size: 14px;\nfont-family: verdana,geneva,sans-serif;\nfont-weight: bold;\n}\n\nselect {border-color: #ad3a2b;}\noption {color: #cccccc;}\noption {border-color: #ad3a2b;}\np[style]{color: #cccccc;}\n\nhtml .Header h1\n{\ncolor: #ad3a2b!important;\nmargin-top: 15px;\n}\n\n#header-inner \u003e div.titlewrapper \u003e h1 \u003e a\n{\ncolor: #ad3a2b!important;\n}\n\n::-webkit-scrollbar {\n  width: 14px; \n}\n\n::-webkit-scrollbar-track {\n  background: black; \n}\n \n  \n::-webkit-scrollbar-thumb {\n  background: #ad3a2b; \n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: black; \nborder: 1px  solid #ad3a2b;\n}\n\n\n.mobile-index-arrow\n{\ncolor: #ad3a2b!important;\n}\n\n.mobile-index-title\n{\ncolor: #cccccc\n}\n\n.mobile-date-outer\n{\nborder-bottom: 1px solid #ad3a2b!important;\n}\n\n.mobile-link-button\n{\nbackground-color: black!important;\nborder: 1px solid #ad3a2b!important;\nborder-radius: 0px!important;\ncolor: #ad3a2b!important;\n}\n\nhtml .content-outer, html .content-inner, html .header-inner, html .header-inner .section, html .tabs-outer, html .tabs-inner, html .main-inner, html .footer-outer, html .footer-inner, html .main-inner .column-center-inner .section, html .section\n{\nbackground-color: black;\n}\n\n.pagelist-arrow {\nborder-left: 1px solid #b33132!important;\ncolor: #ad3a2b!important;\n}\n\nbody \u003e div.content \u003e div.content-outer\n{\nbackground: black!important;\n}\n\nbody\n{\nbackground: black!important;\n}\n\nbody \u003e div.content \u003e div.content-outer\n{\nmargin-left: auto;\nmargin-right: auto;\nmax-width: 748px;\nbackground: black!important;\n}\n\n#Blog1 \u003e div.blog-posts.hfeed \u003e div \u003e div \u003e div \u003e div.post.hentry.uncustomized-post-template \u003e h3\n{\ncolor: #ad3a2b;\ntext-align: center!important;\n}\n\n#PageList1 \u003e div\n{\nborder-top: 1px solid #ad3a2b;\nborder-bottom: 1px solid #ad3a2b;\n}\n\n.mobile .tabs-inner .PageList .widget-content .pagelist-arrow {\nborder-left: 1px solid #ad3a2b;\ncolor: #ad3a2b;\n}\n\nimg[src*=w320-h240],\nimg[src*=w320-h200],\nimg[src*=w320-h245],\nimg[src*=w320-h238],\nimg[src*=w320-h206],\nimg[src*=s280],\nimg[src*=s264],\nimg[src*=s270],\nimg[src*=w728-h284],\nimg[src*=s320]\n { display: none!important; }\n\nimg[src*=s72]\n{ display: block!important; } \n\n\n\n.comment-block {\nmargin-left:  0px!important;\n}\n\n.avatar-image-container {\ndisplay: none !important;\n}\n\ndiv:nth-child(1) \u003e iframe {\nmax-width: 100%!important; \nmax-height: 566px!important; \n}\n\n#azlist \u003e a{ text-align: left; font-family: verdana,geneva,sans-serif; display: block;}\n\n#playbutton\n {\n    padding: 0px!important;\n    margin: 0px!important;\n    border: 0px!important;\n    width: 100%!important;\n    background: black!important;\n    box-sizing: unset!important;\n}\n\n#playbutton \u003e img\n {\n    padding: 0px!important;\n    margin: 0px!important;\n    border: 0px!important;\n    width: 100%!important;\n    background: black!important;\n    box-sizing: unset!important;\n}\n\n#azlist\n{\n    font-size: 150%;\n    line-height: 1.6;\n    color: #ffffff;\n}\n\n#azlist \u003e h2{\nmargin-top: 1em;\nmargin-bottom: 1em;\ncolor: #ad3a2b!important;\n}\n\n#comments \u003e div.comment-form\n{\n    max-width: 100%;\n}\n#scrimage {\ndisplay:none;\n}\n\n#comments \u003e div.comment-form\n{\n    max-width: 100%;\n}\n\n\n#Blog1 \u003e div.blog-posts.hfeed \u003e div.status-msg-wrap\n{\ndisplay: none;}\n\n#review \u003e div:nth-child(1),\n#review \u003e div:nth-child(2),\n#review \u003e div:nth-child(3)\n{\nmargin-top: 1em;}\n\n#header-inner \u003e div.descriptionwrapper{\ntext-align: justify;}\n\nhtml .mobile-index-contents .post-body{\ntext-align: justify;}\n\nhtml .Header h1{\nfont-size: 22px!important;\ntext-align: center;}\n\n#blog-pager \u003e div.mobile-desktop-link\n{\ndisplay: none;}\nbody \u003e div.content \u003e div.content-outer \u003e div.fauxborder-left.content-fauxborder-left \u003e div.content-inner \u003e footer \u003e div\n{\ndisplay: none;}\n\n#Blog1 \u003e div.blog-posts.hfeed \u003e div \u003e div \u003e div \u003e div.post.hentry.uncustomized-post-template \u003e div.post-footer{\ndisplay: none;}\n#navbar{\ndisplay: none;}\n\n#consolelist  {\ndisplay: none;\n}"};;CloudflareApps.installs["u8NTq6ZqBf1A"].URLPatterns=["^www.retrogames.onl/?.*$"];;if(CloudflareApps.matchPage(CloudflareApps.installs['u8NTq6ZqBf1A'].URLPatterns)){(function(){var options=CloudflareApps.installs['u8NTq6ZqBf1A'].options
var style=document.createElement('style')
document.head.appendChild(style)
function updateStyle(){style.innerHTML=options.css}
updateStyle()
window.CloudflareApps.installs['u8NTq6ZqBf1A'].scope={setOptions:function(nextOptions){options=nextOptions
updateStyle()}}})()}