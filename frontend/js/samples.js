this.module('samples', function() {
  
  this.data = [
    { 
      latitude: 45.760712,
      longitude: 4.827438, 
      name: "Cath�drale Saint-Jean", 
      text: "R�nov�e en 2012 !" ,
      distance: 150,
      tag: "tourism"
    },
    {
      latitude: 45.761827,
      longitude: 4.828361, 
      name: "Palais de Justice", 
      text: "Superbe fontaine � d�bordements � d�couvrir !" ,
      distance: 234.3,
      tag: "tourism"
    },
    {
      latitude: 45.760443,
      longitude: 4.826586, 
      name: "Velov Saint-Jean", 
      bikes: 3,
      slots: 17,
      distance: 212,
      tag: "bikes"
    }
  ];
  
  this.myLocation = {
    latitude: 45.76179,
    longitude: 4.826623,
    accuracy: 100
  }
  
});