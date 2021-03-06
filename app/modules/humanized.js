(function() {
  "use strict";

  angular
    .module("segue.admin.humanized", [ 'segue.admin' ])
    .constant("HumanizedStrings", {
       'business':          'corporativo',
       'caravan':           'caravanista',
       'caravan-leader':    'líder de caravana',
       'foreigner':         'estrangeiro',
       'foreigner-student': 'estrangeiro estudante',
       'government':        'empenho',
       'normal':            'individual',
       'promocode':         'código promocional',
       'proponent':         'proponente',
       'proponent-student': 'proponente estudante',
       'speaker':           'palestrante',
       'student':           'estudante'
    });
})();
