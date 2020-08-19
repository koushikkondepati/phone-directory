import React from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

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
            <div>
               {/* <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/> */}
               <ShowSubscribers subscribersList={this.state.subscribersList}/>
            </div>
        )
    }
};

export default PhoneDirectory;