import {
  DefaultColorStyle,
  DefaultFontStyle,
  DefaultSizeStyle,
  DefaultTextAlignStyle,
  DefaultToolbar,
  DefaultToolbarContent,
  StateNode,
  TldrawUiMenuItem,
  createShapeId,
  type TLComponents,
  type TLUiOverrides,
  type TLPointerEventInfo,
  useTools,
} from "tldraw";
import { toRichText } from "@tldraw/tlschema";

class PlaceShapeTool extends StateNode {
  static override initial = "idle";
  static override children() {
    return [];
  }

  shapeType = "geo";

  override onEnter() {
    this.editor.setCursor({ type: "cross", rotation: 0 });
  }

  override onPointerDown(_info: TLPointerEventInfo) {
    const point = this.editor.inputs.getCurrentPagePoint();

    const baseProps = {
      w: 120,
      h: 100,
      color: this.editor.getStyleForNextShape(DefaultColorStyle),
      size: this.editor.getStyleForNextShape(DefaultSizeStyle),
    };
    const props = baseProps;

    const turnId = createShapeId();
    const textId = createShapeId();
    const turnLabelByType: Record<string, string> = {
      "three-turn": "LFO3",
      bracket: "LFO-Br",
      rocker: "RFO-Rk",
      counter: "RFO-Ctr",
    };
    const label = turnLabelByType[this.shapeType] ?? "Turn";

    this.editor.createShapes([
      {
        id: turnId,
        type: this.shapeType as any,
        x: point.x - 60,
        y: point.y - 50,
        props,
      },
      {
        id: textId,
        type: "text",
        x: point.x - 24,
        y: point.y - 46,
        props: {
          color: this.editor.getStyleForNextShape(DefaultColorStyle),
          size: "s",
          font: "sans",
          textAlign: this.editor.getStyleForNextShape(DefaultTextAlignStyle),
          richText: toRichText(label),
          w: 80,
          scale: 0.8,
          autoSize: true,
        },
      },
    ]);

    const turnShape = this.editor.getShape(turnId);
    const textShape = this.editor.getShape(textId);
    if (turnShape && textShape) {
      this.editor.groupShapes([turnShape, textShape]);
    }

    this.editor.setCurrentTool("select");
  }
}

export class ThreeTurnTool extends PlaceShapeTool {
  static override id = "three-turn";
  override shapeType = "three-turn";
}

export class BracketTool extends PlaceShapeTool {
  static override id = "bracket";
  override shapeType = "bracket";
}

export class RockerTool extends PlaceShapeTool {
  static override id = "rocker";
  override shapeType = "rocker";
}

export class CounterTool extends PlaceShapeTool {
  static override id = "counter";
  override shapeType = "counter";
}

export const customTools = [
  ThreeTurnTool,
  BracketTool,
  RockerTool,
  CounterTool,
];

export const customUiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    tools["three-turn"] = {
      id: "three-turn",
      label: "3-Turn",
      icon: "tool-draw",
      kbd: "3",
      onSelect: () => editor.setCurrentTool("three-turn"),
    };

    tools.bracket = {
      id: "bracket",
      label: "Bracket",
      icon: "tool-arrow",
      kbd: "b",
      onSelect: () => editor.setCurrentTool("bracket"),
    };

    tools.rocker = {
      id: "rocker",
      label: "Rocker",
      icon: "tool-line",
      kbd: "r",
      onSelect: () => editor.setCurrentTool("rocker"),
    };

    tools.counter = {
      id: "counter",
      label: "Counter",
      icon: "tool-arrow",
      kbd: "c",
      onSelect: () => editor.setCurrentTool("counter"),
    };

    return tools;
  },
};

export const customUiComponents: TLComponents = {
  Toolbar: (props) => {
    const tools = useTools();

    return (
      <DefaultToolbar {...props}>
        <TldrawUiMenuItem
          {...tools["three-turn"]}
          icon={<div className="text-sm font-semibold">3</div>}
        />
        <TldrawUiMenuItem
          {...tools.bracket}
          icon={<div className="text-sm font-semibold">B</div>}
        />
        <TldrawUiMenuItem
          {...tools.rocker}
          icon={<div className="text-sm font-semibold">R</div>}
        />
        <TldrawUiMenuItem
          {...tools.counter}
          icon={<div className="text-sm font-semibold">C</div>}
        />
        <DefaultToolbarContent />
      </DefaultToolbar>
    );
  },
};
