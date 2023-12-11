import React from "react";
import {
  RichTextEditorComponent,
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="bg-white rounded-3xl m-2 ms:m-10 p-2 md:p-10">
      <Header category={"App"} title={"Editor"} />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
