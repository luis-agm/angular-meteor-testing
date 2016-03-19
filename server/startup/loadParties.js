Meteor.startup(function () {

    if (Parties.find().count() === 0) {

    	var parties = [

	        {
	        'name': 'Elemento de prueba 1',
	        'description': 'Descripción del "Elemento de prueba 1"'
	    	},

	        {
	        'name': 'Elemento de prueba 2',
	        'description': 'Descripción del "Elemento de prueba 2"'
	    	},

	        {
	        'name': 'Elemento de prueba 3',
	        'description': 'Descripción del "Elemento de prueba 3"'
	    	}

    	];

    	for (var i = 0; i < parties.length; i++)

    		Parties.insert(parties[i]);

    }

  });