define(["../../../App.js"],function(a){var b="Cerberus.Tool.TemplateEditor.Controller.ControlPluginEditor.Navigation.TableOfContentsEditor";return a.controller(b,["$scope","Cerberus.Tool.TemplateEditor.Localization","Cerberus.Tool.TemplateEngine.Service.DataBag",function(a,b,c){a.Localization=b,c.GetData("Template").then(function(b){a.Template=b}),a.ControlData=JSON.tryParse(a.SelectedTemplateControl.Content,new Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.TableOfContents),a.FilterList=function(b){return null!=a.SelectedTemplateControl&&b.Id>0&&"Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Basic.RTF"==b.ControlType},a.$watch("ControlData",function(){a.SelectedTemplateControl.Content=JSON.stringify({SourceTemplateControlId:~~a.ControlData.SourceTemplateControlId})},!0)}]),b});