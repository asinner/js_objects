function Human(name, job, salary) {
	this.name = name;
	this.job = job;
	this.salary = salary;
}
Human.prototype.greet = function() {
	return "Hello! My name is " + this.name;
};
Human.prototype.boast = function() {
	return "My job? Oh I'm a " + job + "and I make $" + salary;
};
Human.prototype.toString = function() {
	for (var attribute in this) {
		console.log(attribute + " = " + this[attribute]);
	};
};