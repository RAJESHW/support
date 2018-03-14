import React, { Component } from "react";
import CardsContent from "../mocks/mockCards.json";

export default class IteratableCards extends Component {
  renderCards(item, index) {
    return (
      <div key={index}>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>{item.cardTitle}</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className={`tag fill ${this.props.cardsClass}`}
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  {item.gridContent}
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
      </div>
    );
  }
  getCards() {
    const { whichCard } = this.props;
    if (whichCard === "green") {
      return CardsContent.greenCard.map((item, index) => {
        return this.renderCards(item, index);
      });
    } else if (whichCard === 'blue') {
        return CardsContent.blueCard.map((item, index) => {
            return this.renderCards(item, index);
          });
    }
  }
  render() {
    return this.getCards();
  }
}
