import { KaotoEditorFactory } from "kaoto-ui/dist/lib/kogito-integration";
import * as EditorEnvelope from "@kie-tools-core/editor/dist/envelope";

declare const acquireVsCodeApi: any;

EditorEnvelope.init({
  container: document.getElementById("envelope-app")!,
  bus: acquireVsCodeApi(),
  editorFactory: new KaotoEditorFactory(),
});
