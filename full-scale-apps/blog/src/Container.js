import React, { Component } from 'react';
import PostPreview from './PostPreview';

export default class Container extends Component {
	render() {
		return(
			<div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <PostPreview />
                      <hr />
                      <PostPreview />
                      <hr />
                      <PostPreview />
                      <hr />
                      <PostPreview />
                      <hr />
                      
                      <ul className="pager">
                          <li className="next">
                              <a href="#">Older Posts &rarr;</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
		)
	}
}