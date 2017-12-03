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
    "positiveButtonText":"OUI",
    "negativeButtonText":"NON",
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
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
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
      seeMoreText:"- Si on pousse plus loin la logique utilitariste, on peut s’interroger sur la possibilité de sacrifier un vivant pour ses organes si cela permet de sauver plusieurs vies. <br> - Cependant le principe de non malfaisance et le dogme médical primum non nocere suggèrent l’impossibilité de tuer quelqu’un pour ses organes",
      positiveRedirection:"2",
      negativeRedirection:"3",
    },
    {
      "id":"2",
      "question":"2. Le consentement du donneur est-il nécessaire ?",
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
        {
          "icon":"plus-square-o",
          "text":"Arguments déontologiques"
        },
        "Le principe d’inviolabilité du corps humain implique que le consentement est nécessaire",
        "Le consentement est la seule manière de garantir que l’homme n’est pas utilisé comme un moyen"
      ],
      "negativeRaisons":[
         {
          "icon":"plus-square-o",
          "text":"Arguments utilitaristes"
        },
        "L’objectif étant de sauver un maximum de vie, le consentement explicite ne doit pas être obligatoire ou du moins il doit être présumé"
      ],
      positiveRedirection:"3",
      negativeRedirection:"3",
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
