	'use strict';

	import React from 'react';
	import {render} from 'react-dom';
	import {
		Router,
		Redirect,
		Route,
		Link,
		browserHistory,
		IndexRoute
	} from 'react-router';
	import {syncHistoryWithStore} from 'react-router-redux'



	//---------------Login pages -----------------------//
	import TableComponent from 'app/components/dashboard/tablePage';
	import chartComponent from 'app/components/dashboard/barChart';
	import HomeComponent from 'app/components/dashboard/homePage';


	render((
			<Router history={browserHistory}>
					<Route  path="home" component={HomeComponent}/>
					<Route path="table" component={TableComponent}/>
					<Route path="chart" component={chartComponent}/>
			</Router>
	), document.getElementById('root'));
