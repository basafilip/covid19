import React from 'react';

class ZarazeniSv extends React.Component {
    state = {
        case: []
    }

    onTermSubmit = async () => {
        await fetch("https://disease.sh/v3/covid-19/all")
            .then(res => res.json())
            .then((data) => {
                const toLocale = data.cases.toLocaleString();
                this.setState({ case: toLocale })

            })
            .catch(console.log);
    };

    async componentDidMount() {
        await this.onTermSubmit();
        console.log(this.state.case);

    }



    render() {

        return <div>{this.state.case}</div>
    }
};

export default ZarazeniSv;