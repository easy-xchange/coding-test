# EasyXchange Coding Test

Botswana uses an alphanumeric counting system for its number plates.
The system follows the pattern B XXX YYY, where X is an integer and Y is an upper case (capital) letter.
An example number plate is `B 123 ABC`.
Given this number plate the next vehicle to register for a number plate would get `B 124 ABC.`
The integer number increases first until 999 and then the alphabet increases.
Given the number plate `B 999 ABC` the next number plate would be `B 001 ABD`.
Given the number plate `B 999 BBZ` the next number plate would be `B 001 BCA`.
Given the number plate `B 999 BZZ` the next number plate would be `B 001 CAA`.

## Restrictions 
* 000 is never issued. i.e numbers start at 001.
* Q is never used since it looks similar to O and can be hard to differentiate from afar.

## Calculations
This plate number system is quite large and yields a total of 10 * 10 * 10 * 25 * 25 * 25 = 15625000.
Note that this is a theoretical upper bound since it over counts some invalid plate numbers. None the less, with a
current population of 2.6M each person living in Botswana would have ~6 cars before the numbers ran out. Thus, the
system should last for a very long time.

## Requirements
Write a program that simulates a number plate registration system, i.e. a department of motor vehicles.
Your program should be able to `register` a new vehicle and `issue` a new number plate given a string
representing the last registered vehicle's number plate.
1. Your program must accept two input commands passed with space delimited arguments.
2. "Register" will register a new vehicle for a given user.
  * Register will be called as follows:
  * Register B 345 BKL Seretse Goitsebeng Maphiri Khama
  * Note that anything after the number plate is considered the name. In this case the number plate is 'B 345 BKL' and the name is 'Seretse Goitsebeng Maphiri Khama.'
3. "Issue" will take in a number plate and then print out the number plate that follows the given number plate.
  * Issue will be called as follows:
  * Issue B 999 ABC. This should print B 001 ABD to STDOUT.
  * Issue B 999 BZZ. This should print B 001 CAA to STDOUT.
  * The number plate B 999 ZZZ should print "error" to STDOUT since it is the last possible number plate.
4. When all input has been read and processed, a car registry summary should be generated and written to STDOUT in the format shown
in the example below.
5. The summary should include the name of each registered person followed by a colon and their vehicle number plate.
6. The names should be displayed alphabetically.

## Input Assumptions
- All input will be valid so there is no need to check for illegal characters or malformed commands.
- All input will be space delimited

## Output
Given the following input
```
Register B 478 ABK Amantle Montsho
Issue B 688 BAB. This should immediately print B 689 BAB to STDOUT.
Register B 689 BAB Festus Mogae
Issue B 999 ZZZ. This should immediately print error to STDOUT.
Register B 419 DBK Nijel Amos
Issue B 999 BAB. This should immediately print B 001 BAC to STDOUT.
```

On exit the program should print the following output to STDOUT:

```
Amantle Montsho: B 478 ABK
Festus Mogae: B 689 BAB
Nijel Amos: B 419 DBK
```
If someone was piping all STDOUT to another program that program would see STDOUT as:
```
B 689 BAB
error
B 001 BAC
Amantle Montsho: B 478 ABK
Festus Mogae: B 689 BAB
Nijel Amos: B 419 DBK
```

## Implementing and Packaging Your Solution:

Implement your solution in any programming language you wish, but keep in mind
I may ask you to explain or extend your code.  Please write automated tests
and include them with your submission. Do not take creative liberties such as superfluous text to STDOUT.
If you have any clarification questions, feel free to ask and I will be happy to answer them.

Your solution will be assessed on correctness and testing.

In addition to your code and tests, please also include a README that explains:

- An overview of your design decisions
- Why you picked the programming language you used
- How to run your code and tests, including how to compile it if applicable and
  how to install any dependencies your code may have.

  Thank you!
