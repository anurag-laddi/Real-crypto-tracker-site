import React from "react";

class Coins extends React.Component {
    constructor() {
        super();
        this.state = {
            coins: [],
            searchQuery: ""
        }
    }

    componentDidMount() {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&ord").then((response) => response.json().then((result) => {
            this.setState({ coins: result })
        }))
    }

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const { coins, searchQuery } = this.state;
        const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));


        return (
            <>
                <div className="main">
                    <div className="title_name">
                        <h1>CRYPTO-TRACKER</h1>
                    </div>

                    <div className="search_bar">
                        <input type="text" placeholder="Search here - exp : Bitcoin" onChange={this.handleSearch} />
                    </div>
                    <div className="marquee"><marquee><i>"We would like to clarify that our crypto tracker provides approximate market rates rather than real-time accurate data. For real and precise rates, we recommend consulting reliable real-time crypto tracker sites. We strive to enhance our services to meet the evolving needs of our users."</i></marquee></div>
                    <div className="details">
                        <div className="d1">Logo</div>
                        <div className="d2">Name</div>
                        <div className="d3">Symbol</div>
                        <div className="d4">Current Price</div>
                        <div className="d5">Last Updated</div>
                    </div>
                    <div className="container">
                        <ul>
                            {filteredCoins.map((value) =>
                                <li key={value.id}>
                                    <div className="row">
                                        <div className="row1"><img src={value.image} alt={value.name} /></div>

                                        <div className="row2">{value.name}</div>
                                        <div className="row3">{value.symbol}</div>
                                        <div className="row4">₹ {value.current_price}</div>
                                        <div className="row5">{value.last_updated}</div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <footer>
                    <div className="footer_container">
                        <div className="footer_text">
                            <div className="footer_heading"><h1>Crypto-Tracker</h1></div>
                            <div className="footer_reserved"><p>All rights reserved to Anurag Bansal</p></div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Coins;
