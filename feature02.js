function BMI(height, weight) {
	const h = height / 100;
	const w = weight;
	const bmi = (w / (h * h)).toFixed(1);
	console.log(`BMI: ${bmi}`);
}
BMI(178, 70);
