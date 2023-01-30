import React from 'react'
import { useParams,Link } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'

const QuestionsDetails = () => {

    const {id} = useParams()

    var questionList = [{
        _id: '1',
        upVotes: 3,
        downVotes: 2,
        noOfAnswer: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js","mongodb"],
        userPosted:"mano",
        askedOn:"jan 1",
        userId:1,
        answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]
      },{
        _id: '2',
        upVotes: 3,
        downVotes: 2,
        noOfAnswer: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "python", "R"],
        userPosted:"mano",
        askedOn:"jan 1",
        userId:1,
        answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]
      },{
        _id: '3',
        upVotes: 3,
        downVotes: 2,
        noOfAnswer: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js","mongodb"],
        userPosted:"mano",
        askedOn:"jan 1",
        userId: 1,
        answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]
      }]

  return (
    <div className='question-details-page'>
        {questionList === null?
        <h1>Loading...</h1>:
        <>
            {
                questionList.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container' >
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={upvote} alt="" width='18' className='votes-icon'/>
                                    <p>{question.upVotes - question.downVotes}</p>
                                    <img src={downvote} alt="" width='18' className='votes-icon'/>
                                </div>
                                <div style={{width:"100%"}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='question-actions-user'>
                                        <div>
                                            <button type='button'>Share</button>
                                            <button type='button'>Delete</button>
                                        </div>
                                        <div>
                                            <p>asked {question.askedOn}</p>
                                            <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                {/* {alert(question.userPosted.charAt(0).toUpperCase)} */}
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {
                            question.noOfAnswer !== 0  &&
                            (
                                <section>
                                    <h3>{question.noOfAnswer} answers</h3>
                                    <DisplayAnswer key={question._id} question={question}/>
                                </section>
                            )
                        }


                        <section className='post-ans-container'>
                            <h3>Your Answer</h3>
                            <form>
                                <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                                <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                            </form>
                            <p>
                                Browse other question tagged
                                {
                                    question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                    ))
                                } or 
                                <Link to='/AskQuestion' style={{textDecoration : "none", color: "#009dff"}}>ask your own question.</Link>
                            </p>
                        </section>
                    </div>
                )) 
            }
        </>
        }
    </div>
  )
}

export default QuestionsDetails