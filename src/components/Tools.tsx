import {
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

class PlaceShapeTool extends StateNode {
  static override initial = "idle";
  static override children() {
    return [];
  }

  targetShapeType = "geo";

  override onEnter() {
    this.editor.setCursor({ type: "cross", rotation: 0 });
  }

  override onPointerDown(_info: TLPointerEventInfo) {
    const point = this.editor.inputs.currentPagePoint;

    this.editor.createShapes([
      {
        id: createShapeId(),
        type: this.targetShapeType as any,
        x: point.x - 60,
        y: point.y - 50,
        props: { w: 120, h: 100 },
      },
    ]);

    this.editor.setCurrentTool("select");
  }
}

export class ThreeTurnTool extends PlaceShapeTool {
  static override id = "three-turn";
  override targetShapeType = "three-turn";
}

export class BracketTool extends PlaceShapeTool {
  static override id = "bracket";
  override targetShapeType = "bracket";
}

export class RockerTool extends PlaceShapeTool {
  static override id = "rocker";
  override targetShapeType = "rocker";
}

export class CounterTool extends PlaceShapeTool {
  static override id = "counter";
  override targetShapeType = "counter";
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
        <TldrawUiMenuItem {...tools["three-turn"]} />
        <TldrawUiMenuItem {...tools.bracket} />
        <TldrawUiMenuItem {...tools.rocker} />
        <TldrawUiMenuItem {...tools.counter} />
        <DefaultToolbarContent />
      </DefaultToolbar>
    );
  },
};
