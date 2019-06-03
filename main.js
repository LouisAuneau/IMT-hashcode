var _ = require('lodash');
var Genetic = require('genetic-js')

helpers = require('./helpers.js')

const USERNAME = "TEAM BBQ";

var problems = {
    problem0: {
        problem_id: 'problem0',
        slides: helpers.parseFile('problem0.txt')
    },
    problem1: {
        problem_id: 'problem1',
        slides: helpers.parseFile('problem1.txt')
    },
    problem2: {
        problem_id: 'problem2',
        slides: helpers.parseFile('problem2.txt')
    },
    problem3: {
        problem_id: 'problem3',
        slides: helpers.parseFile('problem3.txt')
    },
    problem4: {
        problem_id: 'problem4',
        slides: helpers.parseFile('problem4.txt')
    }
};

/**
 * EXEMPLE PAYLOAD SOLUTION
 *  {
        problem_id: 'problem0',
        username: 'François',
        slides: ['0', '3', '1 2']
    }
 */

var solveDumb = function (problem) {
    var solution = {
        problem_id: problem.problem_id,
        username: USERNAME,
        slides: []
    };

    var slidesH = _.filter(problem.slides, function (slide) {
        return slide.type === 'H';
    });

    var slidesV = _.filter(problem.slides, function (slide) {
        return slide.type === 'V';
    });

    _.each(slidesH, function (slide, key) {
        solution.slides.push(slide.id);
    });

    for(let i = 0; i < slidesV.length - 1; i+=2) {
        let concatedId = slidesV[i].id + " " + slidesV[i+1].id;
        //console.log(concatedId)
        solution.slides.push(concatedId);
    }

    return solution;
};

var solution = solveDumb(problems.problem3);

var score = helpers.evaluateSolution(problems.problem3, solution);
console.log("SCORE : " + score);
//helpers.send_solution(solution);
