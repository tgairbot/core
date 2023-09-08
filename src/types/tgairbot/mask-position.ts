import { MaskPositionPoint } from "../telegram/mask-position";

export interface MaskPosition {
	point: MaskPositionPoint;
	xShift: number;
	yShift: number;
	scale: number;
}
