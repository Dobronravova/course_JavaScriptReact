import "./app-filter.css";
import styled from 'styled-components';

const Wrapper = styled.div`
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: 'Все сотрудники', colored: false},
        {name: "rice", label: 'На повышение', colored: false},
        {name: "moreThen1000", label: 'З/П больше 1000$', colored: true},
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
    //Динамический класс
        const style = colored ? {color: 'red'} : null;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
                    style={style}>
                    {label}
            </button>
        )
    })
    return (
        <Wrapper>
            <div className="btn-group">
                {buttons}
                {/* <button type="button"
                        className="btn btn-light">
                        Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        З/П больше 1000$
                </button> */}
            </div>
        </Wrapper>
    )
}

export default AppFilter;