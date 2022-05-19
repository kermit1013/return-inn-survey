import React from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import "survey-core/defaultV2.css";
import showdown from "showdown";

import { json } from "./survey_json.js";

Survey.StylesManager.applyTheme("defaultV2");

function onValueChanged(result) {
    console.log("value changed!");
}

function onComplete(result) {
    console.log("Complete! " + result);
}

export function SurveyPage() {
    var model = new Survey.Model(json);
 //Create showdown markdown converter
var converter = new showdown.Converter();
model
    .onTextMarkdown
    .add(function (survey, options) {
        //convert the markdown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
    });
    return (
        <div className="container">
            <SurveyReact.Survey
                model={model}
                onComplete={onComplete}
                onValueChanged={onValueChanged}
            />
        </div>
    );
}
