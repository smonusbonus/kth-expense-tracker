//CategoryModel Object constructor
expenseTrackerAppModule.service('CategoriesModel', function () {
	'use strict';

	var categories = [],
		category = {
			id : -1,
			title : '',
			color : '',
			icon : ''
		},
		currentCategory,
		color = {
			id : -1,
			title : '',
			color : ''
		},
		availableColors = [];

		availableColors.push( 
		{
			id 	  : 0, 	
			title : 'turquoise',
			color : '#1abc9c'
		},{
			id 	  : 1, 	
			title : 'green sea',
			color : '#16a085'
		},{
			id 	  : 2, 	
			title : 'emerland',
			color : '#2ecc71'
		},{
			id 	  : 3, 	
			title : 'nephritis',
			color : '#27ae60'
		},{
			id 	  : 4, 	
			title : 'peter priver',
			color : '#3498db'
		},{
			id 	  : 5, 	
			title : 'belize hole',
			color : '#2980d9'
		},{
			id 	  : 6, 	
			title : 'sun flower',
			color : '#f1c40f'
		},{
			id 	  : 7, 	
			title : 'orange',
			color : '#f39c12'
		},{
			id 	  : 8, 	
			title : 'carrot',
			color : '#d35400'
		},{
			id 	  : 9, 	
			title : 'alazarin',
			color : '#e74c3c'
		},{
			id 	  : 10, 	
			title : 'pomegranate',
			color : '#c0392b'
		},{
			id 	  : 11, 	
			title : 'amethyst',
			color : '#9b59b6'
		});

	// default categories
	categories.push(
		{
			id : 0,
			title : 'groceries',
			color : '#1a9b53',
			icon : 'fa-shopping-cart'
		},
		{
			id : 1,
			title : 'eating out',
			color : '#9b1a44',
			icon : 'fa-cutlery'
		},
		{
			id : 2,
			title : 'coffee',
			color : '#875d2f',
			icon : 'fa-coffee'
		},
		{
			id : 3,
			title : 'beer',
			color : '#fbb600',
			icon : 'fa-beer'
		},
		{
			id : 4,
			title : 'mobile phone',
			color : '#cb3687',
			icon : 'fa-phone'
		}
	);

	return {

		initNewCategory : function() {
			currentCategory = jQuery.extend(true, {}, category);
			return currentCategory;
		},

		saveCurrentCategoryToCollection : function() {
			categories.push( currentCategory );
		},

		setCategoryColorById : function(colorId) {
			var newColor = this.getCategoryColorById( colorId );
			currentCategory.color = newColor;
		},

		removeCategoryFromCollection : function (categoryId) {
			for (var i = 0; i < categories.length; i++) {
				if (categories[i].id === categoryId) {
					categories.splice( i, 1 );
				}
			}
		},

		getAvailableColors : function() {
			return availableColors;
		},

		listCategories : function () {
			return categories;
		},

		getCategoryById : function (categoryId) {
			for (var key in categories) {
				if (categories[key].id === categoryId) {
					return categories[key];
				}
			}
		},

		getCategoryColorById : function (colorId) {
			for (var key in availableColors) {
				if (availableColors[key].id === colorId) {
					return availableColors[key];
				}
			}
		}
	};
});
