import React from 'react';

import {Cell, Counter, Panel, PanelHeader, Separator} from '@vkontakte/vkui';
import {Icon28QrCodeOutline, Icon28ScanViewfinderOutline, Icon28StarsCircleFillViolet} from "@vkontakte/icons";
import { Icon28PopupStickersCircleFillRaspberryPinkProduct } from '@vkontakte/icons';
const Home = ({id, go, fetchedUser, showQRReader, codeList, logText, getText, openStories}) => {
    return <Panel id={id}>
        <PanelHeader>QR приложулька</PanelHeader>

        <Cell onClick={showQRReader} before={<Icon28ScanViewfinderOutline/>}>
            Отсканировать QR код
        </Cell>

        <Cell onClick={go} data-to='QrList' expandable before={<Icon28QrCodeOutline/>}
              indicator={<Counter mode="primary">{codeList.length}</Counter>}>
            Список отсканированных QR кодов
        </Cell>

        <Separator/>

        <Cell onClick={go} data-to='AllowedQrList' expandable before={<Icon28StarsCircleFillViolet/>}>
            Бонусное задание
        </Cell>

        <Separator/>

        <Cell onClick={openStories} before={<Icon28PopupStickersCircleFillRaspberryPinkProduct/>}>
            Поделиться в историях
        </Cell>
    </Panel>
}

export default Home;
