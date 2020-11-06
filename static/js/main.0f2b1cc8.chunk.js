(this["webpackJsonpglasswall-desktop"]=this["webpackJsonpglasswall-desktop"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"name":"glasswall-desktop","version":"0.1.5","tagVersion":"v0.1.5","repo":"glasswall-desktop","repo_owner":"k8-proxy","app_name":"glasswall-desktop","private":true,"homepage":"https://glasswall-desktop.com/","devDependencies":{"webpack":"4.42.0","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","gh-pages":"^3.1.0"},"dependencies":{"clean":"^4.0.2","react":"^16.13.1","react-dom":"^16.13.1","react-ga":"^3.2.0","react-scripts":"3.4.3"},"scripts":{"start":"react-scripts start","test":"react-scripts test","eject":"react-scripts eject","build":"react-scripts build","predeploy":"npm run build","deploy_test":"gh-pages -d build","deploy":"cp CNAME ./build ; gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},,function(e,a,t){e.exports=t.p+"static/media/header-lens.78069521.png"},,,,function(e,a,t){e.exports=t.p+"static/media/logo.4d89dba8.svg"},function(e,a,t){e.exports=t.p+"static/media/better-kubernetes.3242726a.svg"},function(e,a,t){e.exports=t.p+"static/media/multi-cluster-management.6cb8bb79.svg"},function(e,a,t){e.exports=t.p+"static/media/workspaces.1e140575.svg"},function(e,a,t){e.exports=t.p+"static/media/built-in-prometheus-stats.7c7b1c76.svg"},function(e,a,t){e.exports=t.p+"static/media/context-aware-terminal.b0f068bb.svg"},function(e,a,t){e.exports=t(21)},,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(6),r=t.n(s),c=t(7),i=t.n(c),m=t(1),o=t(4);console.log("package"+m.owner);var d="https://github.com/"+m.repo_owner+"/"+m.repo+"/releases/download/"+m.tagVersion+"/"+m.app_name+"-"+m.version+".dmg",p="https://github.com/"+m.repo_owner+"/"+m.repo+"/releases/download/"+m.tagVersion+"/"+m.app_name+"-Setup-"+m.version+".exe",u="https://github.com/"+m.repo_owner+"/"+m.repo+"/releases/download/"+m.tagVersion+"/"+m.app_name+"-"+m.version+".snap",E="https://github.com/"+m.repo_owner+"/"+m.repo+"/releases/",v=function(){var e=function(){var e=window.navigator.userAgent,a=window.navigator.platform,t=null;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(a)?t="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(a)?t="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(a)?t="Windows":/Android/.test(e)?t="Android":!t&&/Linux/.test(a)&&(t="Linux"),t}();return"Mac OS"==e||"iOS"==e?d:"Windows"==e?p:"Linux"==e?u:d};function f(e){var a,t,l;a="download",t="platform type:"+e,l="Download clicked for platform "+e,o.a.event({category:a,action:t,label:l})}function g(){return n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark navbar-custom fixed-top"},n.a.createElement("a",{className:"navbar-brand",href:"index.html"},n.a.createElement("img",{src:i.a,alt:"alternative"}),n.a.createElement("span",null," Glasswall Desktop Application")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-awesome fas fa-bars"}),n.a.createElement("span",{className:"navbar-toggler-awesome fas fa-times"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link page-scroll",href:"#header"},"HOME ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link page-scroll",href:"#features"},"FEATURES")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link page-scroll",href:"#demo"},"DEMO")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:E},"RELEASES"))),n.a.createElement("span",{className:"nav-item social-icons"},n.a.createElement("span",{className:"fa-stack"},n.a.createElement("a",{target:"_blank",href:"https://github.com/k8-proxy/glasswall-desktop"},n.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fab fa-github fa-stack-1x"}))))))}function N(){return n.a.createElement("div",{className:"spinner-wrapper"},n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"bounce1"}),n.a.createElement("div",{className:"bounce2"}),n.a.createElement("div",{className:"bounce3"})))}var h=t(3),b=t.n(h);function w(){return n.a.createElement("header",{id:"header",className:"header"},n.a.createElement("div",{className:"header-content"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-container header-img"},n.a.createElement("h1",null,"Glasswall Desktop Application ",n.a.createElement("br",null),"For ",n.a.createElement("span",{id:"js-static"},"Rebuild Files")),n.a.createElement("p",{className:"p-large"},"Glasswall desktop application provides multi file drag and drop rebuild workflow. Its open source. Download it today!"),n.a.createElement("a",{className:"btn-solid-lg",href:v()},n.a.createElement("i",{className:"fas fa-download"}),"Download"),n.a.createElement("a",{href:d,onClick:function(){f("Mac")}},n.a.createElement("i",{className:"supported-os-icon fab fa-apple"})),n.a.createElement("a",{href:p,onClick:function(){f("Windows")}},n.a.createElement("i",{className:"supported-os-icon fab fa-windows"}," ")),n.a.createElement("a",{href:u,onClick:function(){f("Linux")}},n.a.createElement("i",{className:"supported-os-icon fab fa-linux"})))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"image-container header-img"},n.a.createElement("img",{className:"img-fluid",src:b.a,alt:"alternative"})))),n.a.createElement("div",{className:"row"}))))}var k=t(8),y=t.n(k);function x(){return n.a.createElement("div",{id:"features",className:"basic-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-7"},n.a.createElement("img",{className:"img-fluid",src:y.a,alt:"alternative"})),n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("div",{className:"text-container"},n.a.createElement("h3",null,"The File Drop"),n.a.createElement("p",null,"Just drag and drop the files from your local hard disk, and the Glasswall Desktop will rebuild them using the Glasswall Rebuild API (currently hosted on Azure)."))))))}var D=t(9),C=t.n(D);function S(){return n.a.createElement("div",{className:"basic-5"},n.a.createElement("div",{className:"third"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"text-container margin-top-80"},n.a.createElement("h3",null,"Directory Structure"),n.a.createElement("p",null,"Support different directory structures, give freedom to save the files at custom directory structure or at default location by maintaining the same directory as that of the parent folder."))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("img",{className:"img-fluid",src:C.a,alt:"alternative"}))))))}var A=t(10),G=t.n(A);function M(){return n.a.createElement("div",{className:"basic-3"},n.a.createElement("div",{className:"fourth"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("img",{className:"img-fluid",src:G.a,alt:"alternative"})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"text-container margin-top-80"},n.a.createElement("h3",null,"Rebuild Engine"),n.a.createElement("p",null,"Access the Glasswall Rebuild engine which creates safe files into a known good state (no malicious content).")))))))}var _=t(11),L=t.n(_);function W(){return n.a.createElement("div",{className:"basic-5"},n.a.createElement("div",{className:"fifth"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"text-container margin-top-80"},n.a.createElement("h3",null,"Platform Support"),n.a.createElement("p",null,"Support multiple platform Windows, MAC, and Linux, so that user is able to install and use the application on every platform."))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("img",{className:"img-fluid",src:L.a,alt:"alternative"}))))))}var I=t(12),O=t.n(I);function P(){return n.a.createElement("div",{className:"basic-3"},n.a.createElement("div",{className:"sixth"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("img",{className:"img-fluid",src:O.a,alt:"alternative"})),n.a.createElement("div",{className:"col-lg-6 margin-top-80"},n.a.createElement("div",{className:"text-container"},n.a.createElement("h3",null,"User-Friendly UI"),n.a.createElement("p",null,"User-friendly UI so that users can get all the information on the UI itself. Dropped file, Clean File, and a report generated is viewable just on a single click.")))))))}function R(){return n.a.createElement("div",{id:"demo",className:"basic-1"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("h2",null,"How it Works"),n.a.createElement("div",{className:"p-heading p-large"},"The live demo of Glasswall Desktop features."))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"image-container"},n.a.createElement("div",{className:"video-wrapper"},n.a.createElement("a",{className:"popup-youtube",href:"https://www.youtube.com/watch?v=Ww_Z6ErLGyg&feature=youtu.be","data-effect":"fadeIn"},n.a.createElement("img",{className:"img-fluid",src:b.a,alt:"alternative"}),n.a.createElement("span",{className:"video-play-button"},n.a.createElement("span",null)))))))))}function U(){return n.a.createElement("div",{id:"download",className:"basic-4"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-container text-center"},n.a.createElement("h2",null,"Download ",n.a.createElement("span",{className:"blue"},"Glasswall Desktop")),n.a.createElement("p",{className:"p-large"},"Glasswall desktop is a desktop based application that provides multi file drag and drop rebuild workflow."),n.a.createElement("a",{className:"btn-solid-lg",href:v()},n.a.createElement("i",{className:"fas fa-download"})," Download"),n.a.createElement("a",{href:d,onClick:function(){f("Mac")}},n.a.createElement("i",{className:"supported-os-icon fab fa-apple"})),n.a.createElement("a",{href:p,onClick:function(){f("Windows")}},n.a.createElement("i",{className:"supported-os-icon fab fa-windows"}," ")),n.a.createElement("a",{href:u,onClick:function(){f("Linux")}},n.a.createElement("i",{className:"supported-os-icon fab fa-linux"})))))))}function F(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"footer-col"},n.a.createElement("h4",null,"About Glasswall Desktop"),n.a.createElement("p",null,"Glasswall Desktop was originally developed by Glasswall Solutions Ltd."))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"footer-col middle"},n.a.createElement("h4",null,"Resources"),n.a.createElement("ul",{className:"list-unstyled li-space-lg"},n.a.createElement("li",{className:"media"},n.a.createElement("i",{className:"fa fa-angle-double-right"}),n.a.createElement("div",{className:"media-body"},n.a.createElement("a",{href:"https://github.com/k8-proxy/glasswall-desktop",className:"primary"},"How to Contribute?"))),n.a.createElement("li",{className:"media"},n.a.createElement("i",{className:"fa fa-angle-double-right"}),n.a.createElement("div",{className:"media-body"},n.a.createElement("a",{href:"https://github.com/k8-proxy/glasswall-desktop",className:"primary"},"Source Code"))),n.a.createElement("li",{className:"media"},n.a.createElement("i",{className:"fa fa-angle-double-right"}),n.a.createElement("div",{className:"media-body"},n.a.createElement("a",{href:"https://github.com/k8-proxy/glasswall-desktop/blob/main/LICENSE",className:"primary"},"EULA"))),n.a.createElement("li",{className:"media"},n.a.createElement("i",{className:"fa fa-angle-double-right"}),n.a.createElement("div",{className:"media-body"},n.a.createElement("a",{href:"https://github.com/k8-proxy/glasswall-desktop/blob/main/LICENSE",className:"primary"},"Privacy Policy")))))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"footer-col last"},n.a.createElement("h4",null,"Community"),n.a.createElement("span",{className:"fa-stack"},n.a.createElement("a",{target:"_blank",href:"https://github.com/k8-proxy/glasswall-desktop"},n.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fab fa-github fa-stack-1x"}))))))))}function j(){return n.a.createElement("div",{className:"copyright"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("p",{className:"p-small"},"Copyright \xa9 Copyright 2020 - Glasswall Solutions Ltd. All Rights Reserved.")))))}t(20);var T=function(){return o.a.initialize("G-5B0DKKTM6X"),n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement(g,null),n.a.createElement(w,null),n.a.createElement(x,null),n.a.createElement(S,null),n.a.createElement(M,null),n.a.createElement(W,null),n.a.createElement(P,null),n.a.createElement(R,null),n.a.createElement(U,null),n.a.createElement(F,null),n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.0f2b1cc8.chunk.js.map