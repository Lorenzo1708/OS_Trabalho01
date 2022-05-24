var weight
var height
var age
var sex
var macronutrientList_meal_1 = {
    'food_1': {
        'carbohydrateSum': 4,
        'proteinSum': 5,
        'fatSum': 6,
        'calorieSum': 9,
        'macronutrientSum': 15,
    },
    'food_2': {
        'carbohydrateSum': 6,
        'proteinSum': 5,
        'fatSum': 4,
        'calorieSum': 1,
        'macronutrientSum': 15,
    }
}
var macronutrientList_meal_2 = {}
var macronutrientList_meal_3 = {}
var macronutrientList_meal_4 = {}
var foodList_meal_1 = {
    'food_1': 1,
    'food_2': 1
}
var foodList_meal_2 = {}
var foodList_meal_3 = {}
var foodList_meal_4 = {}


function mealSolver(macronutrientList, foodList) {
    calorieSum = { 'max': 10 * weight + 6.25 * height - 5 * age + 5 }

    if (sex == "2") {
        calorieSum = { 'max': 10 * weight + 6.25 * height - 5 * age - 161 }
    }

    var solver =
        require('javascript-lp-solver'),
        result,
        model = {
            'optimize': 'macronutrientSum',
            'opType': 'max',
            'constraints': {
                'carbohydrateSum': { 'max': 3 / 4 * weight },
                'proteinSum': { 'max': 2 / 4 * weight },
                'fatSum': { 'max': 1 / 4 * weight },
                'calorieSum': { 'max': calorieSum }
            },
            'variables': macronutrientList,
            'ints': foodList
        }

    result = solver.Solve(model)

    for (let food in foodList) {
        if (result[food] != undefined) {
            console.log(`${food}: ${result[food]}`)
        }
    }
}


window.onload = () => {
    document.getElementById('form').onsubmit = () => {
        return false
    }

    document.getElementById('submit').onclick = () => {
        weight = document.getElementById('weight').value
        height = document.getElementById('height').value
        age = document.getElementById('age').value
        sex = document.getElementById('sex').value

        if (weight != '' && height != '' && age != '' && sex != 'Sex') {
            mealSolver(macronutrientList_1, foodList_1)
            mealSolver(macronutrientList_2, foodList_2)
            mealSolver(macronutrientList_3, foodList_3)
            mealSolver(macronutrientList_4, foodList_4)
        }
        else {
            document.getElementById('h4').innerText = 'EMPTY'
        }
    }
}