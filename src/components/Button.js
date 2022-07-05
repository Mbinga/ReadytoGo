const Button = ({ switcher, setSwitch }) => {
    console.log(switcher);
    return switcher === true ? (
        <button
            onClick={() => {
                setSwitch((switcher = false));
            }}
        >
            OFF
        </button>
    ) : (
        <button
            onClick={() => {
                setSwitch((switcher = true));
            }}
        >
            ON
        </button>
    );
};
export default Button;
