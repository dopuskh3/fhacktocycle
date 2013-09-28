this.module('samples', function() {
  
  this.data = [
    { 
      latitude: 45.760712,
      longitude: 4.827438, 
      name: "Cathédrale Saint-Jean", 
      text: "Rénovée en 2012 !" ,
      distance: 150
    },
    {
      latitude: 45.761827,
      longitude: 4.828361, 
      name: "Palais de Justice", 
      text: "Superbe fontaine à débordements à découvrir !" ,
      distance: 234.3
    }
  ];
  
  this.myLocation = {
    latitude: 45.76179,
    longitude: 4.826623,
    accuracy: 100
  }
  
});