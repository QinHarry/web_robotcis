/**
 * Created by hao on 7/9/17.
 */
import React, { Component } from 'react';
import map_img from '../images/map_final.jpg'
import robot_img from '../images/robot.png'
import '../styles/robot.css'

class Robot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            setGoal: false,
            back: false
        }
        let robot = new Image()
        robot.src = robot_img
        let map = new Image()
        map.src = map_img

        this.options = {
            robot: robot,
            map: map,
            ...this.props.options
        }

        this.__draw = this.__draw.bind(this)
    }

    handleGoalChange (event) {
        let rect = this.canvas.getBoundingClientRect()
        let can_x = event.clientX - rect.left
        let can_y = event.clientY - rect.top
        if (can_x > 600 && can_x < 730 && can_y > 4 && can_y < 35) {
            this.setState({setGoal: !this.state.setGoal})
        }else if (can_x > 800 && can_x < 870 && can_y > 4 && can_y < 35) {
            this.setState({back: !this.state.back})
        }

        if (this.state.setGoal && this.state.back) {
            this.setState({setGoal: false})
        }

        if (this.state.setGoal || this.state.back) {

            let x = this.state.setGoal ? (can_x - 608) * 1742 / (20 * 900.0) : 0
            let y = this.state.setGoal ? (can_y - 225) * 1742 / (20 * 900.0) : 0
            let myHeaders = new Headers()
            myHeaders.append('Content-Type', 'application/json')
            var fetchData = {
                method: 'POST',
                body: JSON.stringify({x: x, y: y}),
                headers: myHeaders
            }
            fetch('http://localhost:3000/robot/goal', fetchData)
                .then(response => {
                })

            this.setState({
                setGoal: false,
                back: false
            })
        }

    }

    componentDidMount () {
        window.requestAnimationFrame(this.__draw);

    }

    __draw() {
        if (!this.canvas) {
            return;
        }
        fetch('http://localhost:3000/robot')
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.setState({
                    x: json.x,
                    y: json.y
                })
            })
        const { options } = this;
        let x = parseFloat(this.state.x)
        let y = parseFloat(this.state.y)
        let setGoal = this.state.setGoal ? 'Setting Goal' : 'Set Goal'
        let back = this.state.back ? 'backing' : 'back'
        const ctx = this.canvas.getContext("2d")
        ctx.drawImage(options.map,0,0)
        ctx.drawImage(options.robot, 595 + y * 20 * 900 / 1742.0 ,205 + x * 20 * 900 / 1742.0, 20, 30)
        ctx.font ='28px Arial';
        ctx.fillStyle = '#C6FF00'
        ctx.fillText(setGoal, 600, 30)
        ctx.fillText(back, 800, 30)
        window.requestAnimationFrame(this.__draw);
    }

    render() {
        return (
            <div className="canvas-map">
                <canvas onClick={this.handleGoalChange.bind(this)}  id="canvas" ref={ref => this.canvas = ref} height={1200} width={1200} />
            </div>
        );
    }
}

export default Robot
