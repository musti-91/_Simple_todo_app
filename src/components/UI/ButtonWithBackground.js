import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import PropTypes from 'prop-types'


class ButtonWithBackground extends Component {
  render () {
    const { onPress } = this.props
    const { button } = styles

    const content = (
      <View>
        <Text>something</Text>
      </View>
    )
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback onPress={onPress} style={button}>
          {content}
        </TouchableNativeFeedback>
      )
    }
    return (
      <TouchableOpacity onPress={onPress} style={button}>
        {content}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    color: 'red'
  }
})
ButtonWithBackground.propTypes = {
  onPress: PropTypes.func
}

export default ButtonWithBackground