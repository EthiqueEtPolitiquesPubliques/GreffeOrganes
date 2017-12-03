/*
  Select icons names from http://fontawesome.io/icons/
  Colors should be in hexa format : #3192d3
  Raisons can be structured different way :
  "positiveRaisons":[
   {
     "icon":"heart",
     "text":"Parce que !"
   }
 ]
 */

var config = {
  firstQuestionId:"1",
  "defaultStyle":{
    "question":"Pour ou contre ?",
    "positiveButtonText":"POUR",
    "negativeButtonText":"CONTRE",
    "positiveIcon":"heart",
    "negativeIcon":"heartbeat",
    "positiveColor":"#3192d3",
    "negativeColor":"#e0422c",
    "positiveBackgroundOpacity":0.2,
    "negativeBackgroundOpacity":0.2,
    "positiveRaisonsIcon":"star",
    "negativeRaisonsIcon":"flag"
  },

  "questions":[
    {
      "id":"1",
      "question":"1. Doit-on autoriser le prélèvement et la greffe d’organes ?",
      "positiveButtonText":"POUR",
      "negativeButtonText":"CONTRE",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
        {
          "icon":"plus-square-o",
          "text":"Arguments utilitaristes"
        },
        "La greffe permet de sauver des vies",
        "Le prélèvement d’organes sur une personne peut sauver plusieurs vies et favoriser ainsi le bien du plus grand nombre"
      ],
      "negativeRaisons":[
        {
          "icon":"plus-square-o",
          "text":"Arguments déontologiques"
        },
        "Au nom de la sacralité de la vie et de l’intégrité du corps humain, on doit le respect aux corps des défunts et ne doit donc pas effectuer de prélèvements dessus",
        "La greffe est une instrumentalisation du corps humain, or l’homme est une fin en soi et ne peut donc pas être utilisé comme un moyen (Kant)"
      ],
      positiveRedirection:"2",
      negativeRedirection:"3",
    },
    {
      "id":"2",
      "question":"Pour ou contre N°2 ?",
      "positiveButtonText":"POUR 4",
      "negativeButtonText":"CONTRE 5",
      "positiveRaisonsIcon":"star",
      "negativeRaisonsIcon":"flag",
      "positiveRaisons":[
        "Parce que 5 !",
        "Parce que 6 !",
        "Parce que 7 !",
        "Parce que 8 !"
      ],
      "negativeRaisons":[
        "Il n'y en a toujours pas pour la 2..."
      ],
      positiveRedirection:"1",
      negativeRedirection:"1",
    },
    {
      "id":"3",
      "question":"Aimez vous cette question N°3 ?",
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
        "Parce qu'elle est originale !",
      ],
      "negativeRaisons":[
        "Parce qu'elle ne veut rien dire"
      ],
      positiveRedirection:"1",
      negativeRedirection:"2",
    }
  ]
}
