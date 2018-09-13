import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    return <div className="data">
        <a className="data-open">Show Details</a>
        <div>
          <div className="photo-container">
            <Link to={`${this.props.match.url}/${this.props.item.name}`} className="photo">
              <img src={this.props.item.photo} alt={this.props.item.name} />
            </Link>
            {/* <a href={this.props.item.photo} target="_blank" rel="noopener noreferrer" className="photo">
              <img src={this.props.item.photo} alt={this.props.item.name} />
            </a> */}
            <a className="photo-more-link" href="https://unsplash.com/search/photos/people" target="_blank" rel="noopener noreferrer">
              More
            </a>
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
              License
            </a>
          </div>
          <ul>
            <li>
              <span className="label">Gender:</span> <span className="click-to-select">
                {this.props.item.gender}
              </span>
            </li>
            <li>
              <span className="label">Region:</span> <span className="click-to-select">
                {this.props.item.region}
              </span>
            </li>
            <li>
              <span className="label">Phone:</span> <span className="click-to-select">
                {this.props.item.phone}
              </span>
            </li>
            <li>
              <span className="label">Birthday:</span> <span className="click-to-select">
                {this.props.item.birthday.dmy}
              </span>
            </li>
            <li>
              <span className="label">Email:</span> <span className="click-to-select">
                {this.props.item.email}
              </span>
            </li>
            <li>
              <span className="label">Password:</span> <span className="click-to-select">
                {this.props.item.password}
              </span>
            </li>
          </ul>
        </div>
      </div>;
  }
}
