// Write your code here.
import './index.css'

const FaqItem = props => {
  const {item, isClicked} = props
  const {id, questionText, answerText, isOpened} = item

  const onClickBtn = () => {
    isClicked(id)
  }

  const img = !isOpened ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      alt="plus"
      className="plusImg"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      alt="minus"
      className="minusImg"
    />
  )

  return (
    <li className="container">
      <div className="questionContainer">
        <h1 className="questionPara">{questionText}</h1>
        <div className="btnContainer">
          <button className="btn" onClick={onClickBtn} type="button">
            {img}
          </button>
        </div>
      </div>
      {isOpened ? (
        <div>
          <hr className="hr" />
          <p className="answerPara">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}
export default FaqItem
