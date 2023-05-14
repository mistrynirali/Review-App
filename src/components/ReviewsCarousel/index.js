import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const lastIndex = reviewsList.length - 1

    this.setState(prevState =>
      prevState.activeReviewIndex < lastIndex
        ? {activeReviewIndex: prevState.activeReviewIndex + 1}
        : null,
    )
  }

  onClickLeftArrow = () => {
    this.setState(prevState =>
      prevState.activeReviewIndex > 0
        ? {activeReviewIndex: prevState.activeReviewIndex - 1}
        : null,
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewData = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Reviews</h1>
          <img
            src={currentReviewData.imgUrl}
            alt={currentReviewData.username}
            className="profile-image"
          />
          <div className="arrow-container">
            <button
              type="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="name">{currentReviewData.username}</p>

            <button
              type="button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="paragraph">{currentReviewData.companyName}</p>
          <p className="paragraph">{currentReviewData.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
