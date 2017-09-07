/**
 * Created by hao on 7/8/17.
 */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    render () {
        return (
            <div>
                <AppBar onLeftIconButtonTouchTap={this.handleToggle} title="AI WORLD" />
                <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default TopNav
