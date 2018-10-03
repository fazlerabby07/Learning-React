import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const comment = {
	date: new Date(),
	text: 'Tring to learn REACT JS!!',
	author: {
		name: 'Fazle',
		avaterUrl: 'http://placekitten.com/g/64/64'
	}
};

function formateDate(date) {
	return date.toLocaleDateString();
}
function Avatar(props) {
	return (
		<img
			className="Avatar"
			src={props.user.avaterUrl}
			alt={props.user.name}
		/>
	);
}
function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">{props.user.name}</div>
		</div>
	);
}
function CommentInfo(props) {
	return (
		<div>
			<div className="Comment-text">{comment.text}</div>
			<div className="Comment-date">{formateDate(comment.date)}</div>
		</div>
	);
}
function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<CommentInfo comment={props} />
		</div>
	);
}

const Element = (
	<Comment date={comment.date} text={comment.text} author={comment.author} />
);
ReactDOM.render(Element, document.getElementById('root'));
