if($(".post .entry p img").wrap(function(){return"<div class='picture'><a href='"+$(this).attr("src")+"' data-lightbox='image' class='image'></a></div>"}),lightbox.option({resizeDuration:0,fadeDuration:300,imageFadeDuration:300,wrapAround:!0,disableScrolling:!0,fitImagesInViewport:!0,showImageNumberLabel:!1}),$(".post .entry p a").attr("target","_blank"),$(".post .entry .fotorama").fotorama({width:"100%",maxwidth:"100%",ratio:16/9,allowfullscreen:"native",fit:"cover"}),$(".post .entry .youtube").each(function(){$(this).append($("<img/>",{src:"https://img.youtube.com/vi/"+this.id+"/hqdefault.jpg","class":"lazyload","data-src":"https://img.youtube.com/vi/"+this.id+"/hqdefault.jpg"})),$(this).append($("<div/>",{"class":"play"})),$(document).delegate("#"+this.id,"click",function(){var t="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";$(this).data("params")&&(t+="&"+$(this).data("params"));var e=$("<iframe/>",{frameborder:"0",src:t});$(this).html(e).addClass("frame"),$(this).html(e).removeClass("youtube"),$(this).html(e).wrap("<div class='video'/>"),$(this).fitVids()})}),$(".search-button").click(function(){$(".search").toggleClass("open")}),SimpleJekyllSearch({searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),json:base_url+"/search.json",searchResultTemplate:'<li><a href="{url}" title="{title}">{title}</a></li>',noResultsText:'<li class="no-results">\u0423\u0432\u044b, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.</li>',limit:10,fuzzy:!1}),$(document).ready(function(){$(".sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close").on("click touchstart",function(t){$(".sliding-panel-content,.sliding-panel-fade-screen").toggleClass("is-visible"),t.preventDefault()})}),jQuery.extend(jQuery.fn,{toplinkwidth:function(){var t=jQuery("").outerWidth(),e=jQuery(this).children("a").outerWidth(!0);return jQuery(window).width()/2-t/2-e<0?(jQuery(this).hide(),!1):(jQuery(window).scrollTop()>=900&&jQuery(this).show(),!0)}}),jQuery(function(t){var e=t(".scroll-to-top");t(window).scroll(function(){t(window).scrollTop()>=900&&e.toplinkwidth()?e.fadeIn(300):e.fadeOut(300)}),e.click(function(){return t("body,html").animate({scrollTop:0},1e3),!1})}),function(t,e,a){(e[a]=e[a]||[]).push(function(){try{e.yaCounter40455205=new Ya.Metrika({id:40455205,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(t){}});var i=t.getElementsByTagName("script")[0],n=t.createElement("script"),r=function(){i.parentNode.insertBefore(n,i)};n.type="text/javascript",n.async=!0,n.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==e.opera?t.addEventListener("DOMContentLoaded",r,!1):r()}(document,window,"yandex_metrika_callbacks"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){function selectorFunction(){return window.document.getElementsByClassName("hyphenate")}$(".entry p, .entry [left], .entry [aside], .entry [caption]").attr("class","hyphenate"),$(".entry [quote]").attr("class","donthyphenate")}