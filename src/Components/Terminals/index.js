import {
    ActionButton,
    Button,
    ButtonGroup,
    Content,
    defaultTheme,
    Dialog,
    DialogTrigger,
    Divider,
    FileTrigger,
    Item,
    Provider,
    TabList,
    TabPanels,
    Tabs,
    TextArea,
    TextField,
} from "@adobe/react-spectrum";
import "./index.css";

function Terminals(params) {
    return (
        <Provider colorScheme="light" UNSAFE_className="tabs" theme={defaultTheme}>
            <Tabs>
                <TabList>
                    <Item key="A">Terminals</Item>
                    <Item key="B">Transport</Item>
                    <Item key="C">Contact Details</Item>
                </TabList>
                <TabPanels>
                    <Item key="A">
                        <div className="tabs-list">
                            <div className="card border">
                                <div className="card-image">
                                    <img src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720163417/Image_t8yt8y.png" alt="Terminal" />
                                </div>
                                <div className="card-content">
                                    <h3>Terminal 1</h3>
                                    <p>Optional metadata should be two lines.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720163417/Image_t8yt8y.png" alt="Terminal" />
                                </div>
                                <div className="card-content">
                                    <h3>Terminal 2</h3>
                                    <p>Optional metadata should be two lines.</p>
                                </div>
                            </div>
                            <DialogTrigger>
                                <ActionButton UNSAFE_className="action-button">+ Add Terminal</ActionButton>
                                {(close) => (
                                    <Dialog>
                                        <Content>
                                            <TextField id="text1" width={400} placeholder="Terminal Title" />
                                            <Divider />
                                            <TextArea id="text2" width={400} placeholder="Description" />
                                        </Content>
                                        <ButtonGroup id="button-group">
                                            <FileTrigger acceptedFileTypes={["image/png"]}>
                                                <Button id="button3" UNSAFE_className="upload-button" variant="primary">
                                                    <img
                                                        alt="upload"
                                                        src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720169256/Share_elpfec.png"
                                                    />
                                                    <p>upload image</p>
                                                </Button>
                                            </FileTrigger>
                                            <Button id="button1" variant="secondary" onPress={close}>
                                                Cancel
                                            </Button>
                                            <Button id="button2" variant="secondary" onPress={close} autoFocus>
                                                Continue
                                            </Button>
                                        </ButtonGroup>
                                    </Dialog>
                                )}
                            </DialogTrigger>
                        </div>
                    </Item>
                    <Item key="B">
                        <div className="tabs-list">No Data</div>
                    </Item>
                    <Item key="C">
                        <div className="tabs-list">No Data</div>
                    </Item>
                </TabPanels>
            </Tabs>
        </Provider>
    );
}

export default Terminals;
