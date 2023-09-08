export const RemoveUndefinedKeysFromObject = <T extends Record<string, any>>(
	obj: T,
): T => {
	const newObj: Record<string, any> = {};

	Object.entries(obj).forEach(([key, value]) => {
		if (Array.isArray(value)) newObj[key] = value;
		else if (value === Object(value))
			newObj[key] = RemoveUndefinedKeysFromObject(value);
		else if (value !== undefined) newObj[key] = value;
	});

	return newObj as T;
};
