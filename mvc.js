class View {
  render(state) {
    console.log(`Show actual state in terminal, DOM, canvas or something anywhere: door is ${state.isOpen ? 'open' : 'closed'}`)
  }
}

class Model {
  constructor() {
    this.state = {
      isOpen: true,
    }
    this.view = new View()
  }

  setState(state) {
    this.state = state
    this.view.render(this.state)
  }
}

class Controller extends Model {
  constructor() {
    super()
  }
  onPush() {
    this.setState({ isOpen: false })
  }
  onPull() {
    this.setState({ isOpen: true })
  }
}

var door = new Controller()
door.onPush()
door.onPull()
