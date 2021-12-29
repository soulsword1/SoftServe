import React, { Component } from "react";

export default class Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id: 1,
                    text: "hidden text 1"
                },
                {
                    id: 2,
                    text: "hidden text 2"
                },
                {
                    id: 3,
                    text: "hidden text 3"
                },
            ],
            text: ''
        };
    }

    addText = (el) => {
        const text = document.getElementsByClassName('text');
        text[0].textContent = el;
    }

    removeText = () => {
        const text = document.getElementsByClassName('text');
        text[0].textContent = null;
    }

    render() {
        const list = this.state.list;
        return(<div>
                <ul>
            {list.map(item => 
                <li className="element" onMouseOver={() => this.addText(item.text)} onMouseOut={this.removeText} key={item.id}>id - {item.id}</li>
            )}
            </ul>
            <p className="text"></p>
        </div>
        )
    }
}
