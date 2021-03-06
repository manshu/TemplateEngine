define(
	[
		"angular"
	],
	function (angular)
	{
		return angular
			.module("Cerberus.Tool.TemplateEditor.Localization", [])
			.factory("Cerberus.Tool.TemplateEditor.Localization", function ()
			{
				return {
					Generic:
					{
						Back: "Tillbaka",

						Restore: "�terst�ll",
						Save: "Spara",
						SaveExit: "Spara och avsluta",
						Cancel: "Avbryt",

						Yes: "Ja",
						No: "Nej",

						Exit: "Avsluta",

						EditSettings: "Redigera inst�llningar",

						Add: "Skapa",
						Edit: "Redigera",
						Update: "Uppdatera",
						Remove: "Ta bort",

						Cancel: "Avbryt",
						Apply: "Applicera"
					},

					TemplateControlResolutions:
					{
						ReachedMaximumResolutions: "MAXRESOLUTIONS REACHED",
						NotEnoughSpace: "NOT ENOUGH SPACE"
					},

					TemplateControlActions:
					{
						RemoveSelectedTemplateControls: "Ta bort vald(a) mallkontroll(er)",
						DistributeVisualPropertiesToAllResolutions: "Distribuera visuella egenskaper till alla uppl�sningar",
						DistributeVisualPropertiesToLowerResolutions: "Distribuera visuella egenskaper till l�gre uppl�sningar",
						DistributeVisualPropertiesToHigherResolutions: "Distribuera visuella egenskaper till h�gre uppl�sningar",
						DistributeVisualPropertiesToResolutions: "Distribuera visuella egenskaper till uppl�sning...",
						ShowHiddenControls: "Visa dolda element"
					},
					TemplateControlProperties:
					{
						Class: "Class",
						Visible: "Synlig",
						Hidden: "Dold",
						Generic: "Generiskt",
						ZIndex: "Djup",
						TemplateControlName: "Namn",
						Layout: "Layout",
						Left: "V�nster",
						Top: "Topp",
						Right: "H�ger",
						Bottom: "Botten",
						Width: "Bredd",
						Height: "H�jd",
						MinWidth: "Minimibredd",
						MinHeight: "Minimih�jd",
						Center: "Center",

						RotateZ: "Rotate",
						RotateZPlaceHolder: "Ange i deg, turn eller rad",

						FontAndColors: "Typsnitt och f�rger",
						Typeface: "Typsnitt",
						Size: "Storlek",
						Color: "F�rg",
						TextAlign: "Textjustering",
						TextTransform: "Textformat",
						NoWrap: "Radbryt ej",
						Scrollable: "Aktivera skroll",

						Background: "Bakgrund",
						Image: "Bildk�lla",
						ImageRepeat: "Bildrepetering",
						ImagePosition: "Bildjustering",

						Border: "Ram",
						BorderRadius: "Radie",
						Padding: "Inre marginal",
						Top: "Topp",
						Right: "H�ger",
						Bottom: "Botten",
						Left: "V�nster",
						TopLeft: "�vre v�nstra",
						TopRight: "�vre h�gra",
						BottomRight: "Nedre h�gra",
						BottomLeft: "Nedre v�nstra",

						Shadows: "Skuggor",
						BoxShadow: "Box",
						TextShadow: "Text",
						HorizontalOffset: "Horisontell offset",
						VerticalOffset: "Vertikal offset",
						InnerShadow: "Inner Shadow",
						BlurRadius: "Suddighetsradie",
						SpreadRadius: "Spridningsradie",

						Opacity: "Genomskinlighet",
						OpacityPlaceHolder: "Intervall: 0.0 - 1.0",
						ImageSource: "Bildk�lla",
						ImageSize: "Bildstorlek",
						ImageSourcePlaceHolder: "S�kv�g till bild",

						Content: "Inneh�ll",

						BrowserDefault: "Standardv�rde",
						BorderSolid: "Heldragen",
						BorderDashed: "Streckad",
						BorderDotted: "Punkter",
						BorderGroove: "Neds�nkt",
						BorderDouble: "Dubbel heldragen",
						BorderInset: "Inf�lld",
						BorderOutset: "Utf�lld",
						Repeat: "Repetera",
						RepeatHorizontally: "Repetera horisontellt",
						RepeatVertically: "Repetera vertikalt",
						DontRepeat: "Repetera ej",

						Contain: "Rym omr�de",
						Cover: "T�ck omr�de",

						Misc: "Diverse",
						ItemSpacing: "Objektavst�nd"
					},

					ControlPluginNames:
					{
						Text: "Text",
						Link: "L�nk",
						Menu: "Meny",
						Sharer: "Sharer",
						TableOfContents: "Tabellinneh�ll",
						YouTube: "YouTube",
						RTF: "Formaterad text",
						RSS: "RSS",
						ArticleList: "Article List",
						Video: "Video"
					},

					TemplateControlPlugin:
					{
						Link:
						{
							Text: "Inneh�ll",
							Tooltip: "Tooltip",
							Url: "Url",
							Target: "M�l",

							TooltipPlaceHolder: "Beskrivande text",
							TextPlaceHolder: "Ange inneh�ll",
							UrlPlaceHolder: "L�nk att navigera till vid klick"
						},
						YouTube:
						{
							VideoId: "Video Id",
							VideoIdPlaceHolder: "Video Id",
							AutoPlay: "Spela upp automatiskt",
							StartTime: "Starttid",
							LoopInfinitely: "Repetera",
							ShowControls: "Visa spelknappar",
							DisableKeyboard: "Inaktivera tangentbordsgenv�gar",
							HideYouTubeBrand: "D�lj YouTube logga",
							ShowInfo: "Visa videoinfo"
						},
						TableOfContents:
						{
							Source: "Source"
						},
						RSS:
						{
							Url: "Url",
							ShowTitle: "Titel",
							ShowDescription: "Beskrivning",
							ShowStoryDescription: "Nyhetsbeskrivning",
							ShowStoryDate: "Nyhetsdatum",
							MaxStories: "Antal nyheter"
						}
					}
				}
			});
	});