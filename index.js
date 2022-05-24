

/*
var q = 67
var r = 176
var s = 21
var t = 0
var object_1 = {
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
var object_2 = {
    'v_a': 1,
    'v_b': 1
}

function customSolver(object_1, object_2) {
    d = {'max': 10 * q + 6.25 * r - 5 * s + 5};

    if (t == 1) {
        d = {'max': 10 * q + 6.25 * r - 5 * s - 161};
    }

    var solver =
        require('javascript-lp-solver'),
        result,
        model = {
            'optimize': 'e',
            'opType': 'max',
            'constraints': {
                'a': {'max': 3 / 4 * q},
                'b': {'max': 2 / 4 * q},
                'c': {'max': 1 / 4 * q},
                'd': d
            },
            'variables': object_1,
            'ints': object_2
        };

    result = solver.Solve(model);

    for (let name in object_1) {
        if (result[name] != undefined) {
            console.log(`${name}: ${result[name]}`)
        }
    }
}

customSolver(object_1, object_2)
*/