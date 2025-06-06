import {type JSX} from "react";

type CardProps = {
    name: string,
    age: number,
    isStudent: boolean
};

const Card = (props: CardProps): JSX.Element => {
    return (
        <>
            <div className="card">
                <img className="card-img" src="https://media.licdn.com/dms/image/v2/D5603AQGMRkbuAIWwuQ/profile-displayphoto-shrink_800_800/B56ZcMaw6NGsAc-/0/1748260032792?e=1754524800&v=beta&t=7H5Po4c2HXJI-i5L4Vk_mdnxeQ0r35UZWGEWxwQErRo" alt="card_img" />
                <h2 className="card-title">{props.name}</h2>
                <h3>age: {props.age}</h3>
                <p>Student: {props.isStudent ? 'Yes': 'No'}</p>
                <p className="card-text">learning react now for get a job. I was learning Anguler but I find out there is not that much jobs for angular </p>
            </div>
        </>
    )
}

export default Card;