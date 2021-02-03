import React from 'react';

class Update extends React.Component {
    state = {
        case: []
    }

    onTermSubmit = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries/croatia?strict=true")
            .then(res => res.json())
            .then((data) => {
                const updated = new Date(data.updated).toLocaleString()
                this.setState({ case: updated })

            })
            .catch(console.log);
    };

    async componentDidMount() {
        await this.onTermSubmit();
        console.log('Update',this.state.case);
    }

    render() {

        return (this.state.case)
    }
};

export default Update;