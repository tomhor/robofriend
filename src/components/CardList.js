import React, { Fragment } from 'react';
import Card from './Card'


const CardList = ({robots}) => {
    return(
        <Fragment>
            <div>
                {
                robots.map((user) => {
                    return (
                    < Card 
                        key={user.id} 
                        id={user.id} 
                        name={user.name}
                        email={user.email}
                    />
                    )
                })
                }
            </div>
        </Fragment>
    )
}

export default CardList;