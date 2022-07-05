import Button from "./Button";
const Switch = ({
    switch1,
    setSwitch1,
    switch2,
    setSwitch2,
    switch3,
    setSwitch3,
}) => {
    return (
        <div>
            <Button switch1={switch1} setSwitch1={setSwitch1} />
            <Button switch2={switch2} setSwitch2={setSwitch2} />
            <Button switch3={switch3} setSwitch3={setSwitch3} />

            {switch1 === true && switch2 === true && switch3 === true ? (
                <button>go</button>
            ) : (
                <button>NO WAY</button>
            )}
        </div>
    );
};

export default Switch;
