define(["angular"],function(a){namespace("Cerberus.Tool.TemplateEngine.Service").TemplateLocalStorageProvider=a.extend(function(a){function b(){localStorage.setItem("TemplateRepository",JSON.stringify(c))}var c;this.Configure=function(){},c=JSON.parse(localStorage.getItem("TemplateRepository"))||{Templates:{}},this.GetTemplate=function(b){return a.when(c.Templates[b])},this.RemoveTemplate=function(d){return delete c.Templates[d],b(),a.when(!0)},this.SaveTemplate=function(d){return a.when(d).then(function(a){a.Id<=0&&(a.Id=~~_.max(c.Templates,function(a){return a.Id}).Id+1),c.Templates[a.Id]=a;var d=a.TemplateControls,e=a.Resolutions,f=_.where(e,function(a){return 0===a.Id}),g=~~Math.max(0,_.max(d,function(a){return a.Id}).Id),h=~~Math.max(0,_.max(f,function(a){return a.Id}).Id),i=_.where(d,function(a){return a.Id<0});return _.forEach(f,function(a){a.Id=++h}),_.forEach(i,function(a){var b=a.Id;a.Id=++g,_.forEach(e,function(c){var d=_.find(c.TemplateControlVisualProperties,{Key:b});d.Key=a.Id})}),b(),a})},this.CloneTemplate=function(){},this.GetTemplates=function(){var b=_.map(c.Templates,function(a){return a});return a.when(b)},this.GetTemplateInfo=function(a){return this.GetTemplate(a)},this.SaveTemplateInfo=function(){},this.GetDocument=function(){},this.SaveDocument=function(){},this.GetControlPlugins=function(){},this.GetControlPlugins=function(){return a.when([{Id:1,Name:"Text",Category:"Basic",ControlType:"Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Basic.Text",ImageUrl:"Text.png"},{Id:2,Name:"Video",Category:"Basic",ControlType:"Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Basic.Video",ImageUrl:"Video.png"},{Id:3,Name:"YouTube",Category:"Basic",ControlType:"Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Basic.YouTube",ImageUrl:"YouTube.png"},{Id:4,Name:"Link",Category:"Navigation",ControlType:"Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Navigation.Link",ImageUrl:"Link.png"},{Id:5,Name:"RSS",Category:"SocialMedia",ControlType:"Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.SocialMedia.RSS",ImageUrl:"RSS.png"},{Id:6,Name:"Sharer",Category:"SocialMedia",ControlType:"Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.SocialMedia.Sharer",ImageUrl:"Sharer.png"}])}},{$inject:["$q"]})});