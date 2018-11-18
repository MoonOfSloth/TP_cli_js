#!/usr/bin/env node

var colors = require('colors/safe');

const inquirer = require('inquirer');
const db = require('./../db');
var index = require('../index.js');


var points = 0

//Quiz1
module.exports = {

    function1: function(){
    
    let query = "SELECT * FROM quiz1"
    

    db.all(query, [], (err, rows) => {
        console.log('MDR',rows)
   
    })

        inquirer.prompt([
            {
                type:'list',
                message:'Comment appelle-t-on un arbre qui perd ses feuilles en hiver ?',
                name:'question1',
                choices:[
                    'Epicéa',
                    'Caduc',
                    'Acéracées',
                    'Caprifoliacées'
                ]
            },{
                type:'list',
                message:'Combien d\'états comporte les Etats-Unis ?',
                name:'question2',
                choices:[
                    '42',
                    '47',
                    '50',
                    '54'
                ]
        
            },{
                type:'list',
                message:'Dans quelle partie du corps se trouve l\'humérus ?',
                name:'question3',
                choices:[
                    'bras',
                    'avant-bras',
                    'jambe',
                    'dos'
                ]
            },{
                type:'list',
                message:'Quel monument d\'Alexandrie fait parti des 7 merveilles du monde ?',
                name:'question4',
                choices:[
                    'La bibliothèque',
                    'Le panthéon',
                    'Le port',
                    'Le phare'
                ]
            },{
                type:'list',
                message:'Quel grand peintre s\'est coupé l\'oreille ?',
                name:'question5',
                choices:[
                    'Salvador Dali',
                    'Pablo Picasso',
                    'Claude Monet',
                    'Van Gogh'
                ]
            },{
                type:'list',
                message:'Qu\'es-ce qu\'un gibbon ?',
                name:'question6',
                choices:[
                    'un outil de maçonnerie',
                    'un grand singe',
                    'une plante vénéneuse',
                    'Une technique de Judo'
                ]
            },{
                type:'list',
                message:'Quel est le biscuit que Proust a rendu célèbre ?',
                name:'question7',
                choices:[
                    'Le sablé',
                    'La madeleine',
                    'Le pim\'s',
                    'Le financier'
                ]
            },{
                type:'list',
                message:'De quel jeu contemporain le jeu de paume est-il l\'ancêtre ?',
                name:'question8',
                choices:[
                    'Le tennis',
                    'La badminton',
                    'Le ping-pong',
                    'Le pelote-basque'
                ]
            }  
        ])
        
        //Display
        .then((answers) =>{
            
            if (answers.question1 == "Caduc"){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 1 était "Caduc"'));
            }
            
            if (answers.question2 == '50'){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 2 était "50"'));
            }

            if (answers.question3 == "bras" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 3 était "bras"'));
            }

            if (answers.question4 == "Le phare" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 4 était "Le phare"'));
            }

            if (answers.question5 == "Van Gogh" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 5 était "Van Gogh"'));
            }

            if (answers.question6 == "un grand singe" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 6 était "Un grand singe"'));
            }

            if (answers.question7 == "La madeleine" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 7 était "La madeleine"'));
            }

            if (answers.question8 == "Le tennis" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 8 était "Le tennis"'));
            }

            console.log(colors.green('Vous avez marquez '+points+' points sur 8.'));
        
        })
    }
}


