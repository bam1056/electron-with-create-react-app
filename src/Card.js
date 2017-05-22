import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    const direction = this.props.up ? 'up' : 'down'
    switch (direction) {
      case 'down': return <img src={this.props.value.backgroundURL} onClick={this.handleClick} className={`card ${direction}`} alt="backgroundImg" />
      break
      case 'up': return <img src={this.props.value.cardImageURL} className={`card ${direction}`} alt={this.props.value.name}/>
      break
      default: return <img src={this.props.value.backgroundURL} onClick={this.handleClick} className={`card ${direction}`} alt="backgroundImg"/>
    }
  }
}

export default Card
