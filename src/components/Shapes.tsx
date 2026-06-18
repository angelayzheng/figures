import {
  Arc2d,
  Group2d,
  HTMLContainer,
  PathBuilder,
  type TLBaseShape,
  ShapeUtil,
  Vec,
  type TLResizeInfo,
} from "tldraw";

type ThreeTurnShape = TLBaseShape<
  "three-turn",
  { w: number; h: number; thickness: number }
>;
type BracketShape = TLBaseShape<"bracket", { w: number; h: number }>;
type RockerShape = TLBaseShape<"rocker", { w: number; h: number }>;
type CounterShape = TLBaseShape<"counter", { w: number; h: number }>;

export class ThreeTurnShapeUtil extends ShapeUtil<any> {
  static override type = "three-turn" as const;

  getDefaultProps(): ThreeTurnShape["props"] {
    return { w: 100, h: 300, thickness: 2 };
  }

  getGeometry(shape: ThreeTurnShape) {
    const { w, h } = shape.props;
    const startX = 0;
    const startY = 0;
    const control1X = w * 0.1;
    const control1Y = h * 0.2;
    const control2X = w * 0.1;
    const control2Y = h * 0.45;
    const middleX = 0;
    const middleY = h * 0.5;
    const control3X = control2X;
    const control3Y = h - control2Y;
    const control4X = control1X;
    const control4Y = h - control1Y;
    const endX = 0;
    const endY = h;

    return new PathBuilder()
      .moveTo(startX, startY)
      .cubicBezierTo(
        middleX,
        middleY,
        control1X,
        control1Y,
        control2X,
        control2Y,
      )
      .cubicBezierTo(endX, endY, control3X, control3Y, control4X, control4Y)
      .toGeometry();
  }

  component(shape: ThreeTurnShape) {
    const { w, h } = shape.props;
    const startX = 0;
    const startY = 0;
    const control1X = w * 0.1;
    const control1Y = h * 0.2;
    const control2X = w * 0.1;
    const control2Y = h * 0.45;
    const middleX = 0;
    const middleY = h * 0.5;
    const control3X = control2X;
    const control3Y = h - control2Y;
    const control4X = control1X;
    const control4Y = h - control1Y;
    const endX = 0;
    const endY = h;

    return (
      <HTMLContainer style={{ width: w, height: h }}>
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
          <path
            d={`M ${startX} ${startY} C ${control1X} ${control1Y} ${control2X} ${control2Y} ${middleX} ${middleY} M ${middleX} ${middleY} C ${control3X} ${control3Y} ${control4X} ${control4Y} ${endX} ${endY}`}
            stroke="currentColor"
            strokeWidth={shape.props.thickness}
            fill="none"
          />
        </svg>
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: ThreeTurnShape) {
    const { w, h } = shape.props;
    const startX = 0;
    const startY = 0;
    const control1X = w * 0.1;
    const control1Y = h * 0.2;
    const control2X = w * 0.1;
    const control2Y = h * 0.45;
    const middleX = 0;
    const middleY = h * 0.5;
    const control3X = control2X;
    const control3Y = h - control2Y;
    const control4X = control1X;
    const control4Y = h - control1Y;
    const endX = 0;
    const endY = h;

    const path = new Path2D();
    path.moveTo(startX, startY);
    path.bezierCurveTo(
      control1X,
      control1Y,
      control2X,
      control2Y,
      middleX,
      middleY,
    );
    path.bezierCurveTo(control3X, control3Y, control4X, control4Y, endX, endY);
    return path;
  }

  onResize(shape: any, info: TLResizeInfo<any>) {
    return {
      props: {
        w: shape.props.w * info.scaleX,
        h: shape.props.h * info.scaleY,
      },
    };
  }

  onRotate(_initial: any, current: any) {
    return {
      id: current.id,
      type: current.type,
      rotation: current.rotation,
    };
  }
}

export class BracketShapeUtil extends ShapeUtil<any> {
  static override type = "bracket" as const;

