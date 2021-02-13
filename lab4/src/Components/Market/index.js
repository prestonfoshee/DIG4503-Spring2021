import React, { Component } from 'react';
import MarketItem from '../MarketItem';

export default class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    render() {
        const styleSheet = {
            button: {
                backgroundColor: '#4CAF50',
                border: "none",
                color: "white",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: 16,
                borderRadius: 5
            },
            buttonDiv: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10
            },
            list: {
                textAlign: "center"
            }
        };

        return (
            <div>
                <div style={styleSheet.buttonDiv}>
                    <button style={styleSheet.button} onClick={() => {
                        const items = this.state.items;
                        items.push(<MarketItem count={items.length} />);
                        this.setState({ items: items })
                    }}>
                        Make Item
                </button>
                </div>
                <div>
                    {
                        this.state.items.map(function (item, index) {
                            return <div style={styleSheet.list} index={index} key={item}>{item}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}
