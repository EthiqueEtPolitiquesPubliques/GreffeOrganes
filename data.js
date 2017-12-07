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
      "graphLabel":"Autorisation",
      "question":"1. Doit-on autoriser le prélèvement et la greffe d’organes ?",
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
        {
          "icon":"plus-square-o",
          "text":"<p style=\"text-decoration: underline; padding-bottom:20px;\">Arguments utilitaristes<\p>"
        },
        "La greffe permet de sauver des vies.",
        "Le prélèvement d’organes sur une personne peut sauver plusieurs vies et favoriser ainsi le bien du plus grand nombre."
      ],
      "negativeRaisons":[
        {
          "icon":"plus-square-o",
          "text":"<p style=\"text-decoration: underline; padding-bottom:20px;\">Arguments déontologiques<\p>"
        },
        "Au nom de la sacralité de la vie et de l’intégrité du corps humain, on doit le respect aux corps des défunts : on ne peut donc effectuer de prélèvements dessus.",
        "Selon l’impératif catégorique de Kant, l’homme est une fin en soi et ne peut donc pas être utilisé comme moyen. La greffe n’est donc pas acceptable car elle constitue une instrumentalisation du corps humain."
      ],

      seeMoreText:"• Si on pousse plus loin la logique utilitariste, on peut s’interroger sur la possibilité de sacrifier un vivant pour ses organes si cela permet de sauver plusieurs vies. <br> <br> • Cependant le principe de non malfaisance et le dogme médical primum non nocere suggèrent l’impossibilité de tuer quelqu’un pour ses organes.",
      positiveRedirection:"2",
      negativeRedirection:"3",
    },
    {
      "id":"2",
      "graphLabel":"Prélèvement sur mort",
      "question":"2. Doit-on autoriser le prélèvement post-mortem ?",
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
        {
          "icon":"plus-square-o",
          "text":"Arguments utilitaristes"
        },
        "Si la survie d’un individu dépend d’un prélèvement d’organe sur un mort, la possibilité de sauver une vie doit primer sur le respect de l’intégrité du corps du défunt."
      ],
      "negativeRaisons":[
         {
          "icon":"plus-square-o",
          "text":"Arguments déontologiques"
        },
        "Il est impossible de recevoir le consentement d’un mort au moment du prélèvement d’organe. Même si le consentement a été reçu au préalable, celui-ci était peut-être déterminé par des facteurs n’existant plus au moment du prélèvement.",
        "Si la mort cérébrale est le critère retenu pour définir la mort, le prélèvement ne peut pas se faire sur quelqu’un dont les autres organes sont encore en fonction."
      ],
      seeMoreText:"• Comment définit-on la mort ? Est-ce simplement l’arrêt du système cardio-vasculaire ou la cessation de fonctionnement du système nerveux central ? De nombreux autres critères peuvent encore être retenus. <br> <br> • En France, l’état de mort cérébrale a été retenu comme nouvelle définition de la mort pour permettre le prélèvement d’organes en bon état.",
      positiveRedirection:"3",
      negativeRedirection:"3",
    },
    {
      "id":"3",
      "graphLabel":"Question nulle",
      "question":"Aimez vous cette question N°3 ?",
      "positiveButtonText":"OUEP",
      "negativeButtonText":"NOP",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
        "Parce qu'elle est originale !",
      ],
      "negativeRaisons":[
        "Parce qu'elle ne veut rien dire"
      ],
    }
  ]
}
