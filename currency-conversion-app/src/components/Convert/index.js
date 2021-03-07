import React, { Component } from 'react';
import Axios from 'axios';
import convertStyles from './convertStyles.css';

export default class Convert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            fromCurrency: 'USD',
            toCurrency: 'GBP',
            amount: 1,
            result: null,
        };
    }

    componentDidMount() {
        Axios.get("http://api.openrates.io/latest")
            .then(response => {
                const currencyAr = ["EUR"];
                for (const key in response.data.rates) {
                    currencyAr.push(key);
                }
                this.setState({ currencies: currencyAr });
            })
            .catch(err => {
                console.log("Error!");
            });
    }

    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            Axios.get(
                `http://api.openrates.io/latest?base=${this.state.fromCurrency
                }&symbols=${this.state.toCurrency}`
            )
                .then(response => {
                    const result = this.state.amount * response.data.rates[this.state.toCurrency];
                    this.setState({ result: result.toFixed(5) });
                })
                .catch(err => {
                    console.log("Error!");
                })
        } else {
            this.setState({ result: "You cant convert the same currency!" });
        }

    };

    selectHandler = event => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value });
        } else {
            if (event.target.name === "to") {
                this.setState({ toCurrency: event.target.value });
            }
        }
    };

    render() {
        return (
            <div className="convert">
                <h2>
                    Currency Converter
                </h2>
                <div className="From">
                    <input
                        name="amount"
                        type="text"
                        value={this.state.amount}
                        onChange={event => this.setState({ amount: event.target.value })}
                    />
                    <select
                        name="from"
                        onChange={event => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <select
                        name="to"
                        onChange={event => this.selectHandler(event)}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <button onClick={this.convertHandler}>Convert</button>
                    {this.state.result && <h3>{this.state.result}</h3>}
                </div>
            </div>
        );
    }
}
