var weight
var height
var age
var sex
var macronutrientList_1 = {
    'Banana': {
        'carbohydrateSum': 15.9,
        'proteinSum': 0.83,
        'fatSum': 0.12,
        'calorieSum': 70,
        'macronutrientSum': 16.85,
    },
    'Maçã': {
        'carbohydrateSum': 17.7,
        'proteinSum': 0.38,
        'fatSum': 0.64,
        'calorieSum': 83,
        'macronutrientSum': 18.42,
    },
    'Ovo Cozido': {
        'carbohydrateSum': 0.69,
        'proteinSum': 5.20,
        'fatSum': 4.35,
        'calorieSum': 62,
        'macronutrientSum': 10.24,
    },
    'Fatia de Bacon': {
        'carbohydrateSum': 0.10,
        'proteinSum': 3.89,
        'fatSum': 9.19,
        'calorieSum': 98,
        'macronutrientSum': 13.98,
    },
    'Fatia de Abacate': {
        'carbohydrateSum': 6.71,
        'proteinSum': 4.25,
        'fatSum': 23.00,
        'calorieSum': 280,
        'macronutrientSum': 33.96,
    },
    'Laranja': {
        'carbohydrateSum': 12.3,
        'proteinSum': 1.26,
        'fatSum': 0.34,
        'calorieSum': 63,
        'macronutrientSum': 13.9,
    },
    'Pão Francês': {
        'carbohydrateSum': 30,
        'proteinSum': 6.40,
        'fatSum': 4.89,
        'calorieSum': 192,
        'macronutrientSum': 30.00 +6.40+4.89,
    },
    'Pão de Queijo': {
        'carbohydrateSum': 8.75,
        'proteinSum': 1.79,
        'fatSum': 5.85,
        'calorieSum': 95,
        'macronutrientSum': 8.75+1.79+5.85,
    },
    'Fatia de Bolo de Chocolate': {
        'carbohydrateSum': 26.60,
        'proteinSum': 3.18,
        'fatSum': 10.90,
        'calorieSum': 217,
        'macronutrientSum': 26.60+3.18+10.90,
    }
}
var macronutrientList_2 = {
    'Colher de Servir de Arroz Integral': {
        'carbohydrateSum': 10.20,
        'proteinSum': 2.04,
        'fatSum': 1.51,
        'calorieSum': 66,
        'macronutrientSum': 10.20 + 2.04 + 1.51,
    },
    'Colher de Servir de Legumes': {
        'carbohydrateSum': 2.52,
        'proteinSum': 1.10,
        'fatSum': 0.17,
        'calorieSum': 18,
        'macronutrientSum': 2.52 + 1.10 + 0.17,
    },
    'Porção Média de Frango': {
        'carbohydrateSum': 0.63,
        'proteinSum': 30.80,
        'fatSum': 10.00,
        'calorieSum': 216,
        'macronutrientSum': 0.63 + 30.80 + 10.00,
    },
    'Ovo Frito(c/ óleo de soja)': {
        'carbohydrateSum': 0.60,
        'proteinSum': 7.81,
        'fatSum': 9.30,
        'calorieSum': 308,
        'macronutrientSum': 0.6+7.81+9.3+117,        
    },
    'Picanha': {
        'carbohydrateSum': 0.01,
        'proteinSum': 28.9,
        'fatSum': 21.5,
        'calorieSum': 308,
        'macronutrientSum': 28.9+21.5+0.01,        
    },    
    'Feijão (100 gramas)': {
        'carbohydrateSum': 8.20,
        'proteinSum': 4.77,
        'fatSum': 0.54,
        'calorieSum': 71,
        'macronutrientSum': 8.20+4.77+0.54,
    },
    'Abóbora Moranga Cozida (100 gramas)': {
        'carbohydrateSum': 1.57,
        'proteinSum': 1.22,
        'fatSum': 0.14,
        'calorieSum': 17,
        'macronutrientSum': 1.57+1.22+0.14,
    },
    'Batata Doce (100 gramas)': {
        'carbohydrateSum': 20.3,
        'proteinSum': 0.85,
        'fatSum': 0.18,
        'calorieSum': 92,
        'macronutrientSum': 20.30+0.85+0.18,
    },
    'Bife à Parmegiana (100 gramas)': {
        'carbohydrateSum': 9.50,
        'proteinSum': 17.20,
        'fatSum': 20.30,
        'calorieSum': 341,
        'macronuctrientSum': 9.50+17.20+20.30,
    },
}
var macronutrientList_3 = {
    'Açai (200g)': {
        'carbohydrateSum': 15.3,
        'proteinSum': 1.8,
        'fatSum': 10.0,
        'calorieSum': 135,
        'macronutrientSum': 15.3+1.8+10.0,
    },
    'Barra de cereais': {
        'carbohydrateSum': 17.7,
        'proteinSum': 1.56,
        'fatSum': 2.13,
        'calorieSum': 98,
        'macronutrientSum': 17.7+1.56+2.13,
    },
    'Canapé': {
        'carbohydrateSum': 7.26,
        'proteinSum': 4.24,
        'fatSum': 5.31,
        'calorieSum': 94,
        'macronuctrientSum': 7.26+4.24+5.31,
    },
    'Empada de frango': {
        'carbohydrateSum': 23.7,
        'proteinSum': 3.47,
        'fatSum': 7.80,
        'calorieSum': 179,
        'macronutrientSum': 23.7+3.47+7.80,
    },
    'Pera': {
        'carbohydrateSum': 12.1,
        'proteinSum': 0.44,
        'fatSum': 0.25,
        'calorieSum': 59,
        'macronutrientSum': 12.1+0.44+0.25+59,
    },
    'Iogurte integral com salada de frutas (100g)': {
        'carbohydrateSum': 10,
        'proteinSum': 2.99,
        'fatSum': 1.63,
        'calorieSum': 67,
        'macronutrientSum': 10+2.99+1.63,
    },
    'Biscoito de Polvilho': {
        'carbohydrateSum': 79.40,
        'proteinSum': 1.29,
        'fatSum': 12.20,
        'calorieSum': 435,
        'macronutrientSum': 79.40+1.29+12.20,
    },
    'Morango': {
        'carbohydrateSum': 4.87,
        'proteinSum': 0.82,
        'fatSum': 0.40,
        'calorieSum': 30,
        'macronutrientSum': 4.87+0.82+0.40,
    },
    'Torrada Integral com Geleia': {
        'carbohydrateSum': 30.70,
        'proteinSum': 3.95,
        'fatSum': 2.15,
        'calorieSum': 159,
        'macronutrientSum': 30.70+3.95+2.15,
    }
}
var macronutrientList_4 = {
    'Patinho (110g)': {
        'carbohydrateSum': 0.37,
        'proteinSum': 39.5,
        'fatSum': 8.04,
        'calorieSum': 231,
        'macronutrientSum': 0.37+39.5+8.04,
    },
    'Mandioca Cozida (37g)': {
        'carbohydrateSum': 6.16,
        'proteinSum': 0.14,
        'fatSum': 0.05,
        'calorieSum': 26,
        'macronutrientSum': 6.14+0.14+0.05,
    },
    'Cenoura cozida (40g)': {
        'carbohydrateSum': 0.85,
        'proteinSum': 0.22,
        'fatSum': 0.08,
        'calorieSum': 6,
        'macronutrientSum': 0.85+0.22+0.08,
    },
    'Sopa de repolho branco (130g)': {
        'carbohydrateSum': 6.69,
        'proteinSum': 1.75,
        'fatSum': 2.82,
        'calorieSum': 60,
        'macronutrientSum': 6.69+1.75+2.82,
    },
    'Macarrão cozido (200g)': {
        'carbohydrateSum': 52.3,
        'proteinSum': 7.11,
        'fatSum': 1.15,
        'calorieSum': 251,
        'macronutrientSum': 52.3+7.11+1.15,
    },
    'Tilápia (100g)': {
        'carbohydrateSum': 0.0,
        'proteinSum': 22.2,
        'fatSum': 2.07,
        'calorieSum': 107,
        'macronutrientSum': 0+22.2+107,
    },
    'Lasanha de Bolonhesa': {
        'carbohydrateSum': 12.30,
        'proteinSum': 5.80,
        'fatSum': 7,
        'calorieSum': 138,
        'macronutrientSum': 12.30+5.80+7,
    },
    'Sushi': {
        'carbohydrateSum': 5.67,
        'proteinSum': 2.89,
        'fatSum': 1.59,
        'calorieSum': 51,
        'macronutrientSum': 5.67+2.89+1.59,
    },
    'Camarão com Legumes (100g)': {
        'carbohydrateSum': 2.31,
        'proteinSum': 8.63,
        'fatSum': 1.89,
        'calorieSum': 63,
        'macronutrientSum': 2.31+8.63+1.89,
    }    
}
var foodList_1 = {
    'Banana': 1,
    'Maçã': 1,
    'Ovo Cozido': 1,
    'Fatia de Bacon': 1,
    'Fatia de Abacate': 1,
    'Laranja': 1,
    'Pão Francês': 1,
    'Pão de Queijo': 1,
    'Fatia de Bolo de Chocolate': 1,
}
var foodList_2 = {
    'Colher de Servir de Arroz Integral': 1,
    'Colher de Servir de Legumes': 1,
    'Porção Média de Frango': 1,
    'Ovo Frito(c/ óleo de soja)': 1,
    'Picanha': 1,
    'Feijão (100 gramas)': 1,
    'Abóbora Moranga Cozida (100 gramas)': 1,
    'Batata Doce (100 gramas)': 1,
    'Bife à Parmegiana (100 gramas)': 1,
}
var foodList_3 = {
    'Açai (200g)': 1,
    'Canapé': 1,
    'Barra de Cereais': 1,
    'Empada de frango': 1,
    'Pera': 1,
    'Iogurte integral com salada de frutas (100g)': 1,
    'Biscoito de Polvilho': 1,
    'Morango': 1,
    'Torrada Integral com Geleia': 1,
}
var foodList_4 = {
    'Patinho (110g)': 1,
    'Mandioca Cozida (37g)': 1,
    'Cenoura cozida (40g)': 1,
    'Sopa de repolho branco (130g)': 1,
    'Macarrão cozido (200g)': 1,
    'Tilápia (100g)': 1,
    'Lasanha de Bolonhesa': 1,
    'Sushi': 1,
    'Camarão com Legumes (100g)': 1,
}


function mealSolver(macronutrientList, foodList, meal) {
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

    document.getElementById('diet').innerHTML += `<span><strong>${meal}:</strong></span><br>`

    for (let food in foodList) {
        if (result[food] != undefined) {
            document.getElementById('diet').innerHTML += `<span>${food} - ${result[food]}X</span><br>`
        }
    }

    document.getElementById('diet').innerHTML += '<br>'
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
            document.getElementById('diet').innerHTML = ''

            mealSolver(macronutrientList_1, foodList_1, 'Café da Manhã')
            mealSolver(macronutrientList_2, foodList_2, 'Almoço')
            mealSolver(macronutrientList_3, foodList_3, 'Café da Tarde')
            mealSolver(macronutrientList_4, foodList_4, 'Jantar')
        }
        else {
            document.getElementById('diet').innerHTML = '<span>Campo Vazio</span>'
        }
    }
}