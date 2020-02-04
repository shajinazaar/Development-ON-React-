import React from 'react'
import ReactDOM, { render } from 'react-dom'
import AddOptions from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

//Class based component

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options,

        }
    }


    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e) {
            // Do nothing at all

        }


    }

    componentDidUpdate(prevPops, prevState) {

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

        }

    }


    handleDeleteOptions() {
        this.setState(() => ({ options: [] })
        )
    }


    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({

            options: prevState.options.filter((option) => optionToRemove !== option)

        }))
    }

    handlePick() {


        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option)


    };


    handleAddOption(option) {
        if (!option) {
            return 'Enter valid  value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exit';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) })

        )
    }


    render() {

        const subtitle = "Put your life into the hand of computer";

        return (
            <div>
                <Header subtitle={subtitle} />

                <div className="container">

                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions

                            handleAddOption={this.handleAddOption}
                        />
                    </div>


                </div>


            </div>

        )
    }

}

IndecisionApp.defaultProps = {
    options: []
}

