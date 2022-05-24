var weight = 67
var height = 176
var age = 21
var sex = 0
var macronutrientList = {
    'v_a': {
        'a': 4,
        'a': 5,
        'a': 6,
        'd': 9,
        'e': 15,
    },
    'v_b': {
        'a': 6,
        'a': 5,
        'a': 4,
        'd': 1,
        'e': 15,
    }
}
var foodList = {
    'v_a': 1,
    'v_b': 1
}

function mealSolver(macronutrientList, foodList) {
    calorieSum = {'max': 10 * weight + 6.25 * height - 5 * age + 5};

    if (sex == 1) {
        calorieSum = {'max': 10 * weight + 6.25 * height - 5 * age - 161};
    }

    var solver =
        require('javascript-lp-solver'),
        result,
        model = {
            'optimize': 'macronutrientSum',
            'opType': 'max',
            'constraints': {
                'carbohydrateSum': {'max': 3 / 4 * weight},
                'proteinSum': {'max': 2 / 4 * weight},
                'fatSum': {'max': 1 / 4 * weight},
                'calorieSum': calorieSum
            },
            'variables': macronutrientList,
            'ints': foodList
        };

    result = solver.Solve(model);

    for (let name in macronutrientList) {
        if (result[name] != undefined) {
            console.log(`${name}: ${result[name]}`)
        }
    }
}