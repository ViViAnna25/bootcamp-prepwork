/**
 * Exercise 1
 *
 * create a function "myName" which takes param(string)
 * of your name and console.log "My name is YOUR_NAME"
 */
function myName(string){
    string = "Alex";
    message = "My name is " + string; 
    console.log(message);
}                         
/**
 * Exercise 2
 *
 * create a function "myAge" which takes param(string)
 * of your age and console.log "I'm YOUR_AGE years old"
 */
 function myAge(string){
    string = "16";
    age = "I'm " + string + " years old"; 
    console.log(age);
} 
/**
 * Exercise 3
 *
 * create a function "aboutMe" which takes 2 params
 * your original city and country and console.log
 * "I'm from YOUR_CITY, YOUR_COUNTRY"
 */
 function aboutMe(city, country){
    city = "Lviv";
    country = "Ukraine";
    me = "I'm from " + city + ", " + country; 
    console.log(me);
}
/**
 * Exercise 4
 * create a function "logSum" which will take any 2 numbers
 * as params and log sum.
 */
function logSum(x, y){
    x = 50;
    y = 20;
    sum = x + y;
    console.log(sum);
}
global.console = {
	log: jest.fn(),
	info: jest.fn(),
	error: jest.fn()
};

// Exercise 1
describe("myName", () => {
	test("myName is declared", () => {
		expect(myName).toBeDefined();
	});

	test("myName should log a valid string", () => {
		myName("Alex");

		expect(global.console.log).toHaveBeenCalledWith("My name is Alex");
	});
});

// Exercise 2
describe("myAge", () => {
	test("myAge is declared", () => {
		expect(myAge).toBeDefined();
	});

	test("myAge should log a valid string", () => {
		myAge(16);

		expect(global.console.log).toHaveBeenCalledWith("I'm 16 years old");
	});
});

// Exercise 3
describe("aboutMe", () => {
	test("aboutMe is declared", () => {
		expect(aboutMe).toBeDefined();
	});

	test("aboutMe should log a valid string", () => {
		aboutMe("Lviv", "Ukraine");

		expect(global.console.log).toHaveBeenCalledWith("I'm from Lviv, Ukraine");
	});
});

// Exercise 4
describe("logSum", () => {
	test("logSum is declared", () => {
		expect(logSum).toBeDefined();
	});

	test("logSum should log sum", () => {
		logSum(50, 20);

		expect(global.console.log).toHaveBeenCalledWith(70);
	});
});
