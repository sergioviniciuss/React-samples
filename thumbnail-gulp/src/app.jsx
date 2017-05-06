var options = {
	thumbnailData: [{
		title: 'Show Courses',
		number: '12',
		header: 'Learn React',
		description: 'React is a fantastic new library for making fast dynamic pages',
		imageURL: 'https://facebook.github.io/react/img/logo.svg'
	},
	{
		title: 'Show Courses',
		number: '99',
		header: 'Learn Gulp',
		description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
		imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
	}]
}

// ask react to render this class
var element = React.createElement(ThumbnailList, options);

//when we ask react to render this class, we will tell it
//where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.target'));