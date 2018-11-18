#!/usr/bin/env node

var colors = require('colors/safe');

const inquirer = require('inquirer');
const sqlite3 = require('sqlite3').verbose();

var points = 0


//Quiz2
module.exports = {
    function2: function(){
        inquirer.prompt([
            {
                type:'list',
                message:'Quel personnage dis "être ou ne pas être" ?',
                name:'question1',
                choices:[
                    'Ophélie',
                    'Claudius',
                    'Hamlet',
                    'Polonius'
                ]
            },{
                type:'list',
                message:'Qui est la muse de l\'histoire, dans la mythologie grecque ?',
                name:'question2',
                choices:[
                    'Clio',
                    'Calliope',
                    'Terpsichore',
                    'Polymnie'
                ]

            },{
                type:'list',
                message:'Quel est le pays à avoir mis en orbite le premier satellite ?',
                name:'question3',
                choices:[
                    'URSS',
                    'Etats-Unis',
                    'Japon',
                    'Chine'
                ]
            },{
                type:'list',
                message:'A quel footballeur, Zinédine Zidane a-t-il asséné un coup de tête, en finale de la Coupe du monde 2006 ?',
                name:'question4',
                choices:[
                    'Mario Balotelli',
                    'Gianluigi Buffon',
                    'Leonardo Pavoletti',
                    'Marco Materazzi'
                ]
            },{
                type:'list',
                message:'Quel est le titre français de la série télévisé The Love Boat ?',
                name:'question5',
                choices:[
                    'La croisière du romantisme',
                    'Le bateau de l\'amour',
                    'La croisière s\'amuse',
                    'réponse D'
                ]
            },{
                type:'list',
                message:'De quel groupe rock Freddie Mercury était-il le chanteur à partir des années 70 ?',
                name:'question6',
                choices:[
                    'ACDC',
                    'Abba',
                    'Pink floyd',
                    'Queen'
                ]
            },{
                type:'list',
                message:'Sur quelle île de la Méditerranée Napoléon 1er est-il né ?',
                name:'question7',
                choices:[
                    'Minorque',
                    'Sentorin',
                    'Corse',
                    'Majorque'
                ]
            },{
                type:'list',
                message:'Qui chante les paroles "Trois nuits pas semaine mais bon dieu qu\'elle est belle ?',
                name:'question8',
                choices:[
                    'Indochine',
                    'Louise attaque',
                    'Noir désire',
                    'Téléphone'
                ]
            }  
        ])

        //Display
        .then((answers) =>{
            let db = new sqlite3.Database('./db/database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
                if (err) {
                  return console.error(err.message);
                }
                console.log('Connected to the in-memory SQlite database.');
              });

            if (answers.question1 == "Hamlet" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 1 était "Hamlet"'));
            }
            
            if (answers.question2 == 'Clio'){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 2 était "Clio"'));
            }

            if (answers.question3 == "URSS" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 3 était "URSS"'));
            }

            if (answers.question4 == "Marco Materazzi" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 4 était "Marco Materazzi"'));
            }

            if (answers.question5 == "La croisière s\'amuse" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 5 était "La croisière s\'amuse"'));
            }

            if (answers.question6 == "Queen" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 6 était "Queen"'));
            }

            if (answers.question7 == "Corse" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 7 était "Corse"'));
            }

            if (answers.question8 == "Indochine" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 8 était "Indochine"'));
            }



            console.log(colors.green('Vous avez marquez '+points+' points sur 8.'));
            db.close((err) => {
                if (err) {
                    return console.error(err.message);
                }
                
            });
        })    
    }
}
