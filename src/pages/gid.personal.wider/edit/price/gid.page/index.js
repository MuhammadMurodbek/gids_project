import React from 'react';
import {Wrapper} from './style';
import InputLabeled from "../../../../../components/molecules/input.labeled"
import {Container} from '../../../../../styles/container/index.style'
import Selection from '../../../../../components/atom/select'
import {TextTitle} from "../../../../../styles/textTitle/index.style"
 import Button from "../../../../../components/atom/button"
const Index = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <TextTitle font="14px" align="left" position="relative" p_top="20px">Bir kunlik xizmat narxi</TextTitle>
                    <div className="wrap_class">
                        <InputLabeled width="170px" placeholder="50" typeNumber />
                        <div className="wrap_class_inner"><Selection width="170px" placeholder="$"/></div>
                        <p>* средняя продолжительность дня 8 - 9 часов</p>
                    </div>
                </div>
                <div>
                    <TextTitle font="14px" align="left" position="relative" p_top="20px">Bir soatlik xizmat narxi</TextTitle>
                    <div className="wrap_class">
                        <InputLabeled width="170px" placeholder="50" typeNumber />
                        <div className="wrap_class_inner"><Selection width="170px" placeholder="$"/></div>
                        <p>* средняя продолжительность дня 8 - 9 часов</p>
                    </div>
                </div>
            </Container>
            <Container padding="10px 0" margin="10px 0 0 -30px" textAlign="right">
                <Button>Saqlash</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
