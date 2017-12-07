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
      "graphLabel":"Autorisation greffe",
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
      "graphLabel":"Consentement morts",
      "question":"3. Pour le don post-mortem, le consentement du donneur doit-il être présumé ou explicite ?",
      "positiveButtonText":"EXPLICITE",
      "negativeButtonText":"PRÉSUMÉ",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
      "L’objectif étant de sauver un maximum de vies, le consentement explicite ne doit pas être obligatoire car il limiterait l’accès aux organes des individus ne s’étant pas posé la question de leur vivant.",
      "Si un individu n’a pas exprimé un consentement explicite de son vivant, sa conviction risque d’être subordonnée à la volonté de ses proches.",
      "Si la personne est formellement contre le don d’organe, il est possible pour elle de s’inscrire sur un registre des refus."
      ],
      "negativeRaisons":[
      "Le principe d’inviolabilité du corps humain implique que le consentement explicite est nécessaire. On ne saurait présumer de la volonté d’un individu pour le bien commun. La charité n’est pas une obligation.",
      "Le consentement est la seule manière de garantir que l’homme n’est pas utilisé comme un moyen, mais toujours perçu comme une fin en soi."
      ],
      seeMoreText:"• Dans le cas d’un donneur mort, il faut s’interroger sur la place de la famille et des proches qui peuvent influencer la procédure de don au moment de son décès. Quand le consentement explicite était nécessaire, on recherchait souvent l’avis du défunt sur la question par le biais des proches. La famille pouvait dès lors substituer ses propres convictions à l’avis du défunt. <br> <br> • Aujourd’hui encore, malgré la loi française présumant le consentement, il est parfois difficile d’aller à l’encontre de la volonté des proches du fait de l’impact psychologique que cela aurait sur les survivants. <br> <br> • Le consentement présumé a également été contesté car, en pratique, il permet de prélever les organes des SDF sans famille en toute légalité. En effet, alors qu’avant la loi les sans abris exprimaient rarement leur consentement explicite pour le don, on peut désormais prélever leurs organes et personne ne s’y oppose car ils sont généralement peu entourés au moment de leur décès. <br> <br> • Enfin, on pourrait aussi envisager de faire primer le consentement des proches survivants sur celui du défunt car ce sont eux qui vivent l’expérience traumatisante du prélèvement. De plus, puisque le donneur est mort, il ne possède plus d’autonomie et d’avis sur la question.",
      positiveRedirection:"4",
      negativeRedirection:"4",
    },
         {
      "id":"4",
      "graphLabel":"Prélèvement sur vivants",
      "question":"4. Doit-on autoriser le prélèvement d’organes sur les vivants ?",
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
      "La personne en attente de greffe est exposée à un risque de mort qui surpasse les séquelles potentielles sur le vivant."
      ],
      "negativeRaisons":[
      "Le prélèvement sur un vivant rend le respect de l’anonymat complexe voire impossible (dans le cas où l’on considère l’anonymat comme étant essentiel).",
      "Le donneur n’a aucun intérêt à donner un organe à un individu tiers anonymisé. A l’inverse, la décision du donneur relève-t-elle vraiment d’un consentement libre et éclairé ? N’est-il pas aveuglé par l’amour ou la culpabilité ?",
      "On prend le risque de favoriser la corruption pour accélérer ou favoriser le don d’organe. Cette situation ne se présente pas dans le cas où l’individu est mort."
      ],
      seeMoreText:"• Le cas du don de moelle osseuse est spécifique : on peut être donneur de son vivant même si l’on ne connaît pas le receveur. Cela se justifie éthiquement par le problème de compatibilité HLA qui est déterminante pour la réussite de la greffe (phénomène de GVH - greffon versus hôte). En effet, en plus de nécessiter un donneur vivant, la compatibilité en terme de moelle osseuse est nécessaire puisque le système immunitaire lui même est concerné par la greffe. L’accès très restreint à de la moelle a suscité un système permettant l'augmentation de l’échantillon d’organes disponibles. Le risque est moindre pour un donneur de moelle que pour un donneur d’organe car la moelle se régénère (comme le sang), ce qui n’est pas le cas d’un organe. De plus, il s’agit d’un risque différé : on est inscrit sur une liste de donneur et l'hôpital nous contact seulement en cas de besoin. <br> <br> • Le don croisé, qui a été autorisé en France par la loi de bioéthique de 2011, suscite également des questions. Si une personne décide de donner un organe à l’un de ses proches mais qu’elle n’est pas compatible avec le système immunitaire de ce dernier, il peut effectuer un don croisé. Il s’agit de réunir deux « couples » donneurs-receveurs présentant une compatibilité entre eux et d’échanger les organes tout en conservant l’anonymat, sans toutefois permettre le don d'organe à un inconnu. <br> <br> • La question du consentement pour le prélèvement d’organe chez les vivants s’intègre dans le débat plus large de la nécessité du consentement en médecine ou dans le cadre de recherches biomédicales. Etant donné que le consentement libre et éclairé est presque unanimement reconnu en médecine, il semblerait logique que celui-ci soit reconnu dans le cas des donneurs vivants. En effet, si l’on demande le consentement des patients pour leur administrer des traitements bénéfiques à leur santé, il est d’autant plus nécessaire de demander le consentement pour le prélèvement d’organe qui n’apporte aucun bénéfice au donneur.",
      positiveRedirection:"5",
      negativeRedirection:"5",
    },
             {
      "id":"5",
      "graphLabel":"Anonymat donneur",
      "question":"5. Doit-on garantir l’anonymat du don d’organe quand cela est possible ? (le donneur n'est pas un proche)",
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
      "L’anonymat permet de protéger psychologiquement les proches du donneur et le receveur.",
      "Cela permet aussi d’éviter que les proches du donneur décédé ne rencontrent des personnes ayant reçu des organes de la personne décédée. Certains organes ont une grande valeur symbolique pour des individus (comme le coeur) ; il peut être mal vécu de rencontrer la personne ayant hérité du coeur de sa défunte compagne / défunt compagnon.",
      "De même, éviter au receveur de connaître l’identité du donneur permet de l'exempter d’un sentiment de redevance envers ce dernier ou sa famille.",
      "Un organe n’est pas un cadeau mais un don: il doit être emprunt d’universalité sans attendre un retour."
      ],
      "negativeRaisons":[
      "L’absence d’anonymat permet une reconnaissance envers le donneur et sa famille qui sont ainsi valorisés dans la démarche : si l’atteinte de l’intégrité du corps peut être difficile à accepter par la famille, les bénéfices de cette atteinte peuvent rendre le prélèvement plus acceptable."
      ],
      positiveRedirection:"6",
      negativeRedirection:"6",
    },
      {
      "id":"6",
      "graphLabel":"Rémunération",
      "question":"5. Doit-on rémunérer le don d'organes ?",
      "positiveButtonText":"OUI",
      "negativeButtonText":"NON",
      "positiveRaisonsIcon":"heart",
      "negativeRaisonsIcon":"heartbeat",
      "positiveRaisons":[
      "Toute personne est libre de disposer de son corps. La motivation financière n’est pas indigne en soi, la condamner  par principe est un jugement moral.",
      "Chaque année en France, plus de 200 personnes meurent faute d’organes disponibles. D’un point de vue utilitariste, la rémunération peut constituer un facteur incitatif : il serait immoral de laisser mourir de potentiels receveurs si la rémunération peut résoudre efficacement le manque d’organes.",
      "La légalisation du commerce d’organes - et donc sa régulation par l’Etat – permettrait de limiter les trafics d’organes. L’interdiction ne fait que condamner les plus pauvres à vendre leurs organes dans des conditions de prélèvement dangereuses."
      ],
      "negativeRaisons":[
      "Le corps est constitutif de la personne humaine et doit rester hors-commerce. La gratuité permet d’autoriser le prélèvement en évitant que le corps soit assimilable à un objet de commerce. Au contraire, la vente ou l’incitation au don d’organes par moyens financiers traite le corps humain comme une chose.",
      "Une décision ne peut être considérée comme libre et autonome lorsque la personne est sous l’emprise de la nécessité. Payer peut constituer une forme de contrainte, dans la mesure où cela amène une personne dans le besoin à faire quelque chose qu’elle n’aurait pas faite sinon.",
      "La transplantation des organes s’est construite autour de la gratuité (on parle de « don ») tant chez les professionnels que pour le public : sa « marchandisation » heurte les représentations sociales en place, et pourrait donc avoir un effet contre-productif (« dégoût moral »)."
      ],
      seeMoreText:"• Au delà du remboursement des frais relatifs au dons (comme c’est le cas en France), certains pays ont mis en place un système d’indemnisation: c’est le cas en Israël, où le don d’organe est “indemnisé” à hauteur de 18000 shekels (soit 3500 euros). Cependant, il est difficile d’établir une distinction claire entre indemnisation et rémunération : s’agit-il d’une indemnisation qui vient compenser la prise de risques et les potentielles complications, ou bien d’une rémunération incitative ? <br> <br> • Le don croisé, qui a été autorisé en France par la loi de bioéthique de 2011, suscite également des questions. Si une personne décide de donner un organe à l’un de ses proches mais qu’elle n’est pas compatible avec le système immunitaire de ce dernier, il peut effectuer un don croisé. Il s’agit de réunir deux « couples » donneurs-receveurs présentant une compatibilité entre eux et d’échanger les organes tout en conservant l’anonymat, sans toutefois permettre le don d'organe à un inconnu. <br> <br> • En Iran, rare pays à avoir légalisé la vente d’organes, le donneur reçoit 1200 dollars et un an d’assurance maladie de la part de l’Etat, en plus de la rémunération fournie par le receveur. Si ce système a permis de combler la pénurie d’organes et de sauver des vies, il présente également des limites : les dons, motivés par des raisons financières, ont souvent eu des conséquences négatives sur l’état de santé et le statut professionnel des donneurs ; par ailleurs, la légalisation du commerce d’organes n’a pas permi de mettre fin au marché noir.",
      positiveRedirection:"7",
      negativeRedirection:"7",
    },
        {
      "id":"7",
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
