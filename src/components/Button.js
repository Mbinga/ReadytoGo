const Button = ({ switcher, setSwitch }) => {
    return { switcher } === true ? (
        <button
            onClick={() => {
                setSwitch(true);
            }}
        >
            ON
        </button>
    ) : (
        <button
            onClick={() => {
                setSwitch(false);
            }}
        >
            OFF
        </button>
    );
};
export default Button;
