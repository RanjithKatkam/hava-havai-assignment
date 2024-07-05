import { Button, defaultTheme, FileTrigger, Item, Picker, Provider, Switch, TextArea, TextField } from "@adobe/react-spectrum";
import "./index.css";

function TerminalSerivces(params) {
    return (
        <>
            <h1 className="services-heading">Services</h1>
            <h2 className="lf">Lost & Found</h2>
            <div className="filters-group">
                <Provider UNSAFE_className="filters" theme={defaultTheme} colorScheme="light">
                    <TextField label="Service Name" />
                </Provider>
                <Provider UNSAFE_className="filters" theme={defaultTheme} colorScheme="light">
                    <Picker label="Category">
                        <Item>Option 1</Item>
                        <Item>Option 2</Item>
                        <Item>Option 3</Item>
                        <Item>Option 4</Item>
                    </Picker>
                </Provider>
                <Provider UNSAFE_className="filters" theme={defaultTheme} colorScheme="light">
                    <Picker label="Sub-Category">
                        <Item>Option 1</Item>
                        <Item>Option 2</Item>
                        <Item>Option 3</Item>
                        <Item>Option 4</Item>
                    </Picker>
                </Provider>
                <Provider UNSAFE_className="filters" theme={defaultTheme} colorScheme="light">
                    <FileTrigger acceptedFileTypes={["image/png"]}>
                        <Button UNSAFE_className="upload-button" variant="primary">
                            <img alt="upload" src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720169256/Share_elpfec.png" />
                            <p>upload image</p>
                        </Button>
                    </FileTrigger>
                </Provider>
                <Provider UNSAFE_className="filters show-image" theme={defaultTheme} colorScheme="light">
                    <Switch>Show Image</Switch>
                </Provider>
                <Provider UNSAFE_className="filters" theme={defaultTheme} colorScheme="light">
                    <TextArea placeholder="type here" label="Description" />
                </Provider>
            </div>
            <h2 className="lf">Lounge</h2>
            <h2 className="lf">Money Exchange</h2>
        </>
    );
}

export default TerminalSerivces;
