import React from 'react';

class FormulatedQuestion extends React.Component {
    render() {
        let visibility = this.props.question ? 'visible' : 'hidden';

        return (
            <header className={visibility}>
                <h1 className="text-center text-nightfall bg-grey-lightest rounded px-8 pt-6 pb-8">
                    {this.props.question}
                </h1>
            </header>
        );
    }
}

export default FormulatedQuestion;
