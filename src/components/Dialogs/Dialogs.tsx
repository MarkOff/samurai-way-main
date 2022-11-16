import React from 'react';
import s from './Dialogs.module.css';
import {findAllByDisplayValue} from '@testing-library/react';
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: string

}

type Message = {
    message: string
}


const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props: Message) => {
    return (
            <div className={s.dialog}>
                {props.message}
            </div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Vladislav'} id={'1'}/>
                <DialogItem name={'Ivan'} id={'2'}/>
                <DialogItem name={'Slava'} id={'3'}/>
                <DialogItem name={'Anna'} id={'4'}/>
            </div>

            <div className={s.messages}>

                <Message message={'Hi'}/>
                <Message message={'Im fine, ane how are you?'}/>
                <Message message={'God job'}/>
                <Message message={'Go Go Go'}/>

            </div>

        </div>

    );
}


// }

export default Dialogs;