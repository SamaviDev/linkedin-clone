export default function PostOpt(props) {
    return (
        <ul>
            {props.options.map((option, index) => (
                <li key={index}>
                    <button onClick={() => {option.action()}}>{option.icon}</button>
                </li>
            ))}
        </ul>
    );
}