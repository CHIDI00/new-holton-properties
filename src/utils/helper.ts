export const formatCurrency = (
	value: string,
	currency: string = "NGN"
): string => {
	const userLocale: string = navigator.language || "en-NG";
	const numericValue: number = parseFloat(value);

	if (isNaN(numericValue)) {
		console.warn(`Invalid number string provided to formatCurrency: ${value}`);
		return "Invalid Amount";
	}

	return new Intl.NumberFormat(userLocale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 0, // Ensure no decimal places
		maximumFractionDigits: 0, // Ensure no decimal places (will round)
	}).format(numericValue);
};
