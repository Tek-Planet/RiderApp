import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Home extends Component {

    componentDidMount(){
        this.props.setName()
    }
    render() {
        return (
            <View>
                <Text> seems shit works {this.props.name} </Text>
            </View>
        )
    }
}

export default Home
