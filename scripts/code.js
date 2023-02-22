/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(window, undefined)
{
	var nStage   = 0;
	//the text that will be searched in the document. 
	// var arrCodes = ["%FIRST_NAME%", "%LAST_NAME%", "%ADDRESS%"];
	// var arrIds   = ["inputFirstName", "inputLastName", "inputAddress"];

	function privateReplaceNext()
	{
		//properties structure for search and replace
		var oProperties = {
			"searchString"  : document.getElementById('inputFirstName').value,
			"replaceString" : document.getElementById('inputLastName').value,
			"matchCase"     : true
		};
		//execute method for search and replace
		window.Asc.plugin.executeMethod("SearchAndReplace", [oProperties]);

		// nStage++;
		// if (nStage >= arrCodes.length)
			// window.Asc.plugin.executeCommand("close", "");
	}

	window.Asc.plugin.init = function()
	{
		alert(0)
		var oThis = this;
		document.getElementById("buttonCancel").onclick = function()
		{
			window.Asc.plugin.executeCommand("close", "");
		};

		document.getElementById("buttonInsert").onclick = function()
		{
			var field_type = '${hello.world}';
			var sScript = "var oDocument = Api.GetDocument();";
			sScript += "var oParagraph = Api.CreateParagraph();";
			sScript += "oParagraph.AddText(\'" + field_type + "\');";
			sScript += "oDocument.InsertContent([oParagraph]);";
			window.Asc.plugin.info.recalculate = true;
			window.Asc.plugin.executeCommand("command", sScript);
		};

		document.getElementById("buttonOK").onclick = function()
		{
			privateReplaceNext();
		};
	};

	window.Asc.plugin.onMethodReturn = function(returnValue)
	{
		console.log("onMethodReturn")
		console.log(returnValue)
		//event return for completed method
		var _plugin = window.Asc.plugin;
		if (_plugin.info.methodName == "SearchAndReplace")
		{
			// privateReplaceNext();
		}
	};

	window.Asc.plugin.button = function(id)
	{
		if (-1 === id)
		{
			this.executeCommand("close", "");
		}
	};

})(window, undefined);
