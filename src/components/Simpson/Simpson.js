const Simpson = ({simpson}) => {
    const {name, image} = simpson;

    return (
        <div>
            <div>name: {name}</div>
            <div>surname: Simpson</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};