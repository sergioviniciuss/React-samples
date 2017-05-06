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
var Badge = React.createClass({displayName: "Badge",
	render: function() {
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
			this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
		)
	}
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		})

		return React.createElement("div", null, 
			list
		)
	}
})
var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function() {
		return 	React.createElement("div", {className: "col-sm-6 col-md-4 "}, 
		React.createElement("div", {className: "thumbnail"}, 
			React.createElement("img", {src: this.props.imageURL}), 
				React.createElement("div", {className: "caption"}, 
					React.createElement("h3", null, this.props.header), 
					React.createElement("p", null, this.props.description), 
					React.createElement("p", null, 
						React.createElement(Badge, {title: this.props.title, number: this.props.number})
					)
				)
			)
		)
	}
})
