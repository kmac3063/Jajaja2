import React, {useEffect, useRef, useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {AdaptivityProvider, AppRoot, ScreenSpinner, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import WelcomeScreen from "./panels/WelcomeScreen";
import QRListScreen from "./panels/QRListScreen";
import AllowedQRListScreen from "./panels/AllowedQRListScreen";

const App = (allowedList1 = allowedList) => {
    const [activePanel, setActivePanel] = useState('WelcomeScreen');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [scheme, setScheme] = useState(null)
    const [codeList, setCodeList] = useState([])
    const [logText, setLogText] = useState("")
    const [getText, setGetText] = useState("")

    const allowedList = [{text: ".org", id: 4}, {text: ".ru", id: 5}, {text: "aa", id: 6}]

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme')
                // schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                schemeAttribute.value = 'client_light';
                setScheme(schemeAttribute.value)
                document.body.attributes.setNamedItem(schemeAttribute);
            }

            if (type === 'VKWebAppOpenCodeReaderResult') {
                setCodeList(codeList1 => [...codeList1, {text: data.code_data, id: Math.random().toString()}])
            }
        });

        async function fetchData() {
            setPopout(null);
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            bridge.send("VKWebAppStorageGetKeys", {"count": 1, "offset": 0}).then(data => {
                bridge.send("VKWebAppStorageGet", {"keys": ["codeList"]}).then(data1 => {
                    setCodeList(JSON.parse(data1.keys[0].value))
                });
            }).catch(() => {
                bridge.send("VKWebAppStorageSet", {"key": "codeList", "value": JSON.stringify([])});
            })
        }

        fetchData();
    }, []);

    function useDidUpdateEffect(fn, inputs) {
        const didMountRef = useRef(false);

        useEffect(() => {
            if (didMountRef.current)
                fn();
            else
                didMountRef.current = true;
        }, inputs);
    }

    useDidUpdateEffect(() => {
        bridge.send("VKWebAppStorageSet", {
            "key": "codeList",
            "value": JSON.stringify(codeList)
        });
    }, [codeList])


    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    const showQRReader = () => {
        bridge.send("VKWebAppOpenCodeReader")
    }

    const openStories = () => {
        bridge.send("VKWebAppShowStoryBox",
            {
                "background_type": "image",
                "url": "https://sun9-42.userapi.com/impg/rdNjuAEyITb4lpQPkito6zQIKEXgRwM-gDOhHw/_Dyyrjm-FX8.jpg?size=259x245&quality=96&sign=81f34933a25235fdb3480afcd6aeb53b&type=album",
                "stickers": [
                    {
                        "sticker_type": "renderable",
                        "sticker": {
                            "can_delete": 0,
                            "content_type": "image",
                            "url": "https://sun9-83.userapi.com/impg/ACcK-FaiYFdWGyaghb8Pik_0SRRrJXah6XcfrQ/Gq1TTxAKED8.jpg?size=320x320&quality=96&sign=d1c5ff242b71cba42d7ddddb543b0f79&type=album",
                            "clickable_zones": [
                                {
                                    "action_type": "app",
                                    "action": {
                                        "app_id": 7993425,
                                    },
                                }
                            ]
                        }
                    }
                ]
            })
    }

    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel={activePanel} popout={popout}>
                    <WelcomeScreen id='WelcomeScreen' fetchedUser={fetchedUser} go={go}/>
                    <Home id='Home'
                          fetchedUser={fetchedUser} go={go} showQRReader={showQRReader}
                          codeList={codeList}
                          logText={logText}
                          getText={getText}
                          openStories={openStories}
                    />
                    <QRListScreen id='QrList' fetchedUser={fetchedUser} go={go}
                                  codeList={codeList}
                                  setCodeList={setCodeList}/>
                    <AllowedQRListScreen id='AllowedQrList'
                                         fetchedUser={fetchedUser}
                                         go={go}
                                         codeList={codeList}
                                         allowedList={allowedList}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;
