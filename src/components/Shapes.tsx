import {
  HTMLContainer,
  PathBuilder,
  type TLBaseShape,
  ShapeUtil,
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
    return { w: 200, h: 200 };
  }

  getGeometry(shape: BracketShape) {
    const { w, h } = shape.props;
    const startX = 0;
    const startY = 0;
    const control1X = w * 0.2;
    const control1Y = h * 0.2;
    const control2X = w * 0.07;
    const control2Y = h * 0.47;
    const middleX = w * 0.2;
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

  component(shape: BracketShape) {
    const { w, h } = shape.props;
    const startX = 0;
    const startY = 0;
    const control1X = w * 0.2;
    const control1Y = h * 0.2;
    const control2X = w * 0.07;
    const control2Y = h * 0.47;
    const middleX = w * 0.2;
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
            d={`M ${startX} ${startY} C ${control1X} ${control1Y} ${control2X} ${control2Y} ${middleX} ${middleY} C ${control3X} ${control3Y} ${control4X} ${control4Y} ${endX} ${endY}`}
            stroke="currentColor"
            // strokeWidth={shape.props.thickness}
            fill="none"
          />
        </svg>
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: BracketShape) {
    const { w, h } = shape.props;
    const startX = 0;
    const startY = 0;
    const control1X = w * 0.2;
    const control1Y = h * 0.2;
    const control2X = w * 0.07;
    const control2Y = h * 0.47;
    const middleX = w * 0.2;
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

export class RockerShapeUtil extends ShapeUtil<any> {
  static override type = "rocker" as const;

  getDefaultProps(): RockerShape["props"] {
    return { w: 200, h: 200 };
  }

  getGeometry(shape: RockerShape) {
    const { w, h } = shape.props;
    const angle = (30 / 180) * Math.PI;

    const startX = w * 0.5;
    const startY = h;
    const mid1X = w * (0.5 - 0.25 * Math.sin(angle));
    const mid1Y = h * (0.75 - 0.25 * Math.cos(angle));
    const control1X = w * 0.45;
    const control1Y = h * 0.45;
    const control2X = w * 0.495;
    const control2Y = h * 0.52;
    const middleX = w * 0.5;
    const middleY = h * 0.55;
    const control3X = w * 0.5;
    const control3Y = h * 0.47;
    const control4X = w * 0.56;
    const control4Y = h * 0.53;
    const mid2X = w * (0.5 + 0.25 * Math.sin(angle));
    const mid2Y = h * (0.25 + 0.25 * Math.cos(angle));
    const endX = w * 0.5;
    const endY = 0;

    return new PathBuilder()
      .moveTo(startX, startY)
      .lineTo(mid1X, mid1Y)
      .cubicBezierTo(
        middleX,
        middleY,
        control1X,
        control1Y,
        control2X,
        control2Y,
      )
      .cubicBezierTo(mid2X, mid2Y, control3X, control3Y, control4X, control4Y)
      .lineTo(endX, endY)
      .toGeometry();
  }

  component(shape: RockerShape) {
    const { w, h } = shape.props;
    const radius = w * 0.25;
    const angle = (30 / 180) * Math.PI;

    const startX = w * 0.5;
    const startY = h;
    const mid1X = w * (0.5 - 0.25 * Math.sin(angle));
    const mid1Y = h * (0.75 - 0.25 * Math.cos(angle));
    const control1X = w * 0.45;
    const control1Y = h * 0.45;
    const control2X = w * 0.495;
    const control2Y = h * 0.52;
    const middleX = w * 0.5;
    const middleY = h * 0.55;
    const control3X = w * 0.5;
    const control3Y = h * 0.47;
    const control4X = w * 0.56;
    const control4Y = h * 0.53;
    const mid2X = w * (0.5 + 0.25 * Math.sin(angle));
    const mid2Y = h * (0.25 + 0.25 * Math.cos(angle));
    const endX = w * 0.5;
    const endY = 0;

    return (
      <HTMLContainer style={{ width: w, height: h }}>
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
          <path
            d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${mid1X} ${mid1Y} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${middleX} ${middleY} C ${control3X} ${control3Y}, ${control4X} ${control4Y}, ${mid2X} ${mid2Y} A ${radius} ${radius} -30 0 0 ${endX} ${endY}`}
            stroke="currentColor"
            // strokeWidth={shape.props.thickness}
            fill="none"
          />
        </svg>
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: RockerShape) {
    const { w, h } = shape.props;
    const radius = w * 0.25;
    const angle = (30 / 180) * Math.PI;

    const startX = w * 0.5;
    const startY = h;
    const mid1X = w * (0.5 - 0.25 * Math.sin(angle));
    const mid1Y = h * (0.75 - 0.25 * Math.cos(angle));
    const control1X = w * 0.45;
    const control1Y = h * 0.45;
    const control2X = w * 0.495;
    const control2Y = h * 0.52;
    const middleX = w * 0.5;
    const middleY = h * 0.55;
    const control3X = w * 0.5;
    const control3Y = h * 0.47;
    const control4X = w * 0.56;
    const control4Y = h * 0.53;
    const mid2X = w * (0.5 + 0.25 * Math.sin(angle));
    const mid2Y = h * (0.25 + 0.25 * Math.cos(angle));
    const endX = w * 0.5;
    const endY = 0;

    return new Path2D(
      `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${mid1X} ${mid1Y} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${middleX} ${middleY} C ${control3X} ${control3Y}, ${control4X} ${control4Y}, ${mid2X} ${mid2Y} A ${radius} ${radius} -30 0 0 ${endX} ${endY}`,
    );
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

export class CounterShapeUtil extends ShapeUtil<any> {
  static override type = "counter" as const;

  getDefaultProps(): CounterShape["props"] {
    return { w: 200, h: 200 };
  }

  getGeometry(shape: CounterShape) {
    const { w, h } = shape.props;
    const angle = (30 / 180) * Math.PI;

    const startX = w * 0.5;
    const startY = 0;
    const mid1X = w * (0.5 + 0.25 * Math.sin(angle));
    const mid1Y = h * (0.25 + 0.25 * Math.cos(angle));
    const control1X = w * 0.55;
    const control1Y = h * 0.55;
    const control2X = w * 0.505;
    const control2Y = h * 0.48;
    const middleX = w * 0.5;
    const middleY = h * 0.45;
    const control3X = w * 0.5;
    const control3Y = h * 0.53;
    const control4X = w * 0.44;
    const control4Y = h * 0.47;
    const mid2X = w - mid1X;
    const mid2Y = h - mid1Y;
    const endX = w * 0.5;
    const endY = h;

    return new PathBuilder()
      .moveTo(startX, startY)
      .lineTo(mid1X, mid1Y)
      .cubicBezierTo(
        middleX,
        middleY,
        control1X,
        control1Y,
        control2X,
        control2Y,
      )
      .cubicBezierTo(mid2X, mid2Y, control3X, control3Y, control4X, control4Y)
      .lineTo(endX, endY)
      .toGeometry();
  }

  component(shape: CounterShape) {
    const { w, h } = shape.props;
    const radius = w * 0.25;
    const angle = (30 / 180) * Math.PI;

    const startX = w * 0.5;
    const startY = 0;
    const mid1X = w * (0.5 + 0.25 * Math.sin(angle));
    const mid1Y = h * (0.25 + 0.25 * Math.cos(angle));
    const control1X = w * 0.55;
    const control1Y = h * 0.55;
    const control2X = w * 0.505;
    const control2Y = h * 0.48;
    const middleX = w * 0.5;
    const middleY = h * 0.45;
    const control3X = w * 0.5;
    const control3Y = h * 0.53;
    const control4X = w * 0.44;
    const control4Y = h * 0.47;
    const mid2X = w - mid1X;
    const mid2Y = h - mid1Y;
    const endX = w * 0.5;
    const endY = h;

    return (
      <HTMLContainer style={{ width: w, height: h }}>
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
          <path
            d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${mid1X} ${mid1Y} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${middleX} ${middleY} C ${control3X} ${control3Y}, ${control4X} ${control4Y}, ${mid2X} ${mid2Y} A ${radius} ${radius} -30 0 0 ${endX} ${endY}`}
            stroke="currentColor"
            // strokeWidth={shape.props.thickness}
            fill="none"
          />
        </svg>
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: CounterShape) {
    const { w, h } = shape.props;
    const radius = w * 0.25;
    const angle = (30 / 180) * Math.PI;

    const startX = w * 0.5;
    const startY = 0;
    const mid1X = w * (0.5 + 0.25 * Math.sin(angle));
    const mid1Y = h * (0.25 + 0.25 * Math.cos(angle));
    const control1X = w * 0.55;
    const control1Y = h * 0.55;
    const control2X = w * 0.505;
    const control2Y = h * 0.48;
    const middleX = w * 0.5;
    const middleY = h * 0.45;
    const control3X = w * 0.5;
    const control3Y = h * 0.53;
    const control4X = w * 0.44;
    const control4Y = h * 0.47;
    const mid2X = w - mid1X;
    const mid2Y = h - mid1Y;
    const endX = w * 0.5;
    const endY = h;

    return new Path2D(
      `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${mid1X} ${mid1Y} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${middleX} ${middleY} C ${control3X} ${control3Y}, ${control4X} ${control4Y}, ${mid2X} ${mid2Y} A ${radius} ${radius} -30 0 0 ${endX} ${endY}`,
    );
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