  getDefaultProps(): BracketShape["props"] {
    return { w: 200, h: 100 };
  }

  getGeometry(shape: BracketShape) {
    const { w, h } = shape.props;

    const leftTop = Vec.From({ x: w * 0.24, y: h * 0.2 });
    const leftMiddle = Vec.From({ x: w * 0.42, y: h * 0.5 });
    const leftBottom = Vec.From({ x: w * 0.24, y: h * 0.8 });

    const leftTopArc = new Arc2d({
      center: Vec.From({ x: w * 0.29, y: h * 0.35 }),
      start: leftTop,
      end: leftMiddle,
      sweepFlag: 1,
      largeArcFlag: 0,
    });

    const leftBottomArc = new Arc2d({
      center: Vec.From({ x: w * 0.29, y: h * 0.65 }),
      start: leftMiddle,
      end: leftBottom,
      sweepFlag: 0,
      largeArcFlag: 0,
    });

    return new Group2d({
      children: [leftTopArc, leftBottomArc],
    });
  }

  component(shape: BracketShape) {
    const { w, h } = shape.props;
    const centreX = w * 0.5;
    const centreY = h * 0.5;
    const xOffsetScale = 0.785;

    // Keep the original curve's relative offsets, but from a centered anchor.
    const endX = w * (0.5 + (501 / 717 - 90 / 717) * xOffsetScale);
    const endY =
      h * (0.5 + (37.714263916015625 / 500 - 140.71426391601562 / 500));
    const control1X = w * (0.5 + (185 / 717 - 90 / 717) * xOffsetScale);
    const control1Y =
      h * (0.5 + (-0.285736083984375 / 500 - 140.71426391601562 / 500));
    const control2X = w * (0.5 + (474 / 717 - 90 / 717) * xOffsetScale);
    const control2Y =
      h * (0.5 + (137.71426391601562 / 500 - 140.71426391601562 / 500));

    const reflectedEndX = 2 * centreX - endX;
    const reflectedControl1X = 2 * centreX - control1X;
    const reflectedControl2X = 2 * centreX - control2X;

    return (
      <HTMLContainer style={{ width: w, height: h }}>
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
          <path
            d={`M ${centreX},${centreY} C ${control1X},${control1Y} ${control2X},${control2Y} ${endX},${endY}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={`M ${centreX},${centreY} C ${reflectedControl1X},${control1Y} ${reflectedControl2X},${control2Y} ${reflectedEndX},${endY}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: BracketShape) {
    const path = new Path2D();
    path.rect(0, 0, shape.props.w, shape.props.h);
    return path;
  }
}

export class RockerShapeUtil extends ShapeUtil<any> {
  static override type = "rocker" as const;

  getDefaultProps(): RockerShape["props"] {
    return { w: 120, h: 100 };
  }

  getGeometry(shape: RockerShape) {
    const { w, h } = shape.props;

    const start = Vec.From({ x: w * 0.2, y: h * 0.8 });
    const peak = Vec.From({ x: w * 0.5, y: h * 0.2 });
    const end = Vec.From({ x: w * 0.8, y: h * 0.8 });

    const leftArc = new Arc2d({
      center: Vec.From({ x: w * 0.34, y: h * 0.46 }),
      start,
      end: peak,
      sweepFlag: 0,
      largeArcFlag: 0,
    });

    const rightArc = new Arc2d({
      center: Vec.From({ x: w * 0.66, y: h * 0.46 }),
      start: peak,
      end,
      sweepFlag: 1,
      largeArcFlag: 0,
    });

    return new Group2d({ children: [leftArc, rightArc] });
  }

  component(shape: RockerShape) {
    const { w, h } = shape.props;

    const startX = w * 0.2;
    const startY = h * 0.8;
    const peakX = w * 0.5;
    const peakY = h * 0.2;
    const endX = w * 0.8;
    const endY = h * 0.8;

    const leftRadiusX = w * 0.17;
    const leftRadiusY = h * 0.26;
    const rightRadiusX = w * 0.17;
    const rightRadiusY = h * 0.26;

    return (
      <HTMLContainer style={{ width: w, height: h }}>
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
          <path
            d={`M ${startX} ${startY} A ${leftRadiusX} ${leftRadiusY} 0 0 0 ${peakX} ${peakY} A ${rightRadiusX} ${rightRadiusY} 0 0 1 ${endX} ${endY}`}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: RockerShape) {
    const path = new Path2D();
    path.rect(0, 0, shape.props.w, shape.props.h);
    return path;
  }
}

export class CounterShapeUtil extends ShapeUtil<any> {
  static override type = "counter" as const;

  getDefaultProps(): CounterShape["props"] {
    return { w: 120, h: 100 };
  }

  getGeometry(shape: CounterShape) {
    const { w, h } = shape.props;

    const topStart = Vec.From({ x: w * 0.2, y: h * 0.2 });
    const topMid = Vec.From({ x: w * 0.5, y: h * 0.3 });
    const topEnd = Vec.From({ x: w * 0.8, y: h * 0.4 });

    const bottomStart = Vec.From({ x: w * 0.2, y: h * 0.8 });
    const bottomMid = Vec.From({ x: w * 0.5, y: h * 0.7 });
    const bottomEnd = Vec.From({ x: w * 0.8, y: h * 0.6 });

    const topLeftArc = new Arc2d({
      center: Vec.From({ x: w * 0.35, y: h * 0.08 }),
      start: topStart,
      end: topMid,
      sweepFlag: 1,
      largeArcFlag: 0,
    });

    const topRightArc = new Arc2d({
      center: Vec.From({ x: w * 0.65, y: h * 0.52 }),
      start: topMid,
      end: topEnd,
      sweepFlag: 0,
      largeArcFlag: 0,
    });

    const bottomLeftArc = new Arc2d({
      center: Vec.From({ x: w * 0.35, y: h * 0.92 }),
      start: bottomStart,
      end: bottomMid,
      sweepFlag: 0,
      largeArcFlag: 0,
    });

    const bottomRightArc = new Arc2d({
      center: Vec.From({ x: w * 0.65, y: h * 0.48 }),
      start: bottomMid,
      end: bottomEnd,
      sweepFlag: 1,
      largeArcFlag: 0,
    });

    return new Group2d({
      children: [topLeftArc, topRightArc, bottomLeftArc, bottomRightArc],
    });
  }

  component(shape: CounterShape) {
    const { w, h } = shape.props;
    const topStartX = w * 0.2;
    const topStartY = h * 0.2;
    const topMidX = w * 0.5;
    const topMidY = h * 0.3;
    const topEndX = w * 0.8;
    const topEndY = h * 0.4;

    const bottomStartX = w * 0.2;
    const bottomStartY = h * 0.8;
    const bottomMidX = w * 0.5;
    const bottomMidY = h * 0.7;
    const bottomEndX = w * 0.8;
    const bottomEndY = h * 0.6;

    const radiusX = w * 0.16;
    const radiusY = h * 0.22;

    return (
      <HTMLContainer style={{ width: w, height: h }}>
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
          <path
            d={`M ${topStartX} ${topStartY} A ${radiusX} ${radiusY} 0 0 1 ${topMidX} ${topMidY} A ${radiusX} ${radiusY} 0 0 0 ${topEndX} ${topEndY}`}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d={`M ${bottomStartX} ${bottomStartY} A ${radiusX} ${radiusY} 0 0 0 ${bottomMidX} ${bottomMidY} A ${radiusX} ${radiusY} 0 0 1 ${bottomEndX} ${bottomEndY}`}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: CounterShape) {
    const path = new Path2D();
    path.rect(0, 0, shape.props.w, shape.props.h);
    return path;
  }
}
