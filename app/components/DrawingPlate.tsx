export type DrawingVariant = "site" | "plan" | "section" | "axon" | "model" | "layout";

type DrawingPlateProps = {
  variant: DrawingVariant;
  index?: string;
  caption?: string;
  className?: string;
};

export function DrawingPlate({ variant, index = "A-01", caption = "Architectural drawing", className = "" }: DrawingPlateProps) {
  return (
    <div className={`drawing-plate drawing-${variant} ${className}`} role="img" aria-label={caption}>
      <span className="drawing-code">{index}</span>
      <div className="drawing-field" aria-hidden="true">
        <i className="drawing-line line-a" />
        <i className="drawing-line line-b" />
        <i className="drawing-line line-c" />
        <i className="drawing-line line-d" />
        <i className="drawing-line line-e" />
        <i className="drawing-line line-f" />
        <i className="drawing-mass mass-a" />
        <i className="drawing-mass mass-b" />
        <i className="drawing-mass mass-c" />
        <i className="drawing-node node-a" />
        <i className="drawing-node node-b" />
        <i className="drawing-node node-c" />
        <i className="drawing-dimension dim-a">2400</i>
        <i className="drawing-dimension dim-b">7200</i>
      </div>
      <span className="drawing-caption">{caption}</span>
    </div>
  );
}
