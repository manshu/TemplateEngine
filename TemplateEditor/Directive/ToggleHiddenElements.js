define(["../App.js"],function(a){return a.directive("csToggleHiddenElements",function(){return{restrict:"A",scope:!1,link:function(a,b){b.find(".template");a.$on("ShowHiddenElements",function(a,c){c?b.addClass("show-hidden-elements"):b.removeClass("show-hidden-elements")})}}})});