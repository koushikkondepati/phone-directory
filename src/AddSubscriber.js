import React from 'react';
import Header from './Header';
import './AddSubscriber.css';


class AddSubscriber extends React.Component
{
    render()
    {
        return(
            <div>
                <Header heading="Add Subscriber"></Header>
                <div className='component-body-container'>
                    <button className='custom-btn'>Back</button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'>Name</label><br/>
                        <input id='name' type='text' className='input-control' name='name'/><br/><br/>
                        <label htmlFor='phone' className='label-control'>Phone</label><br/>
                        <input id='phone' type='text' className='input-control' name='phone'/><br/><br/>
                        <div className='subscriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subscribers to be added</span><br/>
                            <span className='subscriber-info'>Name</span><br/>
                            <span className='subscriber-info'>Phone</span>
                        </div>
                        <button type='submit' className='custom-btn add-btn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
};


export default AddSubscriber;