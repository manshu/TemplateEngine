define(["../App.js","jquery-ui-resizable-fix","jquery-mCustomScrollbar"],function(a){a.controller("Cerberus.Tool.TemplateEditor.Controller.TemplateEditor",["$scope","$location","$stateParams","Cerberus.Tool.TemplateEditor.Localization","Cerberus.Tool.TemplateEngine.Service.Template","Cerberus.Tool.TemplateEditor.Service.History","Cerberus.Tool.TemplateEngine.Service.DataBag",function(a,b,c,d,e,f,g){function h(){return--i}var i=0,j=~~c.TemplateId,k=b;a.Localization=d,g.AddData("TemplateMode",TemplateMode.EditDesign),g.AddData("Template",e.GetTemplate(j)),a.$on("AddTemplateControl",function(b,c){a.AddTemplateControl(c.ControlInfo,c.VisualProperties)}),a.AddTemplateControl=function(b,c){var d=new Cerberus.Tool.TemplateEngine.Model.TemplateControl;d.ControlType=b.ControlType,d.Category=b.Category,d.VisualProperties=c,d.ControlName=b.Name,d.Id=h(),d.CreationGUID=d.Id,g.GetData("Template").then(function(b){b.TemplateControls.push(d),a.$emit("TemplateControlAdded",d)})},a.Save=function(){var b=e.SaveTemplate(g.GetData("Template"));return g.AddData("Template",b),b.then(function(b){a.$broadcast("ReloadTemplate",b)}),b},a.Exit=function(){var a=k.search().ExitUrl||"/";window.location.href=a},a.SaveExit=function(){this.Save().then(function(){a.Exit()})}}])});