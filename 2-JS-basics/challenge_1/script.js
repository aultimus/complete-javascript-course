
var BMI = function(mass, height) {
    return mass / height ^ 2
}



massJohn = 300
heightJohn = 1.7

massMark = 360
heightMark = 2.2


bmiJohn = BMI(massJohn, heightJohn)
bmiMark = BMI(massMark, heightMark)


console.log("Is Mark's BMI higher than John's", bmiMark > bmiJohn)
