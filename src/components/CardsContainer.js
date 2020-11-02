import React, { Component } from "react";
import HouseCard from '../components/HouseCard'

class CardsContainer extends Component {

    render() {
        const renderHomes = () => this.props.allHomes.map(
            home => <HouseCard
                key={home.id}
                home={home}
                clickAction={this.props.clickAction}
            />
        )
        return (
            <div className="cards-container">
                {renderHomes()}
            </div>
        )
    }
}

export default CardsContainer;