export type MaskPositionPoint = "forehead" | "eyes" | "mouth" | "chin";

export interface MaskPosition {
	point: MaskPositionPoint;
	x_shift: number;
	y_shift: number;
	scale: number;
}
