this.module('samples', function() {
  
  this.data = [
    { 
      lat: 45.760712,
      lng: 4.827438, 
      name: "Cathédrale Saint-Jean", 
      text: "Rénovée en 2012 !" ,
      distance: 150,
      type: "tourism"
    },
    {
      lat: 45.761827,
      lng: 4.828361, 
      name: "Palais de Justice", 
      text: "Superbe fontaine à débordements à découvrir !" ,
      distance: 234.3,
      type: "tourism"
    },
    {
      lat: 45.760443,
      lng: 4.826586, 
      name: "Velov Saint-Jean", 
      bikes: 3,
      slots: 17,
      distance: 212,
      type: "shelter"
    }
  ];
  
  this.myLocation = {
    latitude: 45.76908919499007,
    longitude: 4.827143999321094,
    accuracy: 100
  }
  
});