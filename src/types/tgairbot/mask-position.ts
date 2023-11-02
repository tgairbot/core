import { MaskPositionPoint } from "../telegram";

export interface MaskPosition {
	point: MaskPositionPoint;
	xShift: number;
	yShift: number;
	scale: number;
}
