#!/usr/bin/env node

var colors = require('colors/safe');

const inquirer = require('inquirer');
const sqlite3 = require('sqlite3').verbose();

var points = 0


//Quiz3
module.exports = {
    function3: function(){        
        inquirer.prompt([
            {
                type:'list',
                message:'Quel pays nomme-t-on le pays du matin calme ?',
                name:'question1',
                choices:[
                    'L\'Inde',
                    'La Chine',
                    'Le Japon',
                    'La Corée'
                ]
            },{
                type:'list',
                message:'Lequel des 5 sens manque au serpent ?',
                name:'question2',
                choices:[
                    'L\'ouïe',
                    'La vue',
                    'L\'odorat',
                    'Le goût'
                ]

            },{
                type:'list',
                message:'Quel auteur a écrit "A vaicre sans péril, on triomphe sans gloire" ?',
                name:'question3',
                choices:[
                    'Corneille',
                    'Charles D\'Orléans',
                    'Aristote',
                    'René d\'Anjou'
                ]
            },{
                type:'list',
                message:'Qui est le dieu du Soleil dans l\'ancienne Egypte ?',
                name:'question4',
                choices:[
                    'Aurus',
                    'Osiris',
                    'Râ',
                    'Seth'
                ]
            },{
                type:'list',
                message:'Quel peuple a inventé la poudre à canon ?',
                name:'question5',
                choices:[
                    'Les chinois',
                    'Les Indiens',
                    'Les français',
                    'Les perses'
                ]
            },{
                type:'list',
                message:'Quel pays à pour capitale Katmandou ?',
                name:'question6',
                choices:[
                    'Le Tibet',
                    'Le Bangladesh',
                    'L\'Inde',
                    'Le Népal'
                ]
            },{
                type:'list',
                message:'Comment appelle-t-on le fruit du plaqueminier ?',
                name:'question7',
                choices:[
                    'La goyave',
                    'Le kaki',
                    'La papaye',
                    'Le cherimoya'
                ]
            },{
                type:'list',
                message:'Où se trouve les glandes sudoripares d\'un chien ?',
                name:'question8',
                choices:[
                    'Le cou',
                    'le ventre',
                    'Les oreilles',
                    'Les pattes'
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

            if (answers.question1 == "La Corée" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 1 était "La Corée"'));
            }
            
            if (answers.question2 == 'L\'ouïe'){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 2 était "L\'ouïe"'));
            }

            if (answers.question3 == "Corneille" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 3 était "Corneille"'));
            }

            if (answers.question4 == "Râ" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 4 était "Râ"'));
            }

            if (answers.question5 == "Les chinois" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 5 était "Les chinois"'));
            }

            if (answers.question6 == "Le Népal" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 6 était "Le Népal"'));
            }

            if (answers.question7 == "Le kaki" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 7 était "Le kaki"'));
            }

            if (answers.question8 == "Les pattes" ){
                console.log(colors.cyan('yes +1'));
                points += 1;
            }
            else{
                console.log(colors.red('La réponse à la question 8 était "Les pattes"'));
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
