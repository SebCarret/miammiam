var express = require('express');
var router = express.Router();

// appel à votre modèle qui gère la collection meal
var mealModel = require('../models/meal');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/order', async function(req, res, next) {

  // étape 1 : la préparation des données
  var newMeal = await new mealModel({
    meal: req.body.meal,
    name: req.body.name,
    delivery_adress: req.body.adress,
    phone: req.body.phone,
    beverage: req.body.beverage
  });

  // étape 2 : l'enregistrement en BDD
  newMeal.save(function(error, meal) {
    // renvoi d'une réponse en JSON sur Postman (si erreur --> console.log de l'erreur)
    error ? console.log(error) : res.json({result: 'meal enregistré en BDD', meal})
  })
})

module.exports = router;
