import React from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class PhoneDirectory extends React.Component
{
    constructor()
    {
        super();
        this.state = {subscribersList : [{
            id:1,
            name:'koushik',
            phone:'9877481041'
        },
        {
            id:2,
            name:'kalyani',
            phone:'9505374564'
        }]}
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0)
        {
            newSubscriber.id = subscribersList[subscribersList.length-1].id + 1;
        } else 
        {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList:subscribersList});
        console.log(this.state.subscribersList);
    }
    render()
    {
        return(
            <Router>
                <Route  exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                <Route  exact path='/add' render={({history},props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>} />
            </Router>
        )
    }
};

export default PhoneDirectory;