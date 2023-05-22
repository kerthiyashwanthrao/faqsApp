// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {faqsList: []}

  componentDidMount() {
    this.addProperty()
  }

  isClicked = id => {
    this.setState(prev => ({
      faqsList: prev.faqsList.map(item => {
        if (id === item.id) {
          return {...item, isOpened: !item.isOpened}
        }
        return item
      }),
    }))
  }

  addProperty = () => {
    const {faqsList} = this.props
    const newList = faqsList.map(item => ({...item, isOpened: false}))
    this.setState({faqsList: newList})
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="container">
        <div className="outerCard">
          <div className="innerCard">
            <h1 className="heading">FAQs</h1>
            <ul className="ulContainer">
              {faqsList.map(item => (
                <FaqItem item={item} key={item.id} isClicked={this.isClicked} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Faqs
