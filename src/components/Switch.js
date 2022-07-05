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
            <Button switcher={switch1} setSwitch={setSwitch1} />
            <Button switcher={switch2} setSwitch={setSwitch2} />
            <Button switcher={switch3} setSwitch={setSwitch3} />

            {switch1 === true && switch2 === true && switch3 === true ? (
                <button>go</button>
            ) : (
                <button>NO WAY</button>
            )}
        </div>
    );
};

export default Switch;
